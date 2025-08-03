import AddRecipeForm from "./AddRecipeForm";
import RecipeList from "./RecipeList";
import FavoritesList from "./FavoritesList";
import RecommendationsList from "./RecommendationsList";

function Home() {
  return (
    <>
      <p>Share your favorite recipes with the world!</p>
      <hr />
      <h2>Add a New Recipe</h2>
      <AddRecipeForm />
      <hr />
      <h2>Recipes</h2>
      <p>Browse through the recipes below:</p>
      <hr />
      <RecipeList />
      <h2>Favorites</h2>
      <p>Check out your favorite recipes:</p>
      <FavoritesList />
      <hr />
      <h2>Recommendations</h2>
      <p>Here are some recipes we think you'll love:</p>
      <RecommendationsList />
    </>
  );
}

export default Home;
