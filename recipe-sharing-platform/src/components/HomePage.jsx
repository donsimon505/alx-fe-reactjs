import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data.json")
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
    <>
      <Header />
      <main>
        <section>
          {recipes.map((recipe) => (
            <article
              key={recipe.id}
              className="p-3 rounded shadow hover:shadow-md"
            >
              <img src={recipe.image} alt={recipe.title} />
              <h2 className="text-lg">{recipe.title}</h2>
              <p className="text-base">{recipe.summary}</p>
              <a href={`/recipe/${recipe.id}`} className="text-sm">
                View Recipe
              </a>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
