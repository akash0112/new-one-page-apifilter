import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Book
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movie">
                Movie
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/character">
                Character
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movieqoute">
               Movie Qoute
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
