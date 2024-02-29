import { Link } from "react-router-dom";
import CartWidget from "../common/CardWidget";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="containerNavbar">
        <Link to="/" style={{ color: "white" }}>
          ButterFly
        </Link>
        <ul className="categories">
          <Link to="/">Remeras</Link>
          <Link to="/category/musculosa">Musculosas</Link>
          <Link to="/category/buzo">Buzos</Link>
        </ul>
        <CartWidget />
      </div>
    </>
  );
};
