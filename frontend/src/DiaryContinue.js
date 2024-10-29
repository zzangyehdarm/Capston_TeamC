import './styles/DiaryContinue.css';
import React, { useEffect,useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

//https://onethejay.tistory.com/194
function DiaryContinue() {
    // const [boardList, setBoardList] = useState([]);
    // const getBoardList = async () => {
    //     const resp = await (await axios.get('//localhost:8080/board')).data; 
    //     setBoardList(resp.data); 
    //     console.log(boardList);
    // }
    // useEffect(() => {
    //     getBoardList(); // 1) 게시글 목록 조회 함수 호출
    //   }, []);
    const board = 1;
  return (
    <div className='diaryContinueBox'>
        <div className='continueBanner'>이어서 쓰기</div>
        <div className='inventoryBox'>
            <div className='inventoryHead'>
                <div className='tempSaveInventory'>임시 저장 목록</div>

                <input className='continueSearch'></input>
            </div>

            <div className='postBox'>
                <div className='postBoxTitle'>Title</div>
                <div className='postBoxDate'>Date</div>
            {/* <ul>
                {boardList.map((board) => (
                    // 4) map 함수로 데이터 출력
                    <li key={board.idx}>
                        <Link to={`/board/${board.idx}`}>{board.title}</Link>
                    </li>
                    ))}
                </ul> */}
            </div>
            
            <div className='inventory'></div>
        </div>
    </div>
  );
}

export default DiaryContinue;
