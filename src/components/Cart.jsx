export default function Cart({ cart, removeItem }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-box">
      <h3>Cart</h3>

      {cart.map((item, index) => (
        <div className="cart-item" key={index}>
          <span>{item.name} - ₹{item.price}</span>
          <button onClick={() => removeItem(index)}>Remove</button>
        </div>
      ))}

      <h4>Total: ₹ {total}</h4>
    </div>
  );
}
