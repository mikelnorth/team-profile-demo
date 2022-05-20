import './Card.scss';
import { Link } from "react-router-dom";

export default function Card({person}) {
  const {id, image, text} = person;

  return (
    <section className="card" key={id}>
      <Link to={`/person/${id}`}>
        <img src={image} alt="headshot" />
      </Link>
      <p>
        {text}
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, facere
        voluptatibus! Fugit est, magni laborum autem eaque recusandae quaerat
        inventore non eos voluptatem rem nostrum cum tenetur alias. Aut, error?
      </p>
    </section>
  );
}
