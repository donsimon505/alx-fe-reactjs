import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(new URL("../data.json", import.meta.url))
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load recipe");
        }
        return response.json();
      })
      .then((data) => {
        const selectedRecipe = data.find((r) => r.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch((error) => console.error(error));
  }, [id]);

  if (!recipe) {
    return <p>Loading recipe...</p>;
  }

  return (
    <>
      <Header />
      <main>
        <article>
          <h1 className="text-lg">{recipe.title}</h1>
          <img src={recipe.image} alt={recipe.title} />
          <p>{recipe.summary}</p>

          <section className="p-5 bg-slate-200 shadow">
            <h2 className="font-bold">Ingredients</h2>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2>Instructions</h2>
            <ol>
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}

export default RecipeDetail;
