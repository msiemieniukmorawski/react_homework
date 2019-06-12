import { connect } from "react-redux";

import ProductPage from "../../rootComponents/ProductPage/ProductPage";
import { getProduct } from "../../actions";

const getProductInfo = state => state.singleProduct;

const mapDispatchToProps = {
  getProductInfo: getProduct
};

const mapStateToProps = state => {
  return {
    singleProduct: getProductInfo(state)
  };
};

const ProductPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPage);

export default ProductPageContainer;
