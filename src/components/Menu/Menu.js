import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Bag } from "../../assets/shopping-bag.svg";

const Menu = ({ basket }) => {
  let BasketLenght;
  if (basket.length !== 0) {
    BasketLenght = Array.from(new Set(basket)).length;
  } else {
    BasketLenght = 0;
  }
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
          <li>
            <NavLink exact to="/basket">
              <Bag />
              <span>{BasketLenght}</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
