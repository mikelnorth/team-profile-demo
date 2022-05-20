import { useState } from 'react';
import './App.scss';
import Card from './components/Card';
import { getPeople } from './api/person.js';
import React from 'react';

function App() {

  const [people, setPeople] = useState(getPeople());

  return (
    <div className="App">
      <nav className="nav">X</nav>

      <main>
        {people.map((person) => {
          return <Card anything={person}/>
        })}
      </main>

    </div>
  );
}

export default App;
