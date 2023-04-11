import { useState, useEffect } from "react";
import { horseData } from "../../pages/api/horsedata";
import HorseProducts from "../listingPage/HorseProducts";
import EditListing from "../layout/editListingLayout";

const priceRanges = [
  {
    id: 1,
    value: "0-15",
  },
  {
    id: 2,
    value: "15-50",
  },
  {
    id: 3,
    value: "50-500",
  },
  {
    id: 4,
    value: "500-5000",
  },
];

const gender = [
  {
    id: 1,
    value: "Male",
  },
  {
    id: 2,
    value: "Female",
  },
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
  const [genderFilters, setGenderFilters] = useState([]);

  const handleCategoryChange = (e) => {
    const breed = e.target.value;
    if (e.target.checked) {
      setCategoryFilters([...categoryFilters, breed]);
    } else {
      setCategoryFilters(categoryFilters.filter((c) => c !== breed));
    }
  };

  const handlePriceChange = (e) => {
    const priceRange = e.target.value;
    if (e.target.checked) {
      setPriceFilters([...priceFilters, priceRange]);
    } else {
      setPriceFilters(priceFilters.filter((p) => p !== priceRange));
    }
  };

  const handleGenderChange = (e) => {
    const gender = e.target.value;
    if (e.target.checked) {
      setGenderFilters([...genderFilters, gender]);
    } else {
      setGenderFilters(genderFilters.filter((p) => p !== gender));
    }
  };

  const filteredProducts = horseData.filter((product) => {
    if (
      categoryFilters.length > 0 &&
      !categoryFilters.includes(product.breed)
    ) {
      return false;
    }

    if (genderFilters.length > 0 && !genderFilters.includes(product.gender)) {
      return false;
    }

    if (
      priceFilters.length > 0 &&
      !priceFilters.some((range) => {
        const [min, max] = range.split("-");
        return (
          parseInt(product.price) >= parseInt(min) &&
          parseInt(product.price) <= parseInt(max)
        );
      })
    ) {
      return false;
    }
    return true;
  });

  let props = {
    horseItems: filteredProducts,
    isActive: isActive,
  };

  const categoryCounts = countBy(horseData, "breed");
  const priceCounts = countBy(priceRanges, "value");

  return (
    <div>
      <EditListing active={singleListing} />

      <div className="flex-wrapper">
        <div className="filters-wrapper">
          <div className="filters-section filters-title"></div>
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

          <div className="filters-section filters-title">
            <div>
              <h3>Price</h3>
              {priceRanges.map((range, index) => (
                <label key={index}>
                  <input
                    type="checkbox"
                    value={range.value}
                    onChange={handlePriceChange}
                    checked={priceFilters.includes(range.value)}
                  />
                  {range.value} ({priceCounts[range.value]})
                </label>
              ))}
            </div>
          </div>
          <div className="filters-section filters-title">
            <h3>Gender</h3>
            {gender.map((gender, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  value={gender.value}
                  onChange={handleGenderChange}
                  checked={genderFilters.includes(gender.value)}
                />
                {gender.value}
              </label>
            ))}
          </div>
        </div>
        <HorseProducts {...props} />
      </div>
    </div>
  );
};

export default Filters;
