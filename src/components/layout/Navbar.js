import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import Categories from "./Categories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faHeart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleMouseEnter = () => {
    const id = setTimeout(() => {
      setShowDropdown(true);
    }, 200); // Set delay to 500 milliseconds
    setTimeoutId(id);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutId); // Clear any existing timeouts
    const id = setTimeout(() => {
      setShowDropdown(false);
    }, 900); // Set delay to 500 milliseconds
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
        <div onMouseLeave={handleMouseLeave}>
          <div className="navbar">
            <div className="navbar-menu">
              <ul className="navbar-menu">
                <li className="navbar-menu__links">Horses</li>
                <li
                  className="navbar-menu__links"
                  onMouseEnter={handleMouseEnter}
                >
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
            </div>
            <div className="navbar-menu">
              <ul className="navbar-menu">
                <div className="pull-right">
                  <li className="navbar-menu__links">Saved</li>
                  <li className="navbar-menu__links">Basket</li>
                  <li className="navbar-menu__links">
                    <p onClick={openModal}>My account</p>
                    <Modal showModal={showModal} closeModal={closeModal}>
                      <h2>Modal Title</h2>
                      <p>Modal content goes here...</p>
                    </Modal>
                  </li>
                </div>
              </ul>
            </div>
          </div>
          {showDropdown && <Categories />}{" "}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
