import './App.css';
import headshot from './assets/images/stock-head.jpeg'

function App() {
  return (
    <div className="App">
      <nav>X</nav>

      <main>
        <Card>
          <img src={headshot} alt='headshot'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, facere voluptatibus! Fugit est, magni laborum autem eaque recusandae quaerat inventore non eos voluptatem rem nostrum cum tenetur alias. Aut, error?</p>
        </Card>
      </main>

    </div>
  );
}

export default App;
