import { useSelector, useDispatch } from "react-redux";
import { setIsCartOpen } from "../../features/cart/cartSlice";

import "./cart-icon.styles.scss";

import "../../assets/shopping-bag.svg";

export default function CartIcon() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const dispatch = useDispatch();

  function handleOnClick() {
    dispatch(setIsCartOpen());
  }
  return (
    <div className="cart-icon-container" onClick={handleOnClick}>
      <img
        className="shopping-icon"
        src="../../../src/assets/shopping-bag.svg"
        alt="shopIcon"
      />
      <span className="item-count">{totalQuantity}</span>
    </div>
  );
}
