import React from "react";

import "./Hamburger.css";

const Hamburger = ({ open, onOpen }) => (
  <button
    aria-label="Toggle Menu"
    className={`hamburger ${open ? "open" : ""}`}
    onClick={onOpen}
  >
    <div className="hamburger__button">
      <span className="hamburger__line"></span>
      <span className="hamburger__line"></span>
      <span className="hamburger__line"></span>
    </div>
  </button>
);

export default Hamburger;
