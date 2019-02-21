import React, { Component } from "react";
import { string, number, ob } from "prop-types";
import "./Category.css";
import Products from "../Products/Products";

class Category extends Component {
  static classes = {};
  static myPropTypes = {};

  render() {
    const dataCategory = [];
    data.map(data => {
      dataCategory.push(data.category);
    });
    let unique = [...new Set(dataCategory)];

    return (
      <div>
        {unique.map((category, index) => (
          <Products key={category} active={} data={data} />
        ))}
      </div>
    );
  }
}
export default Category;
