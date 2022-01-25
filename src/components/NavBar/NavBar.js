import "./NavBar.css";

import CarritoIcono from "../Icons/CarritoIcono/CarritoIcono";
import Badge from "react-bootstrap/Badge";

const NavBar = () => {
  return (
    <>
        <nav className="navBar__container">
            <div className="navBar__logo">
            <h2><span>P</span>hoto<span>S</span>tore</h2>
            </div>
            <div>
                <ul className="navBar__lista m-2">
                    <li><a href="" className="nav__link">Productos</a></li>
                    <li><a href="" className="nav__link">Nosotros</a></li>
                    <li><a href="" className="nav__link">Galeria</a></li>
                    <li><a href="" className="nav__link">Contacto</a></li>
                    <li><a href="" className="nav__link"><CarritoIcono /><Badge bg="warning" pill>4</Badge></a></li>
                </ul>
            </div>
        </nav>
    </>
  );
};
export default NavBar;
