import { useDispatch, useSelector } from "react-redux";
import { addToCartItems } from "../../features/cart/cartSlice";

import Button from "../button/button.component";
import "./product-card.styles.scss";

export default function ProductCard({ product }) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const { name, id, imageUrl, price } = product;
  function handleClick() {
    dispatch(addToCartItems(product, cartItems));
  }
  return (
    <>
      <div className="product-card-container">
        <img src={imageUrl} alt={`${name}`} />
        <div className="footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
        <Button buttonType="inverted" onClick={handleClick}>
          Add to cart
        </Button>
      </div>
    </>
  );
}
