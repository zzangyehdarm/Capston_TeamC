import { BarChart, Bar, XAxis, YAxis } from "recharts";
import { useNavigate, Link } from "react-router-dom";
import React, { useEffect, useState, useRef, setState} from "react";
import { DateRange } from 'react-date-range';
import { addDays } from "date-fns"

import DatePicker from "react-datepicker";
import axios from 'axios';

import Tab from '../components/Tab';
import Tabs from '../components/Tabs';
import Calendar from '../components/Calendar';
import BoardData from '../utils/MockBoardData.js';

import 'react-datepicker/dist/react-datepicker.css';
import "react-date-range/dist/styles.css"; // main style file 
import 'react-date-range/dist/theme/default.css'; // theme css file  
import '../styles/Analysis.css';
import '../styles/DiaryContinue.css';

const flaskbackend = "http://127.0.0.1:5000/predict";
const backend = "http://127.0.0.1:5000"

var dataResult = '1';
async function postCheckboxValue()  {
/*
체크박스 post_id 불러와서 백엔드로 보냄.
*/
  

  // 선택된 목록 가져오기
  const query = 'input[name="post"]:checked';
  const selectedEls = 
      document.querySelectorAll(query);
  
  // 선택된 목록에서 value 찾기
  let result = {};
  selectedEls.forEach((el) => {
    for (var key in el.value) {
      result["text"] = el.value;
    }
  });

  await axios.post(`${flaskbackend}`, result).then((res) => {
    dataResult = res.data;
    console.log(dataResult);
  })
  .catch(console.log(result));

  // document.getElementById('result').innerText
  //   = result;
} // https://hianna.tistory.com/430

function GetData() {
  /*
  백엔드 통신 꺼둠 
  */
  // const [data, setData] = useState({});
  // useEffect(() => {
  //   axios.get(backend).then((response)=> {
  //     setData(response.data);
  //   })
  // }, []); 
  // const item = (Object.values(data));
  // 
  // const item = (Object.values(data)).map((item) => (
    
  //   <li key={item.id}>
  //     <div>{item.post_id}</div>
  //     <input name="post" type="checkbox" value={item.post_id}></input>
  //   </li>
  // ));
  const item = (BoardData).map((item) => (
    
    <div key={item.post_id} className="boardList">
      <div className="boardListTitle">{item.title}</div>
      <div className="boardListDate">{item.date}</div>
      <input name="post" type="checkbox" value={item.content}></input>
    </div>
  ));
  return item;
}
// 출처: https://ymkmoon.github.io/React-06-Voc/

export default function Analysis() {
  const [modal, setModal] = useState(false);
  function modalOpen() {
    postCheckboxValue();
    setModal(true);
  }
function modalClose() {
    setModal(false);
  }
    // const postAnaylsisPeriod = async () => { // ERD에 date 없음. created_at으로 할거면 글쓰기에 calendar가 필요가 없으니까.
    //   await axios.post(`${backend}/`).then((res) => {
        
    //   })
    //   .catch(console.log());
    // };

    // const sendAnaylsisPeriod = async () => { // ERD에 date 없음. created_at으로 할거면 글쓰기에 calendar가 필요가 없으니까.
    //   await axios.post(`${backend}/`).then((res) => {
        
    //   })
    //   .catch(console.log());
    // };
    
    // const getDiary = async () => { 분석 불러오는 기능.
    //   await axios.get(`${backend}/`).then((res) => {
        
    //   })
    //   .catch(console.log());
    // };


    const item = GetData();
    return (
      
        <div>
            <div className='analysisBanner'>다이어리 분석하기</div>
            
            <div>
              <Tabs>
                <div label="기간 선택" >
                  <Calendar/>
                </div>
                <div label="일기 선택" >
                <div className='postBox'>
                <div className='postBoxTitle'>Title</div>
                <div className='postBoxDate'>Date</div>
                  
                </div>
                {item}
                <div className="analysisButtonBox">
                  <button onClick={postCheckboxValue} className="buttonAll">전체선택</button>
                  <Link to="/analysisgraph" onClick={modalOpen} state={{'data':dataResult}} className="buttonComplete">선택완료</Link>
                  </div>
                </div>
              </Tabs>
            </div>

        </div>
    );
  }