import React, { useState } from 'react';
import DropdownList from '../DropdownList/DropdownList';
import './Dropdown.css';

function Dropdown() {
  const [isOpen, changeView] = useState(false);
  function handlerChangeView() {
    changeView(!isOpen);
  }
  
  return (
    <div className={`dropdown-wrapper ${isOpen ? 'open' : ''}`}>
      <button className="btn" onClick={handlerChangeView}>Account settings</button>
      <DropdownList />
    </div>
  )
}

export default Dropdown;
