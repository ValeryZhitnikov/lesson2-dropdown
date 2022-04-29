import React from 'react';
import './DropdownItem.css';

function DropdownItem(props) {
  const { item, selected, onSelect } = props;

  return (
    <li className={selected == item ? 'active' : ''} onClick={() => onSelect(item)}><a href="#">{item}</a></li>
  );
}

export default DropdownItem;
