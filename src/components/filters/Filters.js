import { useState, useEffect } from "react";
import { horseData } from "../../pages/api/horsedata";
import HorseProducts from "../listingPage/HorseProducts";
import EditListing from "../layout/editListingLayout";
import result from "../../pages/api/horsedata";

import ShoppingList from "./TestFilters";

const products = [
  { name: "Product 1", category: "Category A", price: 10 },
  { name: "Product 2", category: "Category A", price: 15 },
  { name: "Product 3", category: "Category B", price: 20 },
  { name: "Product 4", category: "Category B", price: 25 },
  { name: "Product 5", category: "Category C", price: 30 },
  { name: "Product 6", category: "Category C", price: 35 },
];

const countBy = (arr, key) =>
  arr.reduce((count, item) => {
    const value = item[key];
    count[value] = (count[value] || 0) + 1;
    return count;
  }, {});

const Filters = () => {
  const [horseItems, setHorseItems] = useState(horseData);
  const [isActive, setActive] = useState("");

  function singleListing() {
    setActive(!isActive);
  }

  const [categoryFilters, setCategoryFilters] = useState([]);
  const [priceFilters, setPriceFilters] = useState([]);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    if (e.target.checked) {
      setCategoryFilters([...categoryFilters, category]);
    } else {
      setCategoryFilters(categoryFilters.filter((c) => c !== category));
    }
  };

  const handlePriceChange = (e) => {
    const price = parseInt(e.target.value);
    if (e.target.checked) {
      setPriceFilters([...priceFilters, price]);
    } else {
      setPriceFilters(priceFilters.filter((p) => p !== price));
    }
  };

  const filteredProducts = products.filter((product) => {
    if (
      categoryFilters.length > 0 &&
      !categoryFilters.includes(product.category)
    ) {
      return false;
    }
    if (priceFilters.length > 0 && !priceFilters.includes(product.price)) {
      return false;
    }
    return true;
  });

  let props = {
    horseItems: filteredProducts,
    isActive: isActive,
  };

  const categoryCounts = countBy(products, "category");
  const priceCounts = countBy(products, "price");

  return (
    <div>
      <EditListing active={singleListing} />

      <div className="flex-wrapper">
        <div className="filters-wrapper">
          <div className="filters-section filters-title">
            Sort by:
            <button
              className="sortBy"
              onClick={() =>
                setHorseItems([...horseItems].sort((a, b) => a.price - b.price))
              }
            >
              Price low to high
            </button>
            <button
              className="sortBy"
              onClick={() =>
                setHorseItems([...horseItems].sort((a, b) => b.price - a.price))
              }
            >
              Price high to low
            </button>
          </div>
          <div className="filters-section filters-title">
            <div>
              <h3>Category</h3>
              {Object.keys(categoryCounts).map((category, index) => (
                <label key={index}>
                  <input
                    type="checkbox"
                    value={category}
                    onChange={handleCategoryChange}
                    checked={categoryFilters.includes(category)}
                  />
                  {category} ({categoryCounts[category]})
                </label>
              ))}
            </div>
          </div>
          <div>
            <h3>Price</h3>
            {Object.keys(priceCounts).map((price, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  value={price}
                  onChange={handlePriceChange}
                  checked={priceFilters.includes(parseInt(price))}
                />
                ${price} ({priceCounts[price]})
              </label>
            ))}
          </div>

          <div className="filters-section filters-title">Price</div>
          <div className="filters-section filters-title"></div>
        </div>
        <HorseProducts {...props} />
      </div>
    </div>
  );
};

export default Filters;
