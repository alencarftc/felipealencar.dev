import React from "react";

import ArrowDown from "@images/arrow.svg";

import "./ArrowButton.css";

const ArrowButton = ({ href, children, white = false }) => (
  <a className={`arrow-button ${white ? "white" : ""}`} href={href}>
    <button>
      <img className="arrow-button__image" src={ArrowDown} alt="Arrow down" />
      <span className="arrow-button__content">{children}</span>
    </button>
  </a>
);

export default ArrowButton;
