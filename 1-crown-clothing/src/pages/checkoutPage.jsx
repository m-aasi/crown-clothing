import { useSelector } from "react-redux";
import CheckoutItem from "../components/checkout-item/checkout-item.component";
// import { useCart } from "../contexts/cartContext";
import "./checkout.styles.scss";
function calculateTotal(cartItems) {
  return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
}

export default function CheckOut() {
  // const { cartItems } = useCart();
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);

  return (
    <div className="checkout-container">
      <header className="checkout-header">
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </header>
      {/* <div className="header-block">
      </div> */}
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}

      <div className="total">total ${calculateTotal(cartItems)}</div>
    </div>
  );
}
