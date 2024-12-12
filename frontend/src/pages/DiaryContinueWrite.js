import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import axios from "axios";

import "react-datepicker/dist/react-datepicker.css";
import "../styles/Diary.css";
// import { API } from "../features/config";
import "../styles/DiaryContinue.css";
const backend = "http://127.0.0.1:3030";

function DiaryContinueWrite({ modalClose, postData }) {
  const [diary, setDiary] = useState({
    title: "",
    content: "",
    date: "",
    status: 0,
  });

  const [selectedDate, setSelectedDate] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    // postData가 있을 경우 초기화
    if (postData) {
      setDiary({
        title: postData.title || "",
        content: postData.content || "",
        date: postData.date || "",
      });
      setSelectedDate(new Date(postData.date));
    }
  }, [postData]);

  const handleSelect = (date) => {
    setSelectedDate(date);
    setDiary({ ...diary, date });
  };

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
      console.log(postData.post_id,'update');
        const response = await axios.put(`${backend}/v1/posts/${postData.post_id}`, updatedDiary);
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
        const response = await axios.put(`${backend}/v1/posts/${postData.post_id}`, updatedDiary);
        alert('임시로 저장되었습니다.');
        console.log(response.data);
        navigate('/');
    } catch (error) {
        console.error(error);
    }
  };
  return (
    <div className="diaryBoxBackground">
      <div className="diaryBox">
        <div>
          <button className="closeButton" onClick={modalClose}>
            닫기
          </button>
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
            <button className="saveTempButton" onClick={saveDiaryTemp}>
              임시 저장
            </button>
            <button className="completeButton" onClick={saveDiary}>
              작성 완료
            </button>
          </div>
        </div>
        <input
          className="diaryTitle"
          name="title"
          placeholder="제목을 입력하세요."
          value={title}
          onChange={onChange}
        />
        <div className="diaryTextBox">
          <textarea
            className="diaryText"
            name="content"
            placeholder="내용을 입력하세요."
            value={content}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
}

export default DiaryContinueWrite;