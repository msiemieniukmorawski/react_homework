import React, { Component } from "react";
import ProductsServices from "../../services/product.service";

import Title from "../../components/Title/Title";
import Products from "../../components/Products/Products";
import Subtitle from "../../components/Subtitle/Subtitle";
import Container from "../../components/Container/Container";

const HomePage = ({ products }) => {
  const featured = ProductsServices.getProduct(
    "featured",
    true,
    products.products
  );
  const desktop = ProductsServices.getProduct("category", "desktop", featured);

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
};
export default HomePage;
