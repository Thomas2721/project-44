import React from 'react';
import Item from '../item/Item';


function ItemList({ items, removeItem }) {
  return (
    <div>
      <h2>Names:</h2>
      <ul itemType='number'>
        {items.map((item, index) => (
          <Item key={index} item={item} removeItem={removeItem} />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;