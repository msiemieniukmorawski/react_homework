import { connect } from "react-redux";

import Menu from "../../components/Menu/Menu";

const getProducts = state => state.basket;

const mapStateToProps = state => {
  return {
    basket: getProducts(state)
  };
};

const MenuContainer = connect(mapStateToProps)(Menu);

export default MenuContainer;
