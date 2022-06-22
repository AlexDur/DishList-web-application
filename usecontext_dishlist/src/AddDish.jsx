import React, { useContext, useState } from "react";
import { ContextDish } from "./ContextDish";

const AddDish = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [dishes, setDishes] = useContext(ContextDish);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const addDish = (e) => {
    e.preventDefault();
    setDishes((prevDishes) => [...prevDishes, { name: name, price: price }]);
  };

  return (
    <div>
      <form onSubmit={addDish}>
        <input type="text" name="name" value={name} onChange={updateName} />
        <input type="text" name="name" value={price} onChange={updatePrice} />
        <button>Rezept anlegen</button>
      </form>
    </div>
  );
};

export default AddDish;
