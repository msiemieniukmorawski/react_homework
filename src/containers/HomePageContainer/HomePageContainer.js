import { connect } from "react-redux";

import HomePage from "../../rootComponents/HomePage/HomePage";

const getProducts = state => state.products;

const mapStateToProps = state => {
  return {
    products: getProducts(state)
  };
};

const HomePageContainer = connect(mapStateToProps)(HomePage);

export default HomePageContainer;
