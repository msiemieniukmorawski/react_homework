import { ACTION_TYPES } from "../actions";

const getProduct = (initState = [], action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_PRODUCT:
      return [...action.basketProduct];

    case ACTION_TYPES.REMOVE_PRODUCT:
      return [...action.basketProduct];
    default:
      return initState;
  }
};

export default getProduct;
