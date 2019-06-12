import { connect } from "react-redux";

import CatalogPage from "../../rootComponents/CatalogPage/CatalogPage";

const getProducts = state => state.products;

const mapStateToProps = state => {
  return {
    products: getProducts(state)
  };
};

const CatalogPageContainer = connect(mapStateToProps)(CatalogPage);

export default CatalogPageContainer;
