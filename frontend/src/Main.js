import React, { useState, useRef} from "react";
import './styles/Main.css';
import './styles/Diary.css';
import './Diary';
import Diary from './Diary';
import { useNavigate } from "react-router-dom";



function Main() {
    const [modalIsOpen, setModalState] = useState(false);
    const movePage = useNavigate();
    function modalOpen() {
        setModalState(true);
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
                    {modalIsOpen && <Diary /> }
                </div>
            </div>
        </div>
    );
}

export default Main;