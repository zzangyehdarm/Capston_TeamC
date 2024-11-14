import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import DatePicker from 'react-datepicker';
import axios from 'axios';



import 'react-datepicker/dist/react-datepicker.css';
import '../styles/Diary.css';



const backend = 0;

function Diary({ modalClose }) {
  const [diary, setDiary] = useState({
    title: '',
    contents: '',
    date: '',
  });

  const [selectedDate, setSelectedDate] = useState(new Date());
  const navigate = useNavigate();

  function handleSelect(date) {
    setSelectedDate(date);
    setDiary({
      date: date,
    })
  }

  const { title, contents, date } = diary; 

  const onChange = (event) => {
    const { value, name } = event.target;
    setDiary({
      ...diary,
      [name]: value,
    });
  };

  
  const saveDiary = async () => {
    await axios.post(`${backend}/v1/posts`, diary).then((res) => {
      alert('등록되었습니다.');
      navigate('/');
    })
    .catch(console.log(diary));
  };

  
  const backToList = () => {
    navigate('/diary');
  };

  return (
    <div class="diaryBoxBackground">
      <div class="diaryBox">
        <div>
          <button className="closeButton" onClick={modalClose}>닫기</button>
        </div>
        <div className="diaryDatePlaceTag">
          <div className="datePick">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => handleSelect(date)}
              dateFormat="yyyy-MM-dd"

            />
          </div>
          <div className="saveBox">
            <button className="saveTempButton">임시 저장</button>
            <button className="completeButton" onClick={saveDiary}>작성 완료</button>
          </div>
        </div>
        <input className="diaryTitle" name="title" placeholder="제목을 입력하세요." onChange={onChange}/>
        <div className = "diaryTextBox" onChange={onChange}>
          <div className="diaryTool"><button>글 도구 들어갈 자리</button></div>
          <textarea class="diaryText" name="contents" placeholder="내용을 입력하세요."/>
        </div>
      </div>
    </div>
  );
}

export default Diary;


// https://onethejay.tistory.com/195 출처 남기기