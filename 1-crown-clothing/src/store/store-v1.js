import { createStore, combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
const initialState = {
  currentUser: null,
  setCurrentUser: () => null,
  categoriesMap: {},
  isCartOpen: false,
  cartItems: [],
  isCheckOut: false,
  totalQuantity: 0,
};

// const userinitialState = {
//   currentUser: null,
//   setCurrentUser: () => null,
// };
// const categoriesInitialState = {
//   categoriesMap: {},
// };
// function userReducer(state = initialState, action) {
//   switch (action.type) {
//     case "user/setCurrentUser":
//       return { ...state, currentUser: action.payLoad };

//     default:
//       return state;
//   }
// }

// function categoriesReducer(state = initialState, action) {
//   switch (action.type) {
//     case "categories/setCategoriesMap":
//       return { ...state, categoriesMap: action.payLoad };

//     default:
//       return state;
//   }
// }

// function cartReducer(state = initialState, action) {
//   switch (action.type) {
//     case "cart/setIsCartOpen":
//       return { ...state, isCartOpen: !state.isCartOpen };
//     case "cart/setIsCheckout":
//       return { ...state, isCheckOut: true };
//     case "cart/setCartItems":
//       const newCartItems = action.payLoad;

//       const totalQuantity = newCartItems.reduce(
//         (acc, item) => acc + item.quantity,
//         0
//       );
//       console.log("TotalQuantity:", totalQuantity);
//       return {
//         ...state,
//         cartItems: [...newCartItems],
//         totalQuantity: totalQuantity,
//       };
//     case "cart/deleteCartItems":
//       const filteredItems = state.cartItems.filter(
//         (item) => item.id !== action.payLoad.id
//       );
//       return { ...state, cartItems: filteredItems };

//     default:
//       return state;
//   }
// }

// const rootReducer = combineReducers({
//   user: userReducer,
//   categories: categoriesReducer,
//   cart: cartReducer,
// });

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );
// console.log(store);
// // const { cartItems, isCartOpen, isCheckOut } = store.cart;

// const { isCartOpen, isCheckOut, cartItems } = initialState;

// function addCartItems(productToAdd, cartItems) {
//   console.log(cartItems);
//   const existingCartItems = cartItems.find(
//     (item) => item.id === productToAdd.id
//   );

//   if (existingCartItems) {
//     return cartItems.map((cartItem) =>
//       cartItem.id === productToAdd.id
//         ? { ...cartItem, quantity: cartItem.quantity + 1 }
//         : cartItem
//     );
//   }

//   return [...cartItems, { ...productToAdd, quantity: 1 }];
// }

// function decreaseCartItems(productToDec, cartItems) {
//   const existingCartItems = cartItems.find(
//     (item) => item.id === productToDec.id
//   );

//   if (existingCartItems) {
//     return cartItems.map((cartItem) =>
//       cartItem.id === productToDec.id
//         ? {
//             ...cartItem,
//             quantity: cartItem.quantity > 0 ? cartItem.quantity - 1 : 0,
//           }
//         : cartItem
//     );
//   }

//   return [...cartItems, { ...productToDec, quantity: 1 }];
// }

// export function setCurrentUser(user) {
//   return { type: "user/setCurrentUser", payLoad: user };
// }

// export function setCategoriesMap(categoryMap) {
//   return { type: "categories/setCategoriesMap", payLoad: categoryMap };
// }

// export function addToCartItems(productToAdd, cartItems) {
//   const updatedCartItems = addCartItems(productToAdd, cartItems || []);
//   return {
//     type: "cart/setCartItems",
//     payLoad: updatedCartItems,
//   };
// }

// export function decreaseToCartItems(productToDec, cartItems) {
//   const updatedCartItems = decreaseCartItems(productToDec, cartItems || []);
//   return {
//     type: "cart/setCartItems",
//     payLoad: updatedCartItems,
//   };
// }

// export function deleteCartItems(itemToDelete) {
//   return { type: "cart/deleteCartItems", payLoad: itemToDelete };
// }

// export function setIsCartOpen() {
//   return { type: "cart/setIsCartOpen" };
// }
// export function setIsCheckOut() {
//   return { type: "cart/setIsCheckout" };
// }

export default store;

/* lets break this logic together 



*/
