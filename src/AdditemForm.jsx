import React, { useState } from 'react';

function AddItemForm({ addItem }) {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem.trim()) {
      addItem(newItem);
      setNewItem('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={newItem} 
        onChange={(e) => setNewItem(e.target.value)} 
        placeholder="Add new item"
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddItemForm;
