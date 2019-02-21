import React, { Component } from "react";
import { string, shape, arrayOf, bool } from "prop-types";
import "./CatalogPage.css";
import ProductsServices from "../../services/product.service";

import Title from "../../components/Title/Title";
import Products from "../../components/Products/Products";
import Filters from "../../components/Filters/Filters";
import Container from "../../components/Container/Container";

class HomePage extends Component {
  state = {
    key: "manufacturere",
    value: "all",
    checked: "all",
    inputTextValue: ""
  };

  updateProducts(key, value) {
    this.setState({
      key: key,
      value: value,
      checked: value
    });
  }

  searchProducts(key, value) {
    this.setState({
      key: key,
      value: value,
      checked: "all",
      inputTextValue: value
    });
  }

  reset() {
    this.setState({
      key: "manufacturere",
      value: "all",
      checked: "all",
      inputTextValue: ""
    });
  }

  render() {
    const { key, value } = this.state;
    let products = ProductsServices.getProduct(key, value);
    return (
      <Container>
        <Title title="Catalog" />
        <div className="catalog">
          <div className="column-left">
            <Filters
              inputTextValue={this.state.inputTextValue}
              searchProducts={this.searchProducts.bind(this)}
              checked={this.state.checked}
              reset={(key, value) => this.reset.bind(this, key, value)}
              updateProducts={(key, value) =>
                this.updateProducts.bind(this, key, value)
              }
            />
          </div>

          <div className="column-right">
            <Products data={products} />
          </div>
        </div>
      </Container>
    );
  }
}
export default HomePage;
