import React, { useContext } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cartItems, calculateTotal, placeOrder, ordered } = useContext(
    Context
  );
  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {calculateTotal()}</p>
      <div className="order-button">
        {cartItems.length > 0 ? (
          <button onClick={() => placeOrder()}>{ordered}</button>
        ) : (
          <p>You have no items in your card</p>
        )}
      </div>
    </main>
  );
};

export default Cart;
