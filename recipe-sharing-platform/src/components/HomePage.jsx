import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(new URL("../data.json", import.meta.url))
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
        <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <article
              key={recipe.id}
              className="p-3 rounded shadow hover:shadow-md"
            >
              <img src={recipe.image} alt={recipe.title} />
              <h2 className="text-lg">{recipe.title}</h2>
              <p className="text-base">{recipe.summary}</p>
              <Link to={`/recipe/${recipe.id}`}>View Recipe</Link>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
