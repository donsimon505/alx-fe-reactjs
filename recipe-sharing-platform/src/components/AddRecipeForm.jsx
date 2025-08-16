import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function AddRecipeForm() {
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

      // Example: Log the new recipe
      console.log({
        title,
        ingredients: ingredients.split("\n"),
        steps: steps.split("\n"),
      });

      // Reset form
      setTitle("");
      setIngredients("");
      setSteps("");
    }
  };

  return (
    <>
      <Header />
      <main>
        <h1>Add a New Recipe</h1>

        {submitted && <p>Recipe submitted successfully!</p>}

        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div>
            <label htmlFor="title">Recipe Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {errors.title && <p>{errors.title}</p>}
          </div>

          {/* Ingredients */}
          <div>
            <label htmlFor="ingredients">Ingredients (one per line):</label>
            <textarea
              id="ingredients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            ></textarea>
            {errors.ingredients && <p>{errors.ingredients}</p>}
          </div>

          {/* Steps */}
          <div>
            <label htmlFor="steps">Preparation Steps (one per line):</label>
            <textarea
              id="steps"
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
            ></textarea>
            {errors.steps && <p>{errors.steps}</p>}
          </div>

          <button type="submit">Submit Recipe</button>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default AddRecipeForm;
