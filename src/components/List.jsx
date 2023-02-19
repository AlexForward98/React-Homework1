import React from 'react';
import Card from './Card';


function List({ pets = [] }) {
  return (
    <ul>
      {pets.map((cat) => (
        <Card {...cat} />
      ))}
    </ul>
  );
}

export default List;
