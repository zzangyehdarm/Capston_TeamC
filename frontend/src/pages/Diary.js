import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import DatePicker from 'react-datepicker';
import axios from 'axios';

import 'react-datepicker/dist/react-datepicker.css';
import '../styles/Diary.css';
import { API } from '../features/config';

const backend = "http://127.0.0.1:3030";
function timeout(delay) {
  return new Promise( res => setTimeout(res, delay) );
}
function Diary({ modalClose }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [diary, setDiary] = useState({
    title: '',
    content: '',
    date: selectedDate.toISOString(),
    status: 0,

  });

  
  const navigate = useNavigate();

  function handleSelect(date) {
    setSelectedDate(date);
    setDiary({
      date: date.toISOString(),
    })
  }

  const { title, content, date, status } = diary; 

  const onChange = (event) => {
    const { value, name } = event.target;
    setDiary({
      ...diary,
      [name]: value,
    });
  };

  
  const saveDiary = async () => {
    const updatedDiary = { 
      ...diary, 
      status: 1
  }; 
    try {
        const response = await axios.post(`${backend}/v1/posts`, updatedDiary);
        alert('등록되었습니다.');
        console.log(response.data);
        navigate('/');
    } catch (error) {
        console.error(error);
    }
  };

  const saveDiaryTemp = async () => {
    const updatedDiary = { 
      ...diary, 
      status: 0
  };
    try {
        const response = await axios.post(`${backend}/v1/posts`, updatedDiary);
        alert('임시로 저장되었습니다.');
        console.log(response.data);
        navigate('/');
    } catch (error) {
        console.error(error);
    }
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
            />
          </div>
          <div className="saveBox">
            <button className="saveTempButton" onClick={saveDiaryTemp}>임시 저장</button>
            <button className="completeButton" onClick={saveDiary}>작성 완료</button>
          </div>
        </div>
        <div onChange={onChange}>
        <input className="diaryTitle" name="title" placeholder="제목을 입력하세요." />
        </div>
        <div className = "diaryTextBox" onChange={onChange}>
          <div className="diaryTool"><button>글 도구 들어갈 자리</button></div>
          <textarea class="diaryText" name="content" placeholder="내용을 입력하세요."/>
        </div>
      </div>
    </div>
  );
}

export default Diary;


// https://onethejay.tistory.com/195 출처 남기기