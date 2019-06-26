import React from 'react';

const Item = ({ callback, label }) => {
  return (
    <button className={`item`} onClick={callback}>
      {label}
    </button>
  );
};

export default Item;
