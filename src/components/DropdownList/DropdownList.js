import React, { useState } from 'react';
import DropdownItem from '../DropdownItem/DropdownItem';
import './DropdownList.css';

function DropdownList() {
  const [selected, setSelect] = useState('');
  const menuArray = ['Profile information', 'Change password', 'Become Pro', 'Help', 'Log out'];
  
  function handlerSelect(item) {
    setSelect(item);
  }

  const dropdownList = menuArray.map((item, i) => {
    return <DropdownItem 
              key={i}
              item={item}
              selected={selected}
              onSelect={handlerSelect}
           />
  });
    
  return (
    <ul className="dropdown">
      {dropdownList}
    </ul>
  )
}

export default DropdownList;
