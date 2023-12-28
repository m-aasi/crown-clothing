import { createStore, combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./rootSaga";
import userReducer from "../features/user/userSlice";
import categoriesReducer from "../features/categories/categoriesSlice";
import cartReducer from "../features/cart/cartSlice";

const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
export default store;

/* lets break this logic together 



*/
