import React, { Component } from "react";
import { string, shape, arrayOf, bool } from "prop-types";
import "./Products.css";
import Product from "../Product/Product";

class Products extends Component {
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
    const { data } = this.props;
    return (
      <div className="products">
        {data.map(product => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    );
  }
}
export default Products;
