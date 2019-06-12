import React from "react";
import { NavLink } from "react-router-dom";

const Product = ({ data, data: { name, image, amount, id }, addProduct }) => {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <p className="price">{amount}</p>
      <h3>
        <NavLink exact to={`/product/${id}`}>
          {name}
        </NavLink>
      </h3>
      <div className="button">
        <a href="#" onClick={() => addProduct(data)}>
          Buy
        </a>
      </div>
    </div>
  );
};
export default Product;
