import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import RecipeDetails from "./components/RecipeDetails";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>Recipe Sharing Application</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
