import "./SearchBar.css";
import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    onSubmit(term);
  };

  const handleChange = (evt) => {
    setTerm(evt.target.value);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>What are we looking for?</label>
        <input
          value={term}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default SearchBar;
