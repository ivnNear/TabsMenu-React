import React, { useState } from 'react';
import arr from './data';
import { Btns } from './Btns';
import { Menu } from './Menu';

import './style.scss';

const btnCateg = ['All', ...new Set(arr.map((el) => el.category))];

function App() {
  const [items, setItems] = useState(arr)

const filterItems = (categ) => {
  if(categ === 'All'){
    setItems(arr)
    return
  }

  setItems(arr.filter((el) => el.category === categ))
}

  return (
    <div className='wrapper'>
      <h1>Our Menu:</h1>
      <Btns btn={btnCateg} filterItems={filterItems}/>
      <Menu menu={items}/>
    </div>
  );
}

export default App;
