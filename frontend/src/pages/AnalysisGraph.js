import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart } from "recharts";
import { useLocation } from "react-router-dom";

import React from 'react';

import '../styles/Nav.css';
import '../styles/AnalysisGraph.css';
import '../styles/Analysis.css';

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
        name: "depression",
        num: data['label_0']
      },
      {
        name: "sadness",
        num: data['label_1']
      },
      {
        name: "loneliness",
        num: data['label_2']
      },
      {
        name: "anger",
        num: data['label_3']
      },
      {
        name: "lethargy",
        num: data['label_4']
      }
      ,
      {
        name: "ctl_disorder",
        num: data['label_5']
      },
      {
        name: "loss",
        num: data['label_6']
      },
      {
        name: "loss_appetite",
        num: data['label_7']
      },
      {
        name: "increase_appetite",
        num: data['label_8']
      },
      {
        name: "insomnia",
        num: data['label_9']
      },
      {
        name: "nervousness",
        num: data['label_10']
      }
      ,
      {
        name: "fatigue",
        num: data['label_11']
      },
      {
        name: "guilt",
        num: data['label_12']
      },
      {
        name: "loss_concentration",
        num: data['label_13']
      },
      {
        name: "loss_confidence",
        num: data['label_14']
      },
      {
        name: "loss_esteem",
        num: data['label_15']
      },
      {
        name: "hopelessness",
        num: data['label_16']
      }
      ,
      {
        name: "suicidal",
        num: data['label_17']
      },
      {
        name: "anxiety",
        num: data['label_18']
      },

    ];
    console.log(result);
    return (
        <div>
          <div className='analysisBanner'>다이어리 분석하기</div>
          <div className='percentBoxContainer'>
            <div className='percentBox'>레이블1
              <h2>70%</h2>
            </div>
            <div className='percentBox'>레이블2
            <h2>70%</h2>
            </div>
            <div className='percentBox'>레이블3
            <h2>70%</h2>
            </div>
          </div>
          <div className='graphBox'>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={result}>
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