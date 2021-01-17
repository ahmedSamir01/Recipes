import React from "react";
import GlobalStyle from "./globalStyles";
import Recipes from "./components/Recipes/Recipes";
import Search from "./components/Search/Search";

import { Land, Recipesstyle } from "./appStyle.js";

function App() {
  const APP_ID = "d255c9a5";
  const APP_KEY = "3a4b12c4cd8d2d1ed52f441256974eb5";

  // the search
  const [search, setSearch] = React.useState("fish");

  // GET DATA FROM API TO OUR SITE, useState Hook
  const [recipes, setRecipes] = React.useState([]);

  // fn as a parameter
  React.useEffect(() => {
    getRecipes();
  }, [search]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    // it will return objects

    setRecipes(data.hits);
  };

  // or do it with .then
  /*
  fetch(...)
  .then(response => {
    response.json();
  })
  .then()
  */
  return (
    <React.Fragment>
      <GlobalStyle />
      <Land>
        <Search setSearch={setSearch} search={search} />
        <Recipesstyle>
          {recipes.map((recipe) => (
            <Recipes key={recipe.recipe.label} recipe={recipe.recipe} />
          ))}
        </Recipesstyle>
      </Land>
    </React.Fragment>
  );
}

export default App;
