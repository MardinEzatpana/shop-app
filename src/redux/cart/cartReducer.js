const initialState = {
  cart: localStorage.getItem("shopping-cart")
    ? JSON.parse(localStorage.getItem("shopping-cart"))
    : [],
};

const updateLocalStorage = (cart) => {
  localStorage.setItem("shopping-cart", JSON.stringify(cart));
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART1":
      const hasProduct = state.cart.find((p) => p.id === action.payload.id)
        ? true
        : false;
      state.cart = hasProduct
        ? state.cart.map((p) =>
            p.id === action.payload.id ? { ...p, qty: p.qty + 1 } : p
          )
        : [...state.cart, { ...action.payload, qty: 1 }];
      updateLocalStorage(state.cart);
      return {
        ...state,
        cart: state.cart,
      };
      case "ADD_TO_CART2":
      const hasProductId = state.cart.find((p) => p.id === action.payload.id)
        ? true
        : false;
      state.cart = hasProductId
        ? state.cart.map((p) =>
            p.id === action.payload.id ? { ...p, qty: p.qty + 1 } : p
          )
        : [...state.cart, { ...action.payload, qty: 1 }];
      updateLocalStorage(state.cart);
      return {
        ...state,
        cart: state.cart,
      };
    case "INCREMENT":
      state.cart = state.cart.map((p) =>
        p.id === action.payload ? { ...p, qty: p.qty + 1 } : p
      );
      updateLocalStorage(state.cart);
      return {
        ...state,
        cart: state.cart,
      };
    case "DECREMENT":
      const product = state.cart.find((p) => p.id === action.payload);
      state.cart =
        product.qty > 1
          ? state.cart.map((p) =>
              p.id === action.payload ? { ...p, qty: p.qty - 1 } : p
            )
          : state.cart;
      updateLocalStorage(state.cart);

      return {
        ...state,
        cart: state.cart,
      };
    case "REMOVE_FROM_CART1":
      state.cart = state.cart.filter((p) => p.id !== action.payload);
      
      updateLocalStorage(state.cart);

      return {
        ...state,
        cart: state.cart,
      };
    case "REMOVE_FROM_CART2":
      state.cart = state.cart.filter((p) => p.id !== action.payload);
      updateLocalStorage(state.cart);

      return {
        ...state,
        cart: state.cart,
      };
    case "CLEAR_CART":
      updateLocalStorage([]);
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
