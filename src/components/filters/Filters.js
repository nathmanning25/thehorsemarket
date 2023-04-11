import { useState, useEffect } from "react";
import { horseData } from "../../pages/api/horsedata";
import HorseProducts from "../listingPage/HorseProducts";
import EditListing from "../layout/editListingLayout";

const priceRanges = [
  {
    id: 1,
    value: "0-500",
  },
  {
    id: 2,
    value: "501-1000",
  },
  {
    id: 3,
    value: "1001-3000",
  },
  {
    id: 4,
    value: "3001-5000",
  },
  {
    id: 5,
    value: "5001-10000",
  },
  {
    id: 6,
    value: "10001-15000",
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

const colour = [
  {
    id: 1,
    colour: "Tan",
  },
  {
    id: 2,
    colour: "Black",
  },
  {
    id: 3,
    colour: "tan",
  },
  {
    id: 4,
    colour: "tan",
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
  const [appliedFilters, setAppliedFilters] = useState([]);

  const clearAllCheckboxes = () => {
    setCategoryFilters([]);
    setPriceFilters([]);
    setGenderFilters([]);
    setAppliedFilters([]);
  };

  const handleCategoryChange = (e) => {
    const breed = e.target.value;
    if (e.target.checked) {
      setCategoryFilters([...categoryFilters, breed]);
      setAppliedFilters([...appliedFilters, breed]);
    } else {
      setCategoryFilters(categoryFilters.filter((c) => c !== breed));
      setAppliedFilters(appliedFilters.filter((f) => f !== breed));
    }
  };

  const handlePriceChange = (e) => {
    const priceRange = e.target.value;
    if (e.target.checked) {
      setPriceFilters([...priceFilters, priceRange]);
      setAppliedFilters([...appliedFilters, priceRange]);
    } else {
      setPriceFilters(priceFilters.filter((p) => p !== priceRange));
      setAppliedFilters(appliedFilters.filter((f) => f !== priceRange));
    }
  };

  const handleGenderChange = (e) => {
    const gender = e.target.value;
    if (e.target.checked) {
      setGenderFilters([...genderFilters, gender]);
      setAppliedFilters([...appliedFilters, gender]);
    } else {
      setGenderFilters(genderFilters.filter((p) => p !== gender));
      setAppliedFilters(appliedFilters.filter((f) => f !== gender));
    }
  };

  const handleRemoveFilter = (filterValue) => {
    setAppliedFilters(appliedFilters.filter((f) => f !== filterValue));

    if (categoryFilters.includes(filterValue)) {
      setCategoryFilters(categoryFilters.filter((f) => f !== filterValue));
    } else if (priceFilters.includes(filterValue)) {
      setPriceFilters(priceFilters.filter((f) => f !== filterValue));
    } else if (genderFilters.includes(filterValue)) {
      setGenderFilters(genderFilters.filter((f) => f !== filterValue));
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
          <div>
            <div>
              <div>
                {appliedFilters.length > 0 ? (
                  <div className="filters-section filters-title">
                    <button onClick={clearAllCheckboxes}>
                      Clear All Filters
                    </button>

                    <h3>Applied Filters</h3>
                    {appliedFilters.map((filter, index) => (
                      <span className="applied-filters" key={index}>
                        {filter}
                        <span
                          className="remove-filter"
                          onClick={() => handleRemoveFilter(filter)}
                        >
                          X
                        </span>
                      </span>
                    ))}
                  </div>
                ) : (
                  <p></p>
                )}
              </div>
            </div>
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
