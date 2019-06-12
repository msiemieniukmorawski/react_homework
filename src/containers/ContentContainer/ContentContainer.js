import { connect } from "react-redux";

import Content from "../../components/Content/Content";
import { fetchProductAsync } from "../../actions";

const getProducts = state => state.products;

const mapDispatchToProps = {
  fetchProduct: fetchProductAsync
};

const mapStateToProps = state => {
  return {
    products: getProducts(state)
  };
};

const ContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);

export default ContentContainer;
