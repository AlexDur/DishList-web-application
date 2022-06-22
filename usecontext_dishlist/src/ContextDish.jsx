import React, { useState, createContext } from "react";

export const ContextDish = createContext();

export const DishProvider = (props) => {
  const [dishes, setDishes] = useState([
    { name: "", price: "", id: Math.random() * 1000 },
  ]);

  return (
    <ContextDish.Provider value={[dishes, setDishes]}>
      {props.children}
    </ContextDish.Provider>
  );
};
