import axios from "axios";



export const setProduct = (productId) => {
  return {
    type: "SET_PRODUCT",
    payload: productId,
  };
};

export const setLoading = (status) => {
  return {
    type: "SET_LOADING",
    payload: status,
  };
};

export const setError = (error) => {
  return {
    type: "SET_ERROR",
    payload: error,
  };
};

export const fetchProduct = (productId) => {
  return function (dispatch) {
    dispatch(setLoading(true));
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.data)
      .then((data) => {
        dispatch(setProduct(data));
        dispatch(setLoading(false));
        dispatch(setError(null));
      })
      .catch((err) => {
        dispatch(setError(err.message));
        dispatch(setLoading(false));
      });
  };
};
