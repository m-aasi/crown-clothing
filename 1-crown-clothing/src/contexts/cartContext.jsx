/* eslint-disable no-case-declarations */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer, useState } from "react";

const initialState = {
  isCartOpen: false,
  cartItems: [],
  isCheckOut: false,
};

const CartContext = createContext({});
function reducer(state, action) {
  switch (action.type) {
    case "cart/setIsCartOpen":
      return { ...state, isCartOpen: true };
    case "cart/setIsCheckout":
      return { ...state, isCheckOut: true };
    case "cart/setCartItems":
      return { ...state, cartItems: action.payLoad };
    case "cart/deleteCartItems":
      const filteredItems = state.cartItems.filter(
        (item) => item.id !== action.payLoad.id
      );
      return { ...state, cartItems: filteredItems };

    default:
      throw new Error("Actions doesnot match ");
  }
}

function addCartItems(cartItems, productToAdd) {
  const existingCartItems = cartItems.find(
    (item) => item.id === productToAdd.id
  );

  if (existingCartItems) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // if there is no items in cart at beginning
  return [...cartItems, { ...productToAdd, quantity: 1 }];
}

function decreaseCartItems(cartItems, productToAdd) {
  const existingCartItems = cartItems.find(
    (item) => item.id === productToAdd.id
  );

  if (existingCartItems) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity > 0 ? cartItem.quantity - 1 : 0,
          }
        : cartItem
    );
  }
  // if there is no items in cart at beginning
  return [...cartItems, { ...productToAdd, quantity: 1 }];
}

function CartProvider({ children }) {
  // const [isCartOpen, setIsCartOpen] = useState(false);
  // const [isCheckOut, setIsCheckOut] = useState(false);
  // const [cartItems, setCartItems] = useState([]);

  const [{ isCartOpen, isCheckOut, cartItems }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const totalQuantity = cartItems?.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  function addToCartItems(productToAdd) {
    // setCartItems(addCartItems(cartItems, productToAdd));
    dispatch({
      type: "cart/setCartItems",
      payLoad: addCartItems(cartItems, productToAdd),
    });
  }

  function decreaseToCartItems(productToAdd) {
    // setCartItems(decreaseCartItems(cartItems, productToAdd));
    return dispatch({
      type: "cart/setCartItems",
      payLoad: decreaseCartItems(cartItems, productToAdd),
    });
  }

  function deleteCartItems(itemToDelete) {
    // setCartItems((prevCartItems) =>
    // prevCartItems.filter((item) => item.id !== itemToDelete.id)
    // );
    dispatch({ type: "cart/deleteCartItems", payLoad: itemToDelete });
  }

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        dispatch,
        // setIsCartOpen,
        cartItems,
        // setCartItems,
        addToCartItems,
        totalQuantity,
        isCheckOut,
        // setIsCheckOut,
        decreaseToCartItems,
        deleteCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  return context;
}

export { CartProvider, useCart };

/* 
when a click happened on add to cart button , i want to add that product into cart-dropdown 
now , if that product already exist in the component then i only want to increase the quantiy otherwise want 
to create the new product in cart-dropdown . 

Break this code into chunks :
1.how to increase the quantity ??
in the cartContext , 1. create a state , isProductExist or i can derive state from 

*/
