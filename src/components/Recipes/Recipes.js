import React from "react";
import { Recipe, RImg, Content } from "./style.js";

function Recipes({ recipe }) {
  return (
    <Recipe>
      <h2 className="border-bottom pb-3">{recipe.label}</h2>
      <Content>
        <ol>
          {recipe.ingredients.map((ingredient, i) => (
            <li className="mb-2 mt-2 list-unstyled" key={i}>
              {ingredient.text}
            </li>
          ))}
        </ol>
      </Content>
      <p className="border d-inline-block btn-sm mt-2">{recipe.calories}</p>
      <RImg src={recipe.image} alt="recipe.label" />
    </Recipe>
  );
}

export default Recipes;
