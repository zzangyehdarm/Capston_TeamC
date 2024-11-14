import React, { useState, useRef} from "react";
import { useNavigate } from "react-router-dom";

import testGet from '../utils/test';

import '../styles/Main.css';
import '../styles/Diary.css';
import './Diary';
import Diary from './Diary';




function Main() {
    const [modal, setModal] = useState(false);
    const movePage = useNavigate();
    function modalOpen() {
        setModal(true);
      }
    function modalClose() {
        setModal(false);
      }

      function goDiaryContinue(){
        movePage('/diaryContinue');
      }

    return (
        
        <div className="homeBox">
            <div className="descriptionBox">
                <div className="descriptionContents">
                    <h1>
                        WECOME TO<br></br>
                        마음다이어리
                    </h1>
                    <h5>완전 최고에요</h5>
                </div>
                <div className="buttonBox">
                    <button className="continueWriteButton" onClick={goDiaryContinue}>이어서 쓰기</button>
                    <button className="newWriteButton" onClick={modalOpen}>새로 쓰기</button>
                    {modal && <Diary /> }
                    {modal && <Diary modalClose={modalClose} />}
                </div>
                <button onClick={testGet}> test </button>
            </div>
        </div>
    );
}

export default Main;