import React, { useContext } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cartItems, calculateTotal, placeOrder, isOrdered } = useContext(
    Context
  );
  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  const textButton = isOrdered ? "Ordering..." : "Place Order";

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {calculateTotal()}</p>
      <div className="order-button">
        <button onClick={() => placeOrder()}>{textButton}</button>
      </div>
    </main>
  );
};

export default Cart;
