import { useState } from "react";
import { getPerson } from "../api/personApi.js";
import { useParams } from "react-router-dom";

export default function Person() {
  let { id } = useParams();

  const [person] = useState(getPerson(id));

  console.log(person);

  return (
    <div>
      <img src={person.image} alt='person'/>
      <div>{person.text}</div>
    </div>
  );
}
