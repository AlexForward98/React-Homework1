import React from 'react';
import EventButton from './EventButton';

function Card({ name, image }) {
  return (
    <div
      style={{
        border: '1px solid',
        borderRadius: '1em',
        boxShadow: '0 0 20px 8px #d0d0d0',
      }}
    >
      <li style={{ listStyle: 'none' }}>
        <h1>{name}</h1>
        <img src={image} />
      </li>
      <EventButton />
    </div>
  );
}

export default Card;
