import { useState } from "react";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import "./App.css";

function App() {
  return (
    <>
      <h1>Recipe Sharing App</h1>
      <p>Share your favorite recipes with the world!</p>
      <hr />
      <h2>Add a New Recipe</h2>
      <AddRecipeForm />
      <hr />
      <h2>Recipes</h2>
      <p>Browse through the recipes below:</p>
      <hr />
      <RecipeList />
    </>
  );
}

export default App;
