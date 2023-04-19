import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import Categories from "./Categories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faHeart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const openModal1 = () => {
    setShowModal1(true);
  };

  const closeModal1 = () => {
    setShowModal1(false);
  };

  const openModal2 = () => {
    setShowModal1(false);

    setShowModal2(true);
  };

  const closeModal2 = () => {
    setShowModal2(false);
  };

  const openModalSignIn = () => {
    setShowModal2(false);

    setShowModal1(true);
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
                    <p onClick={openModal1}>My account</p>
                    <Modal showModal={showModal1} closeModal={closeModal1}>
                      <h2>Sign in</h2>
                      <p>Enter your login details here:</p>

                      <div className="column-wrap">
                        <div className="column">
                          <form className="form">
                            <label>Email Address:</label>
                            <input type="input" className="form__input"></input>
                            <label>Password:</label>
                            <input type="input" className="form__input"></input>
                            <button className="form__submit">Sign in</button>
                          </form>
                          <p>Forgot your password?</p>
                        </div>
                        <div className="column">
                          <p>New to theHorseMarket?</p>
                        </div>
                      </div>

                      <h2>Not registered? Create an account now</h2>
                      <button onClick={openModal2}>Open Modal 2</button>
                    </Modal>
                    <Modal showModal={showModal2} closeModal={closeModal2}>
                      <h2>new to theHorseMarket? Register here:</h2>
                      <p>Create an account at the #1 horsey market</p>
                      <button onClick={openModalSignIn}>Open Modal 1</button>
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
