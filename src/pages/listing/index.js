import Link from "next/link";
import { useState } from "react";
import Back from "../../components/back";
import EditListing from "../../components/listingPage/editListingLayout";
import ListProducts from "../../components/listingPage/listProducts";
import { horseData } from "../api/horsedata";

const Horse = () => {
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
        <div>
          <div
            className={
              isActive
                ? "horse-listing__card flex-grow flex-item"
                : "horse-listing "
            }
          >
            {horseData.map((horse) => (
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
                  <h3>{horse.name}</h3>
                  <p className="description">
                    {isActive ? horse.description : ""}
                  </p>
                  <p>{horse.breed}</p>
                  <p>{horse.price}</p>
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
