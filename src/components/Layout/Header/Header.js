import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <nav
      className="navbar navbar-inverse position-fixed w-100 pl-5 pr-5"
      style={{ zIndex: "2" }}
    >
      <div className="container-fluid">
        <div className="navbar-header">
          <NavLink className="navbar-brand" to="/">
            <img
              src="https://cybersoft.edu.vn/wp-content/uploads/2017/03/MIN-OP1.png"
              alt="cybersoft logo"
              style={{ width: "80%" }}
            />
          </NavLink>
        </div>
        <ul className="nav" style={{ gap: "2rem" }}>
          <li className="active">
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Page 1</a>
          </li>
          <li>
            <a href="#">Page 2</a>
          </li>
        </ul>
        <ul className="nav navbar-right" style={{ gap: "2rem" }}>
          <li>
            <a href="#">
              <span className="glyphicon glyphicon-user" /> Sign Up
            </a>
          </li>
          <li>
            <a href="#">
              <span className="glyphicon glyphicon-log-in" /> Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
