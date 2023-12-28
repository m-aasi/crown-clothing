import "./cart-item.styles.scss";

export default function CartItem({ CartItem }) {
  const { name, quantity, price, imageUrl } = CartItem;

  return (
    <div className="cart-item-container">
      <img className="img" src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} * {price * quantity}
        </span>
      </div>
    </div>
  );
}
