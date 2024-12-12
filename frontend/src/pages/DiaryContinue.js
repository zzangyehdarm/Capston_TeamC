import React, { useState, useEffect } from "react";
// import BoardData from "../utils/MockBoardData.js"; // Mock 데이터
import DiaryContinueWrite from "./DiaryContinueWrite.js";
import axios from "axios";

import "../styles/DiaryContinue.css";
import "../styles/Analysis.css";
const backend = "http://127.0.0.1:3030";

function DiaryContinue() {
  const [selectedPost, setSelectedPost] = useState(null); 
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");

  const handleCheckboxChange = (post) => {
    setSelectedPost((prevSelected) => {
      return prevSelected?.post_id === post.post_id ? null : post;
    });
  };

  const openModal = () => {
    if (!selectedPost) {
      alert("항목을 선택하세요.");
      return;
    }
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    setSelectedPost(null); 
  };

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
  const items = GetData().filter(
    (item) =>
      item?.title &&
      item.title.toLowerCase().includes(search.toLowerCase())
  );
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0]; 
  };
  

  return (
    <div className="diaryContinueBox">
      <div className="continueBanner">이어서 쓰기</div>
      <div className="inventoryBox">
        <div className="inventoryHead">
          <div className="tempSaveInventory">임시 저장 목록</div>
          <input 
            className="continueSearch" placeholder="Search..."value={search} onChange={(e) => setSearch(e.target.value)}
          ></input>
        </div>

        <div className="postBox">
          <div className="postBoxTitle">Title</div>
          <div className="postBoxDate">Date</div>
        </div>
        {items.map((item) => (
          item.status === 0 ? (
            <div key={item.post_id} className="boardList">
              <div className="boardListTitle">{item.title}</div>
              <div className="boardListDate">{formatDate(item.date)}</div>
              <input
                type="checkbox"
                checked={selectedPost?.post_id === item.post_id} 
                onChange={() => handleCheckboxChange(item)}
              />
            </div>
          ) : null
        ))}

        <button className="chooseButton" onClick={openModal}>
          선택 완료
        </button>
      </div>

      {modal && <DiaryContinueWrite modalClose={closeModal} postData={selectedPost} />}
    </div>
  );
}

export default DiaryContinue;
//https://onethejay.tistory.com/194