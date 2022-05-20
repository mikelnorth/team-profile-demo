import { useState } from 'react';
import './App.scss';
import Card from '../components/Card';
import { getPeople } from '../api/person.js';
import React from 'react';
import { Link } from 'react-router-dom';

function People() {

  const [people] = useState(getPeople());

  return (
    <>

        {people.map((person) => {
          return <Card person={person}></Card>
        })}

    </>
  );
}

export default People;
