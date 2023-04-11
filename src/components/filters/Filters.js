import { useState, useEffect } from "react";
import { horseData } from "../../pages/api/horsedata";
import HorseProducts from "../listingPage/HorseProducts";
import EditListing from "../layout/editListingLayout";
import result from "../../pages/api/horsedata";

import ShoppingList from "./TestFilters";

const Filters = () => {
  const [horseItems, setHorseItems] = useState(horseData);
  const [isChecked, setIsChecked] = useState(true);
  const [isCheckedPrice, setIsCheckedPrice] = useState(true);

  const [isActive, setActive] = useState("");

  useEffect(() => {
    const checkboxes = document.querySelectorAll(".checkbox");
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("click", (e) => {
        if (e.target.checked) {
          checkboxes.forEach((otherCheckbox) => {
            if (otherCheckbox !== checkbox) {
              otherCheckbox.disabled = true;
            }
          });
        } else {
          checkboxes.forEach((otherCheckbox) => {
            if (otherCheckbox !== checkbox) {
              otherCheckbox.disabled = false;
            }
          });
        }
      });
    });
  });

  function singleListing() {
    setActive(!isActive);
  }

  let handleCheckbox = () => {
    setIsChecked(!isChecked);

    if (!isChecked) {
      setHorseItems(horseData);
    }
  };

  let handleRemovePrice = () => {
    setIsCheckedPrice(!isCheckedPrice);

    if (!isCheckedPrice) {
      setHorseItems(
        [...horseData].filter((item) => item.price >= 0 && item.price <= 500)
      );
    }
  };

  const handleCatergoryChange = (e) => {
    const breed = e.target.value;
    setHorseItems(
      [...horseItems].filter((horseData) => horseData.breed === breed)
    );
  };

  let props = {
    horseItems: horseItems,
    isActive: isActive,
  };

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
            <b>Breed</b>
            <div>
              <form>
                {result.map((breed) => {
                  return (
                    <div className="filters-checkbox" key={breed.name}>
                      <input
                        className="checkbox"
                        type="checkbox"
                        value={breed.name}
                        onCheck={isChecked}
                        onChange={handleCheckbox}
                        onClick={handleCatergoryChange}
                      />
                      {breed.name} - ({breed.count})
                    </div>
                  );
                })}
              </form>
            </div>
          </div>

          <div className="filters-section filters-title">Price</div>
          <div className="filters-section filters-title">
            Gender
            <form>
              <input
                type="checkbox"
                className=""
                onCheck={isCheckedPrice}
                onChange={handleRemovePrice}
                onClick={() =>
                  setHorseItems(
                    [...horseItems].filter(
                      (item) => item.price >= 0 && item.price <= 500
                    )
                  )
                }
              ></input>
              Male
              <input
                type="checkbox"
                className=""
                onCheck={isCheckedPrice}
                onChange={handleRemovePrice}
                onClick={() =>
                  setHorseItems(
                    [...horseItems].filter(
                      (item) => item.price >= 0 && item.price <= 500
                    )
                  )
                }
              ></input>
              Female
            </form>
          </div>
        </div>
        <HorseProducts {...props} />
        <ShoppingList />
      </div>
    </div>
  );
};

export default Filters;
