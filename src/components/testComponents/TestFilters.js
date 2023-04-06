import React, { useState } from "react";

const items = [
  { name: "Item 1", category: "A" },
  { name: "Item 2", category: "B" },
  { name: "Item 3", category: "A" },
  { name: "Item 4", category: "C" },
];

const CheckboxFilter = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const filteredItems = selectedCategories.length
    ? items.filter((item) => selectedCategories.includes(item.category))
    : items;

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            value="A"
            checked={selectedCategories.includes("A")}
            onChange={handleCategoryChange}
          />
          Category A
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            value="B"
            checked={selectedCategories.includes("B")}
            onChange={handleCategoryChange}
          />
          Category B
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            value="C"
            checked={selectedCategories.includes("C")}
            onChange={handleCategoryChange}
          />
          Category C
        </label>
      </div>
      <ul>
        {filteredItems.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CheckboxFilter;
