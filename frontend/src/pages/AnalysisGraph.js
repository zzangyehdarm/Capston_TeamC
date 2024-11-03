import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

import React from 'react';

import '../styles/Nav.css';


function AnalysisGraph(){
    const movePage = useNavigate();
    // const getDiaryAnalysis = async () => { 분석 불러오는 기능.
    //   await axios.get(`${backend}/`).then((res) => {
        
    //   })
    //   .catch(console.log());
    // };
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
    return (
        
        <div>
            <BarChart width={500} height={200} data={data}>
            <Bar dataKey="num" fill="#8884d8" />
            <XAxis dataKey="name" />
            <YAxis />
        </BarChart> 
        </div>
    )
};

export default AnalysisGraph;

// 출처: https://bornatnoon.tistory.com/entry/React-%EC%B0%A8%ED%8A%B8chart-%EB%A7%8C%EB%93%A4%EA%B8%B0