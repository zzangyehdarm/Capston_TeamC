import { Link, useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import React from 'react';

import '../styles/Nav.css';
import Logo from '../assets/logo_green.png'

function Nav(){
    const movePage = useNavigate();
    function goMain(){
        movePage('/');
      }
      const activeStyle = {
        color: "#55855B",
      };
      const deactiveStyle = {
        color: "#535353",
      };
    return (
        
        <div>
            <div className='nav'>
                <imageWrap ><img src={Logo} style={{ width: '100px', height: '100px' }}/></imageWrap>
                <NavLink to="/" className="navBarMain" style={({ isActive }) => (isActive ? activeStyle : deactiveStyle)}>메인 페이지</NavLink>
                <NavLink to="/aboutus" className="navBarMenu" style={({ isActive }) => (isActive ? activeStyle : deactiveStyle)}>About Us</NavLink>
                <NavLink to="/analysis" className="navBarMenu" style={({ isActive }) => (isActive ? activeStyle : deactiveStyle)}>다이어리 분석하기</NavLink>
                <NavLink className="navBarMenu" style={({ isActive }) => (isActive ? activeStyle : deactiveStyle)}>내 다이어리</NavLink>
            </div>
        </div>
    )
};

export default Nav;