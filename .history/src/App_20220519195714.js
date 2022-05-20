import { useState } from 'react';
import './App.scss';
import Card from './components/Card';
import { getPeople } from './api/person.js';
import React from 'react';
import { Link } from 'react-router-dom';

function App() {

  const [people] = useState(getPeople());

  return (
    <div className="App">
      <nav className="nav">X</nav>

        {people.map((person) => {
          return <Card person={person}></Card>
        })}

    </div>
  );
}

export default App;
