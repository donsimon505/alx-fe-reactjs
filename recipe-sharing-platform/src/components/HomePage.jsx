import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function HomePage({ recipes }) {
  return (
    <>
      <Header />
      <main>
        <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recipes.map((recipe) => (
            <article
              key={recipe.id}
              className="p-3 rounded shadow hover:shadow-md"
            >
              <img src={recipe.image} alt={recipe.title} />
              <h2 className="text-lg font-semibold">{recipe.title}</h2>
              {recipe.summary && (
                <p className="text-base text-gray-700">{recipe.summary}</p>
              )}
              <Link
                to={`/recipe/${recipe.id}`}
                className="text-blue-500 hover:underline"
              >
                View Recipe
              </Link>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
