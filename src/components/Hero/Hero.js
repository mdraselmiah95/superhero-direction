import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Hero.css";
const Hero = (props) => {
  //   console.log(props);
  const { name, born, nationality, occupation, fields, earn, quote, img } =
    props.hero || {};
  const icon = <FontAwesomeIcon icon={faShoppingCart} />;
  return (
    <div className="col-lg-4 col-md-6">
      <div className="col">
        <div className="card p-2 bg-secondary text-light text-center">
          <img src={img} id="img" className="rounded" alt="programmer" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="text-warning">{born}</p>
            <p>From: {nationality}</p>
            <p>{occupation}</p>
            <p>
              <span className="fw-bold">Creation: </span>
              {fields}
            </p>
            <h5>Estimated Earning:$ {earn}</h5>
            <p className="text-info">
              <q>{quote}</q>
            </p>
            <button
              onClick={() => props.handleAddCart(props.hero)}
              className="btn btn-outline-warning"
            >
              {icon} ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
