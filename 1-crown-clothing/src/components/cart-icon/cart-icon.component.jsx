import { useSelector, useDispatch } from "react-redux";
import { setIsCartOpen } from "../../store/store";

import "./cart-icon.styles.scss";

import "../../assets/shopping-bag.svg";

// import { useCart } from "../../contexts/cartContext";

export default function CartIcon() {
  // const { isCartOpen, dispatch } = useCart();

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  console.log(totalQuantity);
  const dispatch = useDispatch();

  // const { totalQuantity } = useCart();
  console.log(totalQuantity);
  function handleOnClick() {
    // setIsCartOpen(!isCartOpen);
    // dispatch({ type: "cart/setIsCartOpen" });
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
