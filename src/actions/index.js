export const ACTION_TYPES = {
  FETCH_LOADING: "FETCH_LOADING",
  FETCH_ERROR: "FETCH_ERROR",
  FETCH_PRODUCT_SUCCESS: "FETCH_PRODUCT_SUCCESS",
  GET_PRODUCT: "GET_PRODUCT",
  GET_PRODUCT_SUCCESS: "GET_PRODUCT_SUCCESS",
  ADD_PRODUCT: "ADD_PRODUCT",
  REMOVE_PRODUCT: "REMOVE_PRODUCT"
};

export const fetchProductSuccess = products => {
  return {
    type: ACTION_TYPES.FETCH_PRODUCT_SUCCESS,
    products
  };
};

export const fetchLoading = () => ({
  type: ACTION_TYPES.FETCH_LOADING
});

export const fetchErorr = () => ({ type: ACTION_TYPES.FETCH_ERROR });

export const fetchProductAsync = () => {
  return dispatch => {
    dispatch(fetchLoading());
    fetch("https://api.jsonbin.io/b/5d011bd358196b429f52ea7e")
      .then(response => response.json())
      .then(response => {
        dispatch(fetchProductSuccess(response));
      })
      .catch(e => dispatch(fetchErorr(e)));
  };
};

export const getProduct = id => {
  return (dispatch, getState) => {
    const { products } = getState();
    const singleProducts = products.products.filter(item => item.id === id)[0];
    dispatch(getProductSuccess(singleProducts));
  };
};

export const getProductSuccess = singleProducts => {
  return {
    type: ACTION_TYPES.GET_PRODUCT_SUCCESS,
    singleProducts
  };
};

export const addProduct = product => {
  return (dispatch, getState) => {
    const { basket } = getState();
    const basketProduct = basket.concat(product);
    dispatch(addProductSuccess(basketProduct));
  };
};

export const removeProduct = product => {
  return (dispatch, getState) => {
    const { basket } = getState();
    const basketProduct = basket.filter(item => item.id !== product.id);
    dispatch(removeProductSuccess(basketProduct));
  };
};

export const removeProductSuccess = basketProduct => {
  return {
    type: ACTION_TYPES.REMOVE_PRODUCT,
    basketProduct
  };
};

export const addProductSuccess = basketProduct => {
  return {
    type: ACTION_TYPES.ADD_PRODUCT,
    basketProduct
  };
};
