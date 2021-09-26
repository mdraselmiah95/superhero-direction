import React from "react";
import image from "../img/change.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="text-center bg-secondary text-light rounded m-3 p-3">
      <img src={image} alt="logo" className="w-25 logo" />
      <h2 className="text-uppercase">The Game changer club</h2>
      <h4 className="fw-bold text-warning my-2">
        They are the Dreamer, Inventor, Creator, the designer who is the
        frontier in the modern world.
      </h4>
      <h3 className="text-info">Price of Creation: 70000 Million</h3>
    </div>
  );
};

export default Header;
