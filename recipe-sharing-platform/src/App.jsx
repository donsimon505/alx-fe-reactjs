import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";
import { useState, useEffect } from "react";

function App() {
  const [recipes, setRecipes] = useState([]);

  // Load recipes once on mount
  useEffect(() => {
    fetch(new URL("./data.json", import.meta.url))
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load recipes");
        }
        return response.json();
      })
      .then((data) => setRecipes(data))
      .catch((error) => console.error(error));
  }, []);

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
