import React from "react";

const Cart = (props) => {
  const { cart } = props || {};
  //   console.log(cart);

  const totalReducer = (previous, current) => previous + current.earn;
  const total = cart.reduce(totalReducer, 0);
  return (
    <div>
      <h2>Total: {cart.length}</h2>
      <h4>Cost: {total}</h4>

      <ul>
        {cart.map((person) => (
          <li>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
