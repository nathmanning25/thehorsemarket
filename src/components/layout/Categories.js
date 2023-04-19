import React from "react";
import { useState } from "react";
import { horseData } from "../../pages/api/horsedata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function MyComponent() {
  const data = [
    "British Warmblood",
    "Cob",
    "Colt",
    "Riding Pony",
    "Summer Breeze",
    "Selle Francais",
    "Colt",
    "Riding Pony",
    "Summer Breeze",
    "Selle Francais",
    "British Warmblood",
    "Cob",
    "Colt",
    "Riding Pony",
    "Summer Breeze",
    "Selle Francais",
    "Colt",
    "Riding Pony",
    "Summer Breeze",
    "Selle Francais",
    "British Warmblood",
    "Cob",
    "Colt",
    "Riding Pony",
    "Summer Breeze",
    "Selle Francais",
    "Colt",
    "Riding Pony",
    "Summer Breeze",
    "Selle Francais",
  ];

  return (
    <div>
      {data.map((item) => (
        <p className="column-item" key={item}>
          {item}
        </p>
      ))}
    </div>
  );
}

const Categories = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = () => {
    const id = setTimeout(() => {
      setShowDropdown(true);
    }, 300); // Set delay to 500 milliseconds
    setTimeoutId(id);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutId); // Clear any existing timeouts
    const id = setTimeout(() => {
      setShowDropdown(false);
    }, 500); // Set delay to 500 milliseconds
    setTimeoutId(id);
  };
  return (
    <div>
      <div className="catergory-wrapper">
        <ul className="catergory-menu">
          <li className="catergory-menu__links" onMouseEnter={handleMouseEnter}>
            Horses
            <FontAwesomeIcon icon={faChevronRight} className="chev-right" />
          </li>
          <li className="catergory-menu__links">
            Horse boxes & trailers
            <FontAwesomeIcon icon={faChevronRight} className="chev-right" />
          </li>
          <li className="catergory-menu__links">
            Services
            <FontAwesomeIcon icon={faChevronRight} className="chev-right" />
          </li>
        </ul>
        <div className="inner-menu" onMouseLeave={handleMouseLeave}>
          {showDropdown && <MyComponent />}
        </div>
      </div>
    </div>
  );
};

export default Categories;
