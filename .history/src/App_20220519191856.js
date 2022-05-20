import { useState } from 'react';
import './App.scss';
import Card from './components/Card';
import { getPeople } from './api/person.js';
import React from 'react';

function App() {

  const [people, setPeople] = useState(getPeople());
  console.log(people);

  return (
    <div className="App">
      <nav className="nav">X</nav>

      <main>
        {people.map((person) => {
          return <Card/>
        })}
      </main>

    </div>
  );
}

export default App;
