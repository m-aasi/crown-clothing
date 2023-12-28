import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// import { useUserContext } from "../../contexts/userContext";
import { signOutUser } from "../../utils/firebase.utils";
// import { useCart } from "../../contexts/cartContext";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import "./navigation.styles.scss";
import CheckOut from "../../pages/checkoutPage";
import { setCurrentUser } from "../../store/store";

export default function NavigationBar() {
  // const { currentUser, setCurrentUser } = useUserContext();
  // const { currentUser, dispatch } = useUserContext();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);
  const { isCartOpen, isCheckOut } = useSelector((state) => state.cart);

  // const { isCartOpen, isCheckOut } = useCart();

  // console.log(currentUser);

  async function handleSignOut() {
    const res = await signOutUser();
    console.log(res);
    // setCurrentUser(null);
    // dispatch({ type: "user/setCurrentUser", payLoad: null });
    dispatch(setCurrentUser(null));
  }
  return (
    <div className="navigation">
      <NavLink to="/" className="logo-container">
        <img src="../../../src/assets/crown.svg" alt="logo" className="logo" />
      </NavLink>

      <div className="nav-links-container">
        <NavLink to="/shop" className="nav-link">
          SHOP
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          CONTACT
        </NavLink>
        {currentUser ? (
          <span className="nav-link" onClick={handleSignOut}>
            Sign Out
          </span>
        ) : (
          <NavLink to="/auth" className="nav-link">
            SIGN IN
          </NavLink>
        )}
      </div>
      <CartIcon />
      {isCartOpen && <CartDropdown />}
      {/* {isCheckOut && <CheckOut />} */}
    </div>
  );
}
