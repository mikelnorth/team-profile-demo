import { useState } from 'react';
import './App.scss';
import Card from './components/Card';
import { getPeople } from './api/person.js';
import React from 'react';

function useState(defaultStartingValue = null) {
  let value = defaultStartingValue;
  const setValue = (newValue) => {
    value = newValue
  }
  return [value, setValue]
}



function App() {

  const [people, setPeople] = useState(getPeople());

  return (
    <div className="App">
      <nav className="nav">X</nav>

      <main>
        {people.map((person) => {
          return <Card person={person}></Card>
        })}
      </main>

    </div>
  );
}

export default App;
