import React from "react";
import "./CSS/Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="mainDiv">
      <ul className="w-fit flex-1 flex justify-between pl-0">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/aboutUs">AboutUs</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/Food_Products"> Menu</Link>
        </li>
        <li>
          <Link to="/Cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
