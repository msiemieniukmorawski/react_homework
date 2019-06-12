import { combineReducers } from "redux";

import fetchData from "./fetchData";
import singleProduct from "./singleProduct";
import basket from "./basket";

export default combineReducers({
  products: fetchData,
  singleProduct,
  basket
});
