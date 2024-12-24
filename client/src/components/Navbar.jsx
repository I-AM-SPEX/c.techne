import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
      <nav>
        <div>
          <p className="logo">C.techne</p>
        </div>
        <ul>
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/explore">
              Explore
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/mint">
              Mint
            </Link>
          </li>
        </ul>

        <button className="nav-btn">Login</button>
      </nav>
    </header>
  );
};

export default Navbar;
