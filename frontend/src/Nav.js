import { Link } from 'react-router-dom';
import React from 'react';
import './styles/Nav.css';
import { useNavigate } from "react-router-dom";

function Nav(){
    const movePage = useNavigate();
    function goMain(){
        movePage('/');
      }
    return (
        
        <div>
            <div className='nav'>
                <imageWrap className="logo">Logo</imageWrap>
                <Link to="/" className="navBarMain">메인 페이지</Link>
                <Link className="navBarMenu">About Us</Link>
                <Link to="/analysis" className="navBarMenu">다이어리 분석하기</Link>
                <Link className="navBarMenu">내 다이어리</Link>
            </div>
        </div>
    )
};

export default Nav;