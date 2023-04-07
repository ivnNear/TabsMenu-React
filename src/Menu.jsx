import React from 'react';

export const Menu = ({menu}) => {
  return (
    <div className='menu'>
        {menu.map((el) => {
            return (
                <div className='menu-item' key={el.id}>
        <img
          height={200}
          src={el.img}
          alt='danie'
        />
        <div className='info'>
          <h2>
            {el.title} <small>{el.price}zl</small>{' '}
          </h2>
          <small>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
            quasi et animi, facere fugiat officiis sint enim repellendus
            exercitationem, dolores dolorem veritatis nulla, voluptatem
            provident odio iusto dolorum. Amet, nostrum?
          </small>
        </div>
      </div>
            )
        })}
      

      
    </div>
  );
};
