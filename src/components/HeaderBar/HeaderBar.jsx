import React from "react";
import { Link } from "react-router-dom";

function HeaderBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <span className="navbar-brand mb- h1">Name List</span>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/home">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/namelist">
            ShowNameList
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderBar;
