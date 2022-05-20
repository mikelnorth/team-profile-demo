import './App.scss';
import Card from './components/Card';
import { getPeople } from './api/person.js';

function App() {

  const [people, setPeople] = useState(getPeople());

  return (
    <div className="App">
      <nav className="nav">X</nav>

      <main>
        <Card/>
        <Card/>
        <Card/>
      </main>

    </div>
  );
}

export default App;
