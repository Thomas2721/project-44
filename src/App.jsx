import React, { useState } from 'react';
import ItemList from './itemList/ItemList';
import AddItemForm from './addItemForm/AddItemForm';

function App() {
  const [items, setItems] = useState([]);

 
  const addItem = (item) => {
    setItems([...items, item]);
  };

 
  const removeItem = (itemToRemove) => {
    setItems(items.filter(item => item !== itemToRemove));
  };

  return (
    <div>
      <h1>Name List</h1>
      <AddItemForm addItem={addItem} />
      <ItemList items={items} removeItem={removeItem} />
    </div>
  );
}

export default App;
