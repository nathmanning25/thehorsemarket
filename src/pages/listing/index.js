import Link from "next/link";
import { useState } from "react";
import Back from "../../components/back";
import EditListing from "../../components/listingPage/editListingLayout";
import ListProducts from "../../components/listingPage/listProducts";
import { horseData } from "../api/horsedata";

const Horse = () => {
  const [horseItems, setHorseItems] = useState(horseData);
  const [isActive, setActive] = useState("");

  const ToggleLayout3Items = () => {
    setActive(!isActive);
  };

  return (
    <div>
      <div className="container">
        <Back />

        <h1>All Horses</h1>
        <EditListing ToggleLayout3Items={ToggleLayout3Items} />

        <div className="flex-wrapper">
          <div className="filters-wrapper">
            <div className="filters-section filters-title">
              Sort by:
              <button
                className="sortBy"
                onClick={() =>
                  setHorseItems(
                    [...horseItems].sort((a, b) => a.price - b.price)
                  )
                }
              >
                Price low to high
              </button>
              <button
                className="sortBy"
                onClick={() =>
                  setHorseItems(
                    [...horseItems].sort((a, b) => b.price - a.price)
                  )
                }
              >
                Price high to low
              </button>
            </div>
            <div className="filters-section filters-title">
              Breed {horseData[0].length}
            </div>
            <div className="filters-section filters-title">Price</div>
            <div className="filters-section filters-title">Gender</div>
          </div>

          <div
            className={
              isActive
                ? "horse-listing__card flex-grow flex-item"
                : "horse-listing "
            }
          >
            {horseItems.map((horse) => (
              <Link
                href={`listing/${horse.id}`}
                key={horse.id}
                className={
                  isActive
                    ? "one-item-layout-listing"
                    : "horse-listing__card flex-grow flex-item"
                }
              >
                <div className="placeholder-img">250px</div>
                <div className="horse-listing__card--description">
                  <h3>Horsename: {horse.name}</h3>
                  <p className="description">
                    {isActive ? horse.description : ""}
                  </p>
                  <p>Breed: {horse.breed}</p>
                  <p>Price: £{horse.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Horse;
