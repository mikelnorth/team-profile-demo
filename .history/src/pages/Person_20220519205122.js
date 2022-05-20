import { useState } from 'react';
import { getPerson } from '../api/personApi.js';
import { useParams } from "react-router-dom";

export default function Person() {
  let params = useParams();
  const [person] = useState(getPerson());

  console.log(params);

  return (
    <div>{person.text}</div>
  )
}
