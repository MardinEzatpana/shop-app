export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};

export const increment = (productId) => {
  return {
    type: "INCREMENT",
    payload: productId,
  };
};

export const decrement = (productId) => {
  return {
    type: "DECREMENT",
    payload: productId,
  };
};

export const removeFromCart1 = (productId) => {
  return {
    type: "REMOVE_FROM_CART1",
    payload: productId,
  };
};

export const removeFromCart2 = (productId) => {
  return {
    type: "REMOVE_FROM_CART2",
    payload: productId,
  };
};

export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};
