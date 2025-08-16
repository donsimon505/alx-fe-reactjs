import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function HomePage({ recipes }) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 px-[20px] sm:px-[20px] lg:px-[100px] md:px-[50px] py-[30px] md:py-[40px] bg-sky-50">
          <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {recipes.map((recipe) => (
              <article
                key={recipe.id}
                className="p-10 rounded shadow hover:shadow-md flex flex-col items-center justify-center text-center space-y-[11px]
                 bg-white"
              >
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="rounded-full w-28"
                />
                <h2 className="text-xl font-semibold pt-2">{recipe.title}</h2>
                {recipe.summary && (
                  <p className="text-sm text-gray-700">{recipe.summary}</p>
                )}
                <Link
                  to={`/recipe/${recipe.id}`}
                  className="text-blue-500 text-sm hover:underline"
                >
                  View Recipe
                </Link>
              </article>
            ))}
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
