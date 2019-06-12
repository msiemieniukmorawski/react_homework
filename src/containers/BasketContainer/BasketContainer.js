import { connect } from "react-redux";

import BasketPage from "../../rootComponents/BasketPage/BasketPage";
import { removeProduct } from "../../actions";

const getProducts = state => state.basket;

const mapDispatchToProps = {
  removeProduct
};

const mapStateToProps = state => {
  return {
    basket: getProducts(state)
  };
};

const BasketContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BasketPage);

export default BasketContainer;
