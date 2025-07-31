import { useEffect } from "react";
import { useRecipeStore } from "./recipeStore";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const recipes = useRecipeStore((state) => state.recipes);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  useEffect(() => {
    filterRecipes();
  }, [searchTerm]);

  const recipesToShow = searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      <h2>Recipe List</h2>
      <SearchBar />
      {recipesToShow.length === 0 ? (
        searchTerm ? (
          <div>
            <p>No recipes found matching "{searchTerm}"</p>
            <p>Try searching for different keywords or check your spelling.</p>
          </div>
        ) : (
          <p>No recipes yet. Add your first recipe!</p>
        )
      ) : (
        recipesToShow.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>
              {recipe.description.length > 100
                ? `${recipe.description.substring(0, 100)}...`
                : recipe.description}
            </p>
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
