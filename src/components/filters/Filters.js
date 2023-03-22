import React from "react";
import { useState } from "react";
import HorseProducts from "../listingPage/HorseProducts";
import EditListing from "../layout/editListingLayout";

const Filters = (props) => {
  const [horseItems, setHorseItems] = useState(props.horseData);
  const [isActive, setActive] = useState("");

  const ToggleLayout3Items = () => {
    setActive(!isActive);
  };

  return (
    <div>
      <EditListing toggleListings={isActive} />
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
        <HorseProducts data={horseItems} />
      </div>
    </div>
  );
};

export default Filters;
