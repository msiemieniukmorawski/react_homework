import { ACTION_TYPES } from "../actions";

const fetchData = (
  initState = { products: null, isLoading: true, isError: false },
  action
) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_LOADING:
      return { ...initState };
    case ACTION_TYPES.FETCH_PRODUCT_SUCCESS:
      return {
        products: action.products,
        isLoading: false,
        isError: false
      };
    case ACTION_TYPES.FETCH_ERROR:
      return { products: null, isLoading: false, isError: true };

    default:
      return initState;
  }
};

export default fetchData;
