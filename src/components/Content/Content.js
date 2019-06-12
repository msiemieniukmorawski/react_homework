import React, { useEffect } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MenuContainer from "../../containers/MenuContainer/MenuContainer";

import Footer from "../Footer/Footer";
import AboutPage from "../../rootComponents/AboutPage/AboutPage";
import CatalogPageContainer from "../../containers/CatalogPageContainer/CatalogPageContainer";
import HomePageContainer from "../../containers/HomePageContainer/HomePageContainer";
import ProductPageContainer from "../../containers/ProductPageContainer/ProductPageContainer";
import BasketContainer from "../../containers/BasketContainer/BasketContainer";

import Container from "../Container/Container";

const Content = ({ fetchProduct, products: { isError, isLoading } }) => {
  useEffect(() => {
    fetchProduct();
  }, []);

  if (isError) {
    return (
      <Container>
        <h2>Error while loading... :(</h2>
      </Container>
    );
  }
  if (isLoading) {
    return (
      <Container>
        <h2>Loading...</h2>
      </Container>
    );
  }
  return (
    <Router>
      <div>
        <MenuContainer />

        <Switch>
          <Route exact path="/" component={HomePageContainer} />
          <Route path="/catalog" component={CatalogPageContainer} />
          <Route path="/about" component={AboutPage} />
          <Route path="/product/:id" component={ProductPageContainer} />
          <Route path="/basket" component={BasketContainer} />

          <Route render={() => <h1>Page not found :(</h1>} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
};
export default Content;
