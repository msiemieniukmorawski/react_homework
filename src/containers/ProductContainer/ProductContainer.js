import { connect } from "react-redux";

import Product from "../../components/Product/Product";
import { addProduct } from "../../actions";

const mapDispatchToProps = {
  addProduct
};

const ProductContainer = connect(
  null,
  mapDispatchToProps
)(Product);

export default ProductContainer;
