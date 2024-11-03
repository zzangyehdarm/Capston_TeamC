import React from 'react';

const Tab = ({ label, activeTab, onClick }) => {
  const handleClick = () => {
    onClick(label);
  };

  return (
    <button
      className={`tab ${activeTab === label ? 'active' : ''}`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Tab;

//https://herahera.kr/22