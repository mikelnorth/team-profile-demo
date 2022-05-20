import { useState } from 'react';
import { getPerson } from '../api/personApi.js';

export default function Person() {

  const [person] = useState(getPerson());

  console.log(person);

  return (
    <div>{person.text}</div>
  )
}
