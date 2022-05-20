import { useState } from "react";
import "./People.scss";
import Card from "../components/Card";
import { getPeople } from "../api/personApi.js";
import React from "react";

function People() {
  const [people] = useState(getPeople());

  return (
    <>
      {people.map((person) => {
        return <Card person={person}></Card>;
      })}
    </>
  );
}

export default People;
