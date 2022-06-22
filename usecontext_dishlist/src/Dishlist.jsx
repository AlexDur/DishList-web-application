import React, { useContext } from "react";
import { ContextDish } from "./ContextDish";
import Dish from "./Dish";

const Dishlist = () => {
  const [dishes, setDishes] = useContext(ContextDish);

  return (
    <div>
      {dishes.map((dish) => (
        <Dish name={dish.name} price={dish.price} key={dish.id} />
      ))}
    </div>
  );
};

export default Dishlist;
