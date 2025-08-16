import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function AddRecipeForm({ setRecipes }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
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

    if (!steps.trim()) {
      newErrors.steps = "Preparation steps are required.";
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

      // ✅ Create new recipe object
      const newRecipe = {
        id: Date.now(), // unique ID
        title,
        ingredients: ingredients
          .split("\n")
          .filter((line) => line.trim() !== ""),
        steps: steps.split("\n").filter((line) => line.trim() !== ""),
        summary: `A quick recipe for ${title}`, // placeholder summary
        image: "https://placehold.co/300", // placeholder image
      };

      // ✅ Add to recipe list
      setRecipes((prev) => [...prev, newRecipe]);

      // Reset form
      setTitle("");
      setIngredients("");
      setSteps("");
    }
  };

  return (
    <>
      <Header />
      <main className="p-4">
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
              className="w-full p-2 md:p-1 border rounded shadow"
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
              className="w-full p-2 border rounded"
            ></textarea>
            {errors.ingredients && (
              <p className="text-red-600">{errors.ingredients}</p>
            )}
          </div>

          {/* Steps */}
          <div>
            <label htmlFor="steps" className="block font-medium">
              Preparation Steps (one per line):
            </label>
            <textarea
              id="steps"
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              className="w-full p-2 border rounded"
            ></textarea>
            {errors.steps && <p className="text-red-600">{errors.steps}</p>}
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
    </>
  );
}

export default AddRecipeForm;
