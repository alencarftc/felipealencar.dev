import React from "react";

import { ReactComponent as ArrowDown } from "@icons/arrow.svg";

import "./ArrowButton.css";

const ArrowButton = ({ href, children, white = false }) => (
  <a className={`arrow-button ${white ? "white" : ""}`} href={href}>
    <button>
      <ArrowDown className="arrow-button__image" />
      <span className="arrow-button__content">{children}</span>
    </button>
  </a>
);

export default ArrowButton;
