import React, { useState } from "react";

function Banner() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="banner">
      <div class="container">
        <div className="banner-wrapper">
          <p>PROMO: Free listings! Create an account at theHorseMarket</p>
          <button className="close-button" onClick={() => setIsOpen(false)}>
            <span aria-hidden="true">&times;</span>
            <span className="sr-only">Close</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
