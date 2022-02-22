import "./NavBar.css";

import CardWidget from "../Icons/CardWidget/CardWidget";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const NavBar = () => {
  const { cart } = useCart();

  return (
    <>
      <nav className="navBar__container">
        <div className="navBar__logo">
          <h2>
            <Link to="/">
              <span>P</span>hoto<span>S</span>tore
            </Link>
          </h2>
        </div>
        <div>
          <ul className="navBar__lista m-2">
            <li>
              <Link to="/store">Productos</Link>
            </li>
            <li>
              <Link to="/about">Nosotros</Link>
            </li>
            <li>
              <Link to="/cart">
                <CardWidget />
                <Badge
                  bg="warning"
                  pill
                  className={cart.length === 0 ? "hide" : null}
                >
                  {cart.map((obj) => obj.quantity).reduce((a, b) => a + b, 0)}
                </Badge>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
