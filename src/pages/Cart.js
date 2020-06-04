import React, { useContext } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cartItems } = useContext(Context);
  const cartItemsElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));
  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemsElements}
    </main>
  );
};

export default Cart;
