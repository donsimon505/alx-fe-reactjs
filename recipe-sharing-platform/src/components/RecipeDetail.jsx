import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function RecipeDetail({ recipes }) {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // 1. First check if recipe exists in state (from App.jsx)
    const localRecipe = recipes.find((r) => String(r.id) === id);

    if (localRecipe) {
      setRecipe(localRecipe);
    } else {
      // 2. Otherwise fall back to data.json
      fetch(new URL("../data.json", import.meta.url))
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to load recipe");
          }
          return response.json();
        })
        .then((data) => {
          const selectedRecipe = data.find((r) => String(r.id) === id);
          setRecipe(selectedRecipe);
        })
        .catch((error) => console.error(error));
    }
  }, [id, recipes]);

  if (!recipe) {
    return <p className="text-center py-10">Loading recipe...</p>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="bg-sky-50 flex-1 px-5 sm:px-6 md:px-12 lg:px-24 py-8 md:py-10">
        <article>
          <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-14 shadow-sm rounded-2xl">
            {/* Top Section: Image + Title + Summary */}
            <div
              className="flex flex-row flex-wrap md:flex-nowrap space-y-4 md:space-x-6 md:space-y-0 
              justify-center md:justify-start items-center pb-6 text-center md:text-left"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="rounded-full w-24 h-24 object-cover"
              />
              <div>
                <h1 className="text-xl font-bold">{recipe.title}</h1>
                {recipe.summary && (
                  <p className="text-gray-600 text-sm mt-1">{recipe.summary}</p>
                )}
              </div>
            </div>

            {/* Ingredients + Instructions Side by Side */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 text-center md:text-left">
              {/* Ingredients */}
              {recipe.ingredients && (
                <section className="flex-1 p-5 bg-emerald-500 text-white shadow rounded-md">
                  <h2 className="font-bold text-lg mb-3">Ingredients</h2>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Instructions */}
              {recipe.instructions && (
                <section className="flex-1 p-5 bg-sky-500 text-white shadow rounded-md">
                  <h2 className="font-bold text-lg mb-3">Instructions</h2>
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    {recipe.instructions.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </section>
              )}
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}

export default RecipeDetail;
