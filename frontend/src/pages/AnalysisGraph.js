import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart } from "recharts";
import { useLocation } from "react-router-dom";

import React from 'react';

import '../styles/Nav.css';
import '../styles/AnalysisGraph.css';
import '../styles/Analysis.css';
import Icon from '../assets/Feather_Icon.png'

function AnalysisGraph(){
    const movePage = useNavigate();
    // const getDiaryAnalysis = async () => { 분석 불러오는 기능.
    //   await axios.get(`${backend}/`).then((res) => {
        
    //   })
    //   .catch(console.log());
    // };
    const location = useLocation();
    const data = location.state.data;
    
    const result = [
      {
        name: "우울감",
        num: data['label_0'],
        statement: "일기에서 마음의 방향이 우울감을 향하고 있어요.당신의 마음이 얼마나 무겁고 힘든지 느껴져요. 지금 이 순간에도 스스로를 아껴주며 작은 휴식을 취해보는 건 어떨까요? 🌸💛"
      },
      {
        name: "슬픔",
        num: data['label_1'],
        statement: "일기에서 마음의 방향이 슬픔을 향하고 있어요. 눈물이 나더라도 그것은 당신의 마음이 치유되기 위한 과정일 거예요. 울음 뒤엔 조금 더 가벼워진 마음을 느낄 수 있을 거예요. 🌧️☀️"
      },
      {
        name: "외로움",
        num: data['label_2'],
        statement: "일기에서 마음의 방향이 외로움을 향하고 있어요. 혼자라고 느껴질 때도 당신을 이해하고 응원하는 사람들이 있다는 걸 기억해주세요. 당신은 결코 혼자가 아니에요. 🤝💕"
      },
      {
        name: "분노",
        num: data['label_3'],
        statement: "일기에서 마음의 방향이 분노를 향하고 있어요. 화가 날 땐 그 감정을 억누르기보단 안전한 방법으로 표현해보세요. 당신의 분노는 중요한 메시지를 담고 있을 거예요. 🔥🌈"
      },
      {
        name: "무기력",
        num: data['label_4'],
        statement: "일기에서 마음의 방향이 무기력을 향하고 있어요. 아무것도 하고 싶지 않은 날도 괜찮아요. 쉬어가는 것도 중요한 일이니, 오늘은 자신에게 시간을 허락해 주세요. 🌙🍵"
      }
      ,
      {
        name: "감정조절이상",
        num: data['label_5'],
        statement: "일기에서 마음의 방향이 감정조절이상을 향하고 있어요. 감정이 흔들릴 때, 호흡을 천천히 고르고 잠시 눈을 감아보세요. 당신의 마음은 차차 균형을 찾을 수 있을 거예요. 🌊🌟"
      },
      {
        name: "상실감",
        num: data['label_6'],
        statement: "일기에서 마음의 방향이 상실감을 향하고 있어요. 소중한 무언가를 잃는다는 것은 누구에게나 큰 아픔이에요. 천천히 마음의 상처를 돌아보고 스스로를 다독여주세요. 🕊️💔"
      },
      {
        name: "식욕저하",
        num: data['label_7'],
        statement: "일기에서 마음의 방향이 식욕저하를 향하고 있어요. 몸과 마음이 힘들어 보일 때는 작은 과일이나 따뜻한 음료로 스스로를 달래주세요. 당신의 몸도 마음도 위로받을 가치가 있어요. 🍎☕"
      },
      {
        name: "식욕증가",
        num: data['label_8'],
        statement: "일기에서 마음의 방향이 식욕증가를 향하고 있어요. 감정이 불안정할 때 음식이 위안이 될 수 있어요. 자신을 비난하기보단 그 순간의 자신을 이해하고, 천천히 균형을 찾아가세요. 🥐💌"
      },
      {
        name: "불면",
        num: data['label_9'],
        statement: "일기에서 마음의 방향이 불면을 향하고 있어요. 잠들기 힘든 밤엔 따뜻한 차를 마시거나 조용한 음악을 들어보세요. 당신의 수면은 곧 다시 안정을 찾을 거예요. 🌜🎶"
      },
      {
        name: "초조함",
        num: data['label_10'],
        statement: "일기에서 마음의 방향이 초조함을 향하고 있어요. 지금 느끼는 불안은 당신이 상황을 중요하게 생각하기 때문이에요. 천천히 호흡하며 자신에게 시간을 주세요. 🌬️💗"
      }
      ,
      {
        name: "피로",
        num: data['label_11'],
        statement: "일기에서 마음의 방향이 피로를 향하고 있어요. 지친 몸과 마음에 충분한 휴식을 선물하세요. 당신은 충분히 쉬고 재충전할 자격이 있어요. 🌻🛌"
      },
      {
        name: "죄책감",
        num: data['label_12'],
        statement: "일기에서 마음의 방향이 죄책감을 향하고 있어요. 스스로를 용서하는 마음이 필요해 보여요. 우리는 모두 실수하며 성장하는 존재이니, 조금 더 자신에게 관대해도 괜찮아요. 💧🌱"
      },
      {
        name: "집중력저하",
        num: data['label_13'],
        statement: "일기에서 마음의 방향이 집중력저하를 향하고 있어요. 마음이 복잡할 땐 잠시 눈을 감고 깊게 숨을 쉬어보세요. 작은 목표부터 차근차근 시작하면 좋을 거예요. 🖋️✨"
      },
      {
        name: "자신감저하",
        num: data['label_14'],
        statement: "일기에서 마음의 방향이 자신감저하를 향하고 있어요. 지금의 당신도 충분히 멋지고 소중한 사람이라는 걸 잊지 마세요. 한 걸음씩 천천히 나아가도 괜찮아요. 💎🚶‍♀️"
      },
      {
        name: "자존감저하",
        num: data['label_15'],
        statement: "일기에서 마음의 방향이 자존감저하를 향하고 있어요. 당신은 누구보다도 귀한 존재예요. 스스로를 아끼고 사랑해주며 한 번 더 당신의 가치를 되새겨보세요. 💕🌟"
      },
      {
        name: "절망감",
        num: data['label_16'],
        statement: "일기에서 마음의 방향이 절망감을 향하고 있어요. 모든 것이 끝난 것처럼 느껴져도 새로운 시작은 분명 다가올 거예요. 작은 희망의 불씨를 지키며 오늘을 살아보아요. 🕯️🌅"
      }
      ,
      {
        name: "자살충동",
        num: data['label_17'],
        statement: "일기에서 마음의 방향이 자살충동을 향하고 있어요. 너무 힘든 시간을 보내고 계시네요. 하지만 당신의 존재는 이 세상에서 무척 소중하고, 당신을 사랑하는 사람들도 반드시 있어요. 도움을 요청하는 건 약한 게 아니라 용기 있는 선택이에요. 💌🛟"
      },
      {
        name: "긴장감",
        num: data['label_18'],
        statement: "일기에서 마음의 방향이 긴장감을 향하고 있어요. 지금 모든 것이 두렵게 느껴지시나보군요. 심호흡과 휴식이 필요할 것 같아요. 💧🌱"
      },

    ];

    function getTopFiveItems(data) {
      return [...data]
        .sort((a, b) => b.num - a.num) 
        .slice(0, 5); 
    }
    function calculatePercentages(data) {
      const total = data.reduce((sum, item) => sum + item.num, 0); 
      return data.map((item) => ({
        ...item,
        percentage: total > 0 ? ((item.num / total) * 100).toFixed(2) : "0.00", 
      }));
    }
    const topFiveItems = getTopFiveItems(result);
    const topFivePercentage = calculatePercentages(topFiveItems);
    console.log("hell",topFivePercentage);
    return (
        <div>
          <div className='analysisBanner'>다이어리 분석하기</div>
          <div className='analysisStatement'>
          <imageWrap ><img src={Icon} style={{ width: '30px', height: '30px' }}/></imageWrap>
            {topFiveItems[0].statement}
            </div>
          <div className='percentBoxContainer'>
            <div className='percentBox'>{topFiveItems[0].name}
              <h2>{topFiveItems[0].num.toFixed(4)}</h2>
            </div>
            <div className='percentBox'>{topFiveItems[1].name}
            <h2>{topFiveItems[1].num.toFixed(4)}</h2>
            </div>
            <div className='percentBox'>{topFiveItems[2].name}
            <h2>{topFiveItems[2].num.toFixed(4)}</h2>
            </div>
            <div className='percentBox'>{topFiveItems[3].name}
            <h2>{topFiveItems[3].num.toFixed(4)}</h2>
            </div>
            <div className='percentBox'>{topFiveItems[4].name}
            <h2>{topFiveItems[4].num.toFixed(4)}</h2>
            </div>
          </div>
          <div className='graphBox'>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topFiveItems}>
              <Bar dataKey="num" fill="#83A788" />
              <XAxis dataKey="name" />
              <YAxis />
              </BarChart>
          </ResponsiveContainer> 
          </div>
        </div>
    )
};

export default AnalysisGraph;

// 출처: https://bornatnoon.tistory.com/entry/React-%EC%B0%A8%ED%8A%B8chart-%EB%A7%8C%EB%93%A4%EA%B8%B0