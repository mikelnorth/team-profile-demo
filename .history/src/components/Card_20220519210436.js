import { Link } from "react-router-dom";
import headshot from "../assets/images/stock-head.jpeg";
import './Card.scss';

export default function Card({person}) {
  const {id, image, text} = person;

  return (
    <Link to="/person/{id}" className="card" key={id}>
      <img src={image} alt="headshot" />
      <p>
        {text}
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, facere
        voluptatibus! Fugit est, magni laborum autem eaque recusandae quaerat
        inventore non eos voluptatem rem nostrum cum tenetur alias. Aut, error?
      </p>
    </Link>
  );
}
