import './NavBar.css';
import CarritoIcono from '../Icons/CarritoIcono/CarritoIcono';
import ContadorCarrito from '../ContadorCarrito/ContadorCarrito';


const NavBar = () => {
    return (
        <>
            <nav className="navBar__container">
                <div className="navBar__logo">
                <h2><span>P</span>hoto<span>S</span>tore</h2>
                </div>
                <div>
                    <ul className="navBar__lista">
                        <li><a href="">Productos</a></li>
                        <li><a href="">Nosotros</a></li>
                        <li><a href="">Galeria</a></li>
                        <li><a href="">Contacto</a></li>
                        <li><a href=""><CarritoIcono /> <ContadorCarrito /></a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default NavBar;