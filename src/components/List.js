import React from 'react';
import './List.css'; // You can create a corresponding CSS file for styling

function List({ items, renderItem }) {
  return (
    <div className="list">
      {items.map((item, index) => (
        <div key={index} className="list-item">
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
}

export default List;
