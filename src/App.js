import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Productos from "./components/Productos/Productos";
import HeroSec from "./components/HeroSec/HeroSec";
import NavBar from "./components/NavBar/NavBar";
import ContenedorItemDetalle from './components/ContenedorItemDetalle/ContenedorItemDetalle';

function App() {
  
  return (
    <div>
      <HeroSec />
      <NavBar />
      <Productos />
      <ContenedorItemDetalle></ContenedorItemDetalle>
  
    </div>
  );
}

export default App;
