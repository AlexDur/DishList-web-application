import React, { useContext, useState } from "react";
import { ContextDish } from "../ContextDish";
import { FormContainer } from "./AddDish";

const AddDish = () => {
  const [dishes, setDishes] = useContext(ContextDish);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [link, setLink] = useState("");
  const [rating, setRating] = useState(0);
  const [difficulty, setDifficulty] = useState(0);
  const [rectemperature, setRectemperature] = useState("");

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const updateLink = (e) => {
    setLink(e.target.value);
  };

  const updateRating = (e) => {
    setRating(e.target.value);
  };

  const updateDifficulty = (e) => {
    setDifficulty(e.target.value);
  };

  const updateRecTemperature = (e) => {
    setRectemperature(e.target.value);
  };

  //...prevDishes makes a copy of the pre given objects
  const addDish = (e) => {
    e.preventDefault();
    setDishes((prevDishes) => [
      ...prevDishes,
      {
        name: name,
        price: price,
        link: link,
        rating: rating,
        difficulty: difficulty,
        rectemperature: rectemperature,
      },
    ]);
  };

  return (
    <>
      <FormContainer onSubmit={addDish}>
        <label>
          <p>Online-Quelle</p>
          <input
            type="text"
            name="link"
            value={link}
            onChange={updateLink}
            placeholder="Link"
          />
        </label>
        <label>
          <p>Dish</p>
          <input
            type="text"
            name="name"
            value={name}
            onChange={updateName}
            placeholder="Dish"
          />
        </label>
        <label>
          <p>Preis</p>
          <input
            type="text"
            name="price"
            value={price}
            onChange={updatePrice}
            placeholder="Preis"
          />
        </label>
        <label>
          <p>Bewertung</p>
          <input
            type="number"
            name="rating"
            value={rating}
            onChange={updateRating}
            step="0.5"
            min="1"
            max="4"
            placeholder="1-4"
          />
        </label>
        <label>
          <p>Schwierigkeit</p>
          <input
            type="number"
            name="difficulty"
            value={difficulty}
            onChange={updateDifficulty}
            step="1"
            min="1"
            max="3"
            placeholder="1-3"
          />
        </label>
        <label>
          <p>Empfohlene Schärfe</p>
          <select
            type="number"
            name="rectemperature"
            value={rectemperature}
            onChange={updateRecTemperature}
          >
            <option value="">Bitte auswählen</option>
            <option value="Nicht scharf">Nicht scharf</option>
            <option value="Mittelscharf">Mittelscharf</option>
            <option value="Sehr scharf">Sehr scharf</option>
          </select>
        </label>
      </FormContainer>

      <button>Rezept anlegen</button>
    </>
  );
};

export default AddDish;
