import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const MealApi = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        console.log(res);
        setItems(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section className="card" key={idMeal}>
        <img src={strMealThumb} alt={strMeal} />
        <section className="content">
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </section>
      </section>
    );
  });
  return <section className="items-container">{itemsList}</section>;
};

export default MealApi;
