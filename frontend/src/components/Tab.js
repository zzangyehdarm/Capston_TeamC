import React from 'react';
import '../styles/Analysis.css';

const Tab = ({ label, activeTab, onClick }) => {
  const handleClick = () => {
    onClick(label);
  };

  return (
    <button
      className={`tab${activeTab === label ? 'Active' : ''}`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Tab;

//https://herahera.kr/22