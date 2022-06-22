import React, { useContext } from "react";
import { ContextDish } from "./ContextDish";
import Dish from "./Dish";

const Dishlist = () => {
  const [dishes, setDishes] = useContext(ContextDish);

  return (
    <div>
      {dishes.map((dish) => (
        <Dish
          name={dish.name}
          price={dish.price}
          link={dish.link}
          rating={dish.rating}
          difficulty={dish.difficulty}
          rectemperature={dish.rectemperature}
          key={dish.id}
        />
      ))}
    </div>
  );
};

export default Dishlist;
