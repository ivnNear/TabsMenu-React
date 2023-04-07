import React from 'react';

export const Btns = ({ btn, filterItems }) => {
  
  return (
    <div className='btns'>
      {btn.map((el, ind) => {
        return <button key={ind} onClick={() => filterItems(el)}>{el}</button>;
      })}
    </div>
  );
};
