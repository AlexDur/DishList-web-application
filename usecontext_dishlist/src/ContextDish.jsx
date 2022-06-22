import React, { useState, createContext } from "react";

export const ContextDish = createContext();

export const DishProvider = (props) => {
  const [dishes, setDishes] = useState([
    {
      link: "",
      name: "",
      rating: "",
      price: "",
      difficulty: "",
      rectemperature: "",
      id: Math.floor(Math.random() * 10000),
    },
  ]);

  return (
    <ContextDish.Provider value={[dishes, setDishes]}>
      {props.children}
    </ContextDish.Provider>
  );
};
