import { BarChart, Bar, XAxis, YAxis } from "recharts";
import { useNavigate, Link } from "react-router-dom";
import React, { useEffect, useState, useRef} from "react";
import { DateRange } from 'react-date-range';
import { addDays } from "date-fns"

import DatePicker from "react-datepicker";
import axios from 'axios';

import Tab from '../components/Tab';
import Tabs from '../components/Tabs';
import Calendar from '../components/Calendar';

import 'react-datepicker/dist/react-datepicker.css';
import "react-date-range/dist/styles.css"; // main style file 
import 'react-date-range/dist/theme/default.css'; // theme css file  
import '../styles/Analysis.css';

const backend = "https://0dbf00cc-14b7-4093-839f-3d59b65c48d3.mock.pstmn.io/";

async function getCheckboxValue()  {
/*
체크박스 post_id 불러와서 백엔드로 보냄.
*/
  

  // 선택된 목록 가져오기
  const query = 'input[name="post"]:checked';
  const selectedEls = 
      document.querySelectorAll(query);
  
  // 선택된 목록에서 value 찾기
  let result = '';
  selectedEls.forEach((el) => {
    result += el.value + ' ';
  });

  await axios.post(`${backend}/`, result).then((res) => {
    
  })
  .catch(console.log());

  // document.getElementById('result').innerText
  //   = result;
} // https://hianna.tistory.com/430

function GetData() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get(backend).then((response)=> {
      setData(response.data);
    })
  }, []);
  // const item = (Object.values(data));
  const item = (Object.values(data)).map((item) => (
    
    <li key={item.id}>
      <div>{item.post_id}</div>
      <input name="post" type="checkbox" value={item.post_id}></input>
    </li>
  ));
  return item;
}
// 출처: https://ymkmoon.github.io/React-06-Voc/

export default function Analysis() {

    
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
                <div label="기간 선택">
                  <Calendar/>
                </div>
                <div label="일기 선택">
                  {item}
                  <button onClick={getCheckboxValue}>hell</button>
                  <Link to="/analysisgraph" className="navBarMenu">다이어리 분석하기</Link>
                </div>
              </Tabs>
            </div>

        </div>
    );
  }