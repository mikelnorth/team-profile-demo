import { useState } from 'react';
import './App.scss';
import Card from './components/Card';
import { getPeople } from './api/person.js';
import React from 'react';

function App() {

  const stateArray = useState(getPeople());

  return (
    <div className="App">
      <nav className="nav">X</nav>

      <main>
        {stateArray[0].map((person) => {
          return <Card person={person}></Card>
        })}
      </main>

    </div>
  );
}

export default App;
