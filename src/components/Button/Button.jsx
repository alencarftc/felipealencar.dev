import React from "react";

import "./Button.css";

const Button = ({ disabled = false, type = "button", children }) => (
  <button
    className={`button button-${disabled ? "disabled" : "abled"}`}
    type={type}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
