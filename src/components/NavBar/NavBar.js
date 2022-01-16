import './NavBar.css';
import CarritoIcono from '../Icons/CarritoIcono/CarritoIcono';
import ContadorCarrito from '../ContadorCarrito/ContadorCarrito';


const NavBar = () => {
    return (
        <header>
            <div className="hero">
                <div className="hero__logo">
                    <h1><span>P</span>hoto<span>S</span>tore</h1>
                </div>
                <div className="hero__btns">
                    <button className="btn"><a href="" className="textoGrande">Tienda</a></button>
                    <button className="btn btn__contacto"><a href="" className="btn__contacto--texto textoGrande">Contacto</a></button>
                </div>
            </div>
            <div className="navBar__container">
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
            </div>
        </header>
    )
}
export default NavBar;