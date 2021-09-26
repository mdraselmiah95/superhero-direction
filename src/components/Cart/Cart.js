import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const Cart = (props) => {
  const { cart } = props || {};
  const icon = <FontAwesomeIcon icon={faUser} />;
  //use reducer
  const totalReducer = (previous, current) => previous + current.earn;
  const total = cart.reduce(totalReducer, 0);
  return (
    <div className="bg-secondary rounded p-3">
      <h2 className="fs-4 text-center">
        <span className="text-primary">{icon} </span> Inventor: {cart.length}
      </h2>
      <h4 className="text-center">Cost:$ {total}</h4>

      <ul>
        {cart.map((person) => (
          <li className="fw-bold text-warning" key={person.id}>
            {person.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
