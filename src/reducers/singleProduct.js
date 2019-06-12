import { ACTION_TYPES } from "../actions";

const getProduct = (initState = {}, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_PRODUCT_SUCCESS:
      return { ...action.singleProducts };

    default:
      return initState;
  }
};

export default getProduct;
