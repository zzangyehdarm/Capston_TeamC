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
// import BoardData from '../utils/MockBoardData.js';


import 'react-datepicker/dist/react-datepicker.css';
import "react-date-range/dist/styles.css"; // main style file 
import 'react-date-range/dist/theme/default.css'; // theme css file  
import '../styles/Analysis.css';
import '../styles/DiaryContinue.css';

const flaskbackend = "http://127.0.0.1:5000/predict";
const backend = "http://127.0.0.1:3030"

var dataResult = '1';

function timeout(delay) {
  return new Promise( res => setTimeout(res, delay) );
}

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
  console.log(result);
  await axios.post(`${flaskbackend}`, result).then((res) => {
    dataResult = res.data;
    console.log('result',result);
    console.log(dataResult);
  })
  .catch(console.log('bad end'));

  // document.getElementById('result').innerText
  //   = result;
} // https://hianna.tistory.com/430

function GetData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${backend}/v1/posts/all`)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setData(response.data);
        } else {
          console.error(response.data);
          setData([]);
        }
      })
      .catch((error) => {
        console.error(error);
        setData([]);
      });
  }, []);
  return data;
}

export default function Analysis() {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const [dateRange, setDateRange] = useState({ startDate: new Date(), endDate: new Date() });
  const data = GetData();

  const handleDateRangeChange = (range) => {
    setDateRange(range);
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0]; 
  };

  const filteredBoardList = Array.isArray(data)
    ? data.filter((item) => {
        const itemDate = new Date(item.date);
        const adjustedEndDate = new Date(dateRange.endDate);
        adjustedEndDate.setDate(adjustedEndDate.getDate() + 1);
        return (
          item.status === 1 &&
          itemDate >= dateRange.startDate &&
          itemDate <= adjustedEndDate
        );
      })
    : [];

  async function modalOpen() {
    postCheckboxValue();
    await timeout(1000);
    console.log("hello", dataResult);
    navigate("/analysisgraph", { state: { data: dataResult } });
  }

  return (
    <div>
      <div className="analysisBanner">다이어리 분석하기</div>
      <div>
        <Tabs>
          <div label="기간 선택">
            <Calendar onDateRangeChange={handleDateRangeChange} />
          </div>
          <div label="일기 선택">
            <div className="postBox">
              <div className="postBoxTitle">Title</div>
              <div className="postBoxDate">Date</div>
            </div>
            {filteredBoardList.map((item) => (
              <div key={item.post_id} className="boardList">
                <div className="boardListTitle">{item.title}</div>
                <div className="boardListDate">{formatDate(item.date)}</div>
                <input name="post" type="checkbox" value={item.content} />
              </div>
            ))}
            <div className="analysisButtonBox">
              <button onClick={postCheckboxValue} className="buttonAll">
                전체선택
              </button>
              <button onClick={modalOpen} className="buttonComplete">
                선택완료
              </button>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
