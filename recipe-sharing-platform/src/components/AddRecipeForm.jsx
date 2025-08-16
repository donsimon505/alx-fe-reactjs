import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function AddRecipeForm({ setRecipes }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Recipe title is required.";
    }

    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    } else {
      const items = ingredients
        .split("\n")
        .filter((line) => line.trim() !== "");
      if (items.length < 2) {
        newErrors.ingredients = "Please enter at least two ingredients.";
      }
    }

    if (!instructions.trim()) {
      newErrors.instructions = "Preparation steps are required.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
    } else {
      setErrors({});
      setSubmitted(true);

      const newRecipe = {
        id: Date.now(), // unique ID
        title,
        ingredients: ingredients
          .split("\n")
          .filter((line) => line.trim() !== ""),
        instructions: instructions
          .split("\n")
          .filter((line) => line.trim() !== ""),
        summary: `A quick recipe for ${title}`,
        image: "https://placehold.co/300",
      };

      setRecipes((prev) => [...prev, newRecipe]);
      console.log(newRecipe);

      // Reset form
      setTitle("");
      setIngredients("");
      setInstructions("");
    }
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 px-[20px] sm:px-[20px] lg:px-[100px] md:px-[50px] py-[30px] md:py-[40px] bg-sky-50">
          <h1 className="text-2xl font-bold mb-4">Add a New Recipe</h1>

          {submitted && (
            <p className="text-green-600">Recipe submitted successfully!</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block font-medium">
                Recipe Title:
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 md:p-1 border rounded focus:shadow-sm"
              />
              {errors.title && <p className="text-red-600">{errors.title}</p>}
            </div>

            {/* Ingredients */}
            <div>
              <label htmlFor="ingredients" className="block font-medium">
                Ingredients (one per line):
              </label>
              <textarea
                id="ingredients"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                className="w-full p-2 border rounded focus:shadow-sm"
              ></textarea>
              {errors.ingredients && (
                <p className="text-red-600">{errors.ingredients}</p>
              )}
            </div>

            {/* Steps */}
            <div>
              <label htmlFor="instructions" className="block font-medium">
                Preparation Steps (one per line):
              </label>
              <textarea
                id="instructions"
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                className="w-full p-2 border rounded focus:shadow-sm"
              ></textarea>
              {errors.instructions && (
                <p className="text-red-600">{errors.instructions}</p>
              )}
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Submit Recipe
            </button>
          </form>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default AddRecipeForm;
