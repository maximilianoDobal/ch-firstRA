import logo from './logo.svg';
import './App.css';
import { MiPrimerModulo } from './MiPrimerModulo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola Mundo!
        </p>
      </header>
        <MiPrimerModulo />
    </div>
  );
}

export default App;
