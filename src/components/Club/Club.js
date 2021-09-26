import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Hero from "../Hero/Hero";

const Club = () => {
  //destructuring
  const [heros, setHeros] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAddCart = (person) => {
    const matching = cart.find((hero) => hero.name === person.name);
    if (!matching) {
      const newCart = [...cart, person];
      setCart(newCart);
    } else {
      alert("Already added.");
    }
  };

  useEffect(() => {
    fetch("./date.json")
      .then((res) => res.json())
      .then((data) => setHeros(data));
  }, []);
  return (
    <div>
      <div className="row m-2">
        <div className="col-md-10">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {heros.map((hero) => (
              <Hero key={hero.id} hero={hero} handleAddCart={handleAddCart} />
            ))}
          </div>
        </div>
        <div className="col-md-2">
          <Cart cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default Club;
