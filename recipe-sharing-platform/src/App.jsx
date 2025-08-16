import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";
import { useState, useEffect } from "react";

function App() {
  const [recipes, setRecipes] = useState([]);

  // Load recipes from localStorage OR data.json (fallback)
  useEffect(() => {
    const storedRecipes = localStorage.getItem("recipes");
    if (storedRecipes) {
      setRecipes(JSON.parse(storedRecipes));
    } else {
      fetch(new URL("./data.json", import.meta.url))
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to load recipes");
          }
          return response.json();
        })
        .then((data) => {
          setRecipes(data);
          localStorage.setItem("recipes", JSON.stringify(data)); // save initial data to localStorage
        })
        .catch((error) => console.error(error));
    }
  }, []);

  // Anytime recipes change, update localStorage
  useEffect(() => {
    if (recipes.length > 0) {
      localStorage.setItem("recipes", JSON.stringify(recipes));
    }
  }, [recipes]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage recipes={recipes} />} />
        <Route
          path="/recipe/:id"
          element={<RecipeDetail recipes={recipes} />}
        />
        <Route
          path="/add"
          element={<AddRecipeForm setRecipes={setRecipes} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
