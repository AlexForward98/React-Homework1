import { useState } from 'react';
import './App.css';
import List from './components/List';
import daveImg from './assets/images/dave.jpg';
import johnImg from './assets/images/john.png';
import peterImg from './assets/images/peter.jpg';

function App() {
  const pet = [
    { name: 'Dave', image: daveImg },
    { name: 'John', image: johnImg },
    { name: 'Peter', image: peterImg },
  ];

  return (
    <div className="App">
      <List pets={pet} />
    </div>
  );
}

export default App;
