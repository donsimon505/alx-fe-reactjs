import { useState } from "react";

function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSearch(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
