import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [fruits, setFruits] = useState(["Banana", "Apple"]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState(false);
  const [inputValue, setInputValue] = useState("");

  // TODO: Fix adding new fruits form must work.
  // TODO: Fix 'Order' button must work.
  // NOTE: Toggling the button should reverse the order.
  // TODO: Fix filtering input must work. No button, must be case-insensitive.
  // TODO: Add remove button to each item.

  //  handle  input value
  const handleOnchange = (e) => {
    setInputValue(e.target.value);
  };

  //  handle submit fruits
  const handleSubmit = (event) => {
    event.preventDefault();

    //  check the input value
    if (inputValue) {
      setFruits([...fruits, inputValue]);
      setInputValue("");
    }
  };

  //  sort fruits
  const handleSort = () => {
    setSortOrder(!sortOrder);
    setFruits(
      fruits.sort((a, b) =>
        sortOrder ? a.localeCompare(b) : b.localeCompare(a)
      )
    );
  };

  //  search fruits
  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  //  remove fruits
  const handleRemove = (index) => {
    setFruits(fruits.filter((fruit, i) => i !== index));
  };

  return (
    <div className="container">
      <h1 className="title">Fruit List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fruit"
          placeholder="Write fruit Name"
          className="input"
          value={inputValue}
          onChange={handleOnchange}
        />
        <button type="submit" className="button">
          Add Fruit
        </button>
      </form>
      <div className="search-section">
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Search fruits"
          className="search"
        />
        <button onClick={handleSort} className="button">
          {sortOrder ? "Ascending" : "Descending"} Order
        </button>
      </div>
      <ul className="list">
        {fruits?.length ? (
          fruits
            .filter((fruit) => fruit.toLowerCase().includes(searchTerm))
            .map((fruit, index) => (
              <li key={index} className="list-item">
                {fruit}
                <button
                  onClick={() => handleRemove(index)}
                  className="button remove"
                >
                  Remove
                </button>
              </li>
            ))
        ) : (
          <h4> No fruits Found </h4>
        )}
      </ul>
    </div>
  );
};

export default App;
