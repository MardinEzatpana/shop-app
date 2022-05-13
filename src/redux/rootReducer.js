import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import productReducer from "./products/productReducer";

const rootReducer = combineReducers({
  product: productReducer,
  shoppingCart: cartReducer,
});

export default rootReducer;
