import { useDispatch, useSelector } from "react-redux";

import {
  addToCartItems,
  decreaseToCartItems,
  deleteCartItems,
} from "../../features/cart/cartSlice";

import "./checkout-item.styles.scss";

export default function CheckoutItem({ item }) {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const { imageUrl, name, price, quantity, id } = item;
  const dispatch = useDispatch();

  function handleInc() {
    dispatch(addToCartItems(item, cartItems));
  }
  function handleDec() {
    dispatch(decreaseToCartItems(item, cartItems));
  }

  function handleRemoveItem() {
    dispatch(deleteCartItems(item));
  }

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} className="img" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <button className="arrow" onClick={handleDec}>
          &lt;
        </button>

        {quantity}
        <button className="arrow" onClick={handleInc}>
          &gt;
        </button>
      </span>
      <span className="price">{price * quantity}</span>
      <button onClick={handleRemoveItem}>x</button>
    </div>
  );
}
