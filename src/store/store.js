// TODO: use this store variable to create a store.
import {combineReducers, legacy_createStore} from "redux";
import { authReducer } from "./auth/auth.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { productReducer } from "./product/product.reducer";

let rootReducer = combineReducers({
  auth:authReducer,
  cart:cartReducer,
  product:productReducer,
})

export const store = legacy_createStore(rootReducer)

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
