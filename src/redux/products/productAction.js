import axios from "axios";

export const setProducts = (products) => {
  return {
    type: "SET_PRODUCTS",
    payload: products,
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

export const fetchProducts = () => {
  return function (dispatch) {
    dispatch(setLoading(true));
    axios
      .get("https://fakestoreapi.com/products?limit=20")
      .then((res) => res.data)
      .then((data) => {
        dispatch(setProducts(data));
        dispatch(setLoading(false));
        dispatch(setError(null));
      })
      .catch((err) => {
        dispatch(setError(err.message));
        dispatch(setLoading(false));
      });
  };
};
