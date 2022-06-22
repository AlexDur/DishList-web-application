import React from "react";

const Dish = ({ name, price, link, rating, difficulty, rectemperature }) => {
  return (
    <div>
      <h3>{name}</h3>
      <h3>{price}</h3>
      <h3>{link}</h3>
      <h3>{rating}</h3>
      <h3>{difficulty}</h3>
      <h3>{rectemperature}</h3>
    </div>
  );
};

export default Dish;
