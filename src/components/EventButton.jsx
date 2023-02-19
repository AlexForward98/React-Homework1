import React, { useState } from 'react';

function EventButton() {
  const [value, setter] = useState(0);
  return (
    <div>
      <button onClick={() => setter(value + 1)}>+1</button>
      <p>{value}</p>
      <button onClick={() => setter(value - 1)}>-1</button>
    </div>
  );
}

export default EventButton;
