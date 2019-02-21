import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

class Menu extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <ul className="nav">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/catalog">
                Catalog
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Menu;
