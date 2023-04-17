import React from "react";
import { useState } from "react";
import Categories from "./Categories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faHeart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = () => {
    const id = setTimeout(() => {
      setShowDropdown(true);
    }, 10); // Set delay to 500 milliseconds
    setTimeoutId(id);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutId); // Clear any existing timeouts
    const id = setTimeout(() => {
      setShowDropdown(false);
    }, 1000000); // Set delay to 500 milliseconds
    setTimeoutId(id);
  };

  return (
    <div>
      <div className="nav">
        <div className="container">
          <div className="nav-wrapper">
            <div className="nav-left">
              <h1 className="nav-wrapper__brand">theHorseMarket</h1>
            </div>
            <div className="nav-right">
              <p>Register</p>
              <button className="navPlaceAd">Place an ad</button>
            </div>
          </div>
        </div>

        <div className="navbar" onMouseLeave={handleMouseLeave}>
          <ul className="navbar-menu">
            <li className="navbar-menu__links">Horses</li>
            <li className="navbar-menu__links" onMouseEnter={handleMouseEnter}>
              Catergories
              <span className="icon-container">
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`chevron-icon ${showDropdown ? "up" : "down"}`}
                />
              </span>
            </li>
            <li className="navbar-menu__links">Jobs</li>
            <li className="navbar-menu__links">
              Wish List
              <FontAwesomeIcon icon={faHeart} className="heart-icon" />
            </li>
          </ul>
          {showDropdown && <Categories />}{" "}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
