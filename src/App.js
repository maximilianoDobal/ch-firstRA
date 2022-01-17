import "./App.css";
import Productos from "./components/Productos/Productos";
import HeroSec from "./components/HeroSec/HeroSec";
import NavBar from "./components/NavBar/NavBar";

function App() {
  
  return (
    <div>
      <HeroSec />
      <NavBar />
      <Productos />
    </div>
  );
}

export default App;
