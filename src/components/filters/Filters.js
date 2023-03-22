import { useState } from "react";
import { horseData } from "../../pages/api/horsedata";
import HorseProducts from "../listingPage/HorseProducts";
import EditListing from "../layout/editListingLayout";

const Filters = () => {
  const [horseItems, setHorseItems] = useState(horseData);
  const [isActive, setActive] = useState("");

  function singleListing() {
    setActive(!isActive);
  }

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
          <div className="filters-section filters-title">Breed</div>
          <div className="filters-section filters-title">Price</div>
          <div className="filters-section filters-title">Gender</div>
        </div>
        <HorseProducts {...props} />
      </div>
    </div>
  );
};

export default Filters;