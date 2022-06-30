import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import productReducer from "./products/productReducer";
import viewProductReducer from "./viewProduct/viewProductReducer";

const rootReducer = combineReducers({
  products: productReducer,
  product: viewProductReducer,
  shoppingCart: cartReducer,
});

export default rootReducer;
