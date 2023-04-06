import { useState } from "react";
import { horseData } from "../../pages/api/horsedata";
import HorseProducts from "../listingPage/HorseProducts";
import EditListing from "../layout/editListingLayout";
import breedCount from "../../pages/api/horsedata";
import CheckboxFilter from "../testComponents/TestFilters";
import result from "../../pages/api/horsedata";

const Filters = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
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
          <div className="filters-section filters-title">
            Breed
            <div>
              <form className="filters-checkbox">
                {result.map((breed) => {
                  return (
                    <div key="x">
                      <input
                        type="checkbox"
                        value={breed.name}
                        onClick={() =>
                          setHorseItems(
                            [...horseItems].filter(
                              (horseData) => horseData.breed === breed.name
                            )
                          )
                        }
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
        {/*  <CheckboxFilter /> */}
      </div>
    </div>
  );
};

export default Filters;
