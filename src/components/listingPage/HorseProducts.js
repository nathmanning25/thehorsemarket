import React from "react";
import { useState } from "react";
import Link from "next/link";

const HorseProducts = (props) => {
  const [isActive, setActive] = useState("");

  const ToggleLayout3Items = () => {
    setActive(!isActive);
  };
  return (
    <div>
      {props.data.map((horse) => (
        <Link
          href={`listing/${horse.id}`}
          key={horse.id}
          className="one-item-layout-listing"
        >
          <div className="placeholder-img">250px</div>
          <div className="horse-listing__card--description">
            <h3>Horsename: {horse.name}</h3>
            <p className="description">{horse.description}</p>
            <p>Breed: {horse.breed}</p>
            <p>Price: £{horse.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HorseProducts;
