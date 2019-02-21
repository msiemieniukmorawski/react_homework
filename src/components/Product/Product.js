import React, { Component } from "react";
import { string, shape, arrayOf, bool } from "prop-types";
import "./Product.css";

class Product extends Component {
  static myPropTypes = {
    data: arrayOf(
      shape({
        amount: string,
        category: string,
        featured: bool,
        id: string,
        manufacture: string,
        name: string
      })
    )
  };

  render() {
    const { name, image, amount } = this.props.data;
    return (
      <div className="product">
        <img src={image} alt={name} />
        <p className="price">{amount}</p>
        <h3>{name}</h3>
      </div>
    );
  }
}
export default Product;
