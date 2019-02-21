import React, { Component } from "react";
import { string, shape, arrayOf, bool } from "prop-types";
import "./HomePage.css";
import ProductsServices from "../../services/product.service";

import Title from "../../components/Title/Title";
import Products from "../../components/Products/Products";
import Subtitle from "../../components/Subtitle/Subtitle";
import Container from "../../components/Container/Container";

class HomePage extends Component {
  static myPropTypes = {
    featured: arrayOf(
      shape({
        amount: string,
        category: string,
        featured: bool,
        id: string,
        manufacture: string,
        name: string
      })
    ),
    desktop: arrayOf(
      shape({
        amount: string,
        category: string,
        featured: bool,
        id: string,
        manufacture: string,
        name: string
      })
    ),
    tablet: arrayOf(
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
    const featured = ProductsServices.getProduct("featured", true);
    const desktop = ProductsServices.getProduct(
      "category",
      "desktop",
      featured
    );

    const tablet = ProductsServices.getProduct("category", "tablet", featured);

    return (
      <Container>
        <Title title="WELCOME TO OUR STORE" />
        <Subtitle subtitle="DESKTOPS" />
        <Products data={desktop} />
        <Subtitle subtitle="TABLETS" />
        <Products data={tablet} />
      </Container>
    );
  }
}
export default HomePage;
