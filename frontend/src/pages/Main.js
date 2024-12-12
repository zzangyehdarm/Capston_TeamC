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
                    당신의 하루는 어땠나요?
                    </h1>
                    <h5>하루에 대한 기록을 남겨주시면, ‘마음나침반’이 당신의 마음의 방향을 찾아드릴게요.<br></br>
                    아래 버튼을 클릭해 오늘 당신의 하루를 기록하고, 간단하게 마음 상태를 알아보세요.</h5>
                </div>
                <div className="buttonBox">
                    <button className="continueWriteButton" onClick={goDiaryContinue}>이어서 쓰기</button>
                    <button className="newWriteButton" onClick={modalOpen}>새로 쓰기</button>
                    {modal && <Diary /> }
                    {modal && <Diary modalClose={modalClose} />}
                </div>
            </div>
        </div>
    );
}

export default Main;