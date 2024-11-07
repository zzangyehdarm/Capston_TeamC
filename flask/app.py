from flask import Flask, request, jsonify
import torch
import torch.nn.functional as F
from transformers import BertModel
from kobert_tokenizer import KoBERTTokenizer
import numpy as np

# Flask 앱 초기화
app = Flask(__name__)

# 모델과 토크나이저 로드
MODEL_PATH = 'best_model.pth'  # .pt 파일 경로 설정
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

num_labels = 19  # 레이블 개수에 맞게 설정

# KoBERT 모델과 토크나이저 로드
tokenizer = KoBERTTokenizer.from_pretrained('skt/kobert-base-v1')
bertmodel = BertModel.from_pretrained('skt/kobert-base-v1', return_dict=False)

# BERTClassifier 클래스 정의 (훈련 코드와 동일하게)
class BERTClassifier(torch.nn.Module):
    def __init__(self,
                 bert,
                 hidden_size=768,
                 num_classes=num_labels,
                 dr_rate=None):
        super(BERTClassifier, self).__init__()
        self.bert = bert
        self.dr_rate = dr_rate

        self.classifier = torch.nn.Linear(hidden_size, num_classes)
        if dr_rate:
            self.dropout = torch.nn.Dropout(p=dr_rate)

    def gen_attention_mask(self, token_ids, valid_length):
        attention_mask = torch.zeros_like(token_ids)
        for i, v in enumerate(valid_length):
            attention_mask[i][:v] = 1
        return attention_mask.float()

    def forward(self, token_ids, valid_length, segment_ids):
        attention_mask = self.gen_attention_mask(token_ids, valid_length)
        _, pooler = self.bert(input_ids=token_ids,
                              token_type_ids=segment_ids.long(),
                              attention_mask=attention_mask.to(device),
                              return_dict=False)
        if self.dr_rate:
            out = self.dropout(pooler)
        else:
            out = pooler
        return self.classifier(out)

# 모델 로드
def load_model():
    model = BERTClassifier(bertmodel, dr_rate=0.1).to(device)
    model.load_state_dict(torch.load(MODEL_PATH, map_location=device))
    model.eval()
    return model

model = load_model()

# 입력 데이터를 전처리하는 함수
def preprocess_text(text):
    # 토큰화 및 인코딩
    transform = BERTSentenceTransform(tokenizer, max_seq_length=512, vocab=None, pad=True, pair=False)
    input_ids, valid_length, segment_ids = transform([text])

    # 텐서로 변환
    input_ids = torch.tensor([input_ids]).to(device)
    valid_length = torch.tensor([valid_length]).to(device)
    segment_ids = torch.tensor([segment_ids]).to(device)

    return input_ids, valid_length, segment_ids

# BERTSentenceTransform 클래스 정의
class BERTSentenceTransform:
    def __init__(self, tokenizer, max_seq_length, vocab=None, pad=True, pair=False):
        self._tokenizer = tokenizer
        self._max_seq_length = max_seq_length
        self._pad = pad
        self._pair = pair
        self._vocab = vocab

    def __call__(self, line):
        text_a = line[0]
        tokens_a = self._tokenizer.tokenize(text_a)

        if len(tokens_a) > self._max_seq_length - 2:
            tokens_a = tokens_a[:(self._max_seq_length - 2)]

        tokens = ['[CLS]'] + tokens_a + ['[SEP]']
        input_ids = self._tokenizer.convert_tokens_to_ids(tokens)
        valid_length = len(input_ids)
        segment_ids = [0] * valid_length

        if self._pad:
            padding_length = self._max_seq_length - valid_length
            input_ids = input_ids + [0] * padding_length
            segment_ids = segment_ids + [0] * padding_length

        return np.array(input_ids, dtype='int32'), valid_length, np.array(segment_ids, dtype='int32')

# 예측 함수 정의
def predict(text):
    token_ids, valid_length, segment_ids = preprocess_text(text)
    with torch.no_grad():
        output = model(token_ids, valid_length, segment_ids)
        probabilities = F.softmax(output, dim=1).cpu().numpy().flatten()  # 확률 값으로 변환
    return probabilities

# API 엔드포인트 생성
@app.route('/predict', methods=['POST'])
def predict_route():
    data = request.get_json()
    text = data.get('text')
    if not text:
        return jsonify({'error': 'No text provided'}), 400

    probabilities = predict(text)
    # 확률값을 높은 순서대로 정렬
    sorted_results = sorted(
        {f'label_{i}': float(prob) for i, prob in enumerate(probabilities)}.items(),
        key=lambda x: x[1],
        reverse=True
    )
    # 정렬된 결과를 딕셔너리 형태로 반환
    result = dict(sorted_results)
    return jsonify(result)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)
