import { useCart } from "../../contexts/cartContext";
import CartItem from "../cart-item/cart-item.component";

import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";
import { setIsCheckOut } from "../../store/store";

export default function CartDropdown() {
  // const { cartItems, isCheckOut, dispatch } = useCart();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  function handleOnClick() {
    // setIsCheckOut(true);

    dispatch(setIsCheckOut());
  }
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} CartItem={item} />
        ))}
      </div>
      <NavLink to="/checkout">
        <Button onClick={handleOnClick}>Go To Checkout</Button>
      </NavLink>
    </div>
  );
}
