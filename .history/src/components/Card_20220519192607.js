import headshot from "../assets/images/stock-head.jpeg";
import './Card.scss';

export default function Card({person, children}) {
  console.log('person', person )
  return (
    <section className="card">
      <img src={headshot} alt="headshot" />
      {children}
    </section>
  );
}
