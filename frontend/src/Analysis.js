import { BarChart, Bar, XAxis, YAxis } from "recharts";
import 'react-datepicker/dist/react-datepicker.css';
import React, { useState, useRef} from "react";
import DatePicker from "react-datepicker";
import './styles/Analysis.css';
import { useNavigate } from "react-router-dom";
import Tab from './Tab';

// import DataRangePicker from './datePicker'
export default function Analysis() {
    const data = [
        {
          name: "부서 1",
          num: 5
        },
        {
          name: "부서 2",
          num: 3
        },
        {
          name: "부서 3",
          num: 1
        },
        {
          name: "부서 4",
          num: 2
        }
        ,
        {
          name: "부서 5",
          num: 4
        },
        {
          name: "부서 6",
          num: 2
        },
        {
            name: "부서 6",
            num: 2
          }
      ];
      const [selectedDate1, setSelectedDate1] = useState(new Date());
      const [selectedDate2, setSelectedDate2] = useState(new Date());
    return (
        <div>
            <div className='analysisBanner'>다이어리 분석하기</div>


            <button className="selectDate">기한 선택</button>
            <button className="selectDiary" >일기 선택</button>
        <DatePicker
              selected={selectedDate1}
              onChange={(date) => setSelectedDate1(date)}
              dateFormat="yyyy-MM-dd"
            />
                    <DatePicker
              selected={selectedDate2}
              minDate={selectedDate1}
              onChange={(date) => setSelectedDate2(date)}
              dateFormat="yyyy-MM-dd"
            />

        <BarChart width={500} height={200} data={data}>
            <Bar dataKey="num" fill="#8884d8" />
            <XAxis dataKey="name" />
            <YAxis />
        </BarChart>
        </div>
    );
  }