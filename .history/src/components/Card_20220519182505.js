import headshot from "../assets/images/stock-head.jpeg";
import './Card.scss';

export default function Card() {
  return (
    <section>
      <img src={headshot} alt="headshot" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, facere
        voluptatibus! Fugit est, magni laborum autem eaque recusandae quaerat
        inventore non eos voluptatem rem nostrum cum tenetur alias. Aut, error?
      </p>
    </section>
  );
}
