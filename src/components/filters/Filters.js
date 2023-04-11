import { useState } from "react";
import { horseData } from "../../pages/api/horsedata";
import HorseProducts from "../listingPage/HorseProducts";
import EditListing from "../layout/editListingLayout";
import result from "../../pages/api/horsedata";
import List from "./TestFilters";

const Filters = () => {
  const [horseItems, setHorseItems] = useState(horseData);
  const [isChecked, setIsChecked] = useState(true);
  const [isActive, setActive] = useState("");

  function singleListing() {
    setActive(!isActive);
  }

  let handleCheckbox = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      setHorseItems(horseData);
    }
  };

  const handleCatergoryChange = (e) => {
    const category = e.target.value;
    setHorseItems(
      [...horseItems].filter((horseData) => horseData.breed === category)
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
                    <div className="filters-checkbox" key="x">
                      <input
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
          <div className="filters-section filters-title">Gender</div>
        </div>
        <HorseProducts {...props} />
      </div>
    </div>
  );
};

export default Filters;
