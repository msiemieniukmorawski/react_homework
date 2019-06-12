import React, { Component } from "react";
import ProductContainer from "../../containers/ProductContainer/ProductContainer";

class Products extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="products">
        {data.map(product => (
          <ProductContainer key={product.id} data={product} />
        ))}
      </div>
    );
  }
}
export default Products;
