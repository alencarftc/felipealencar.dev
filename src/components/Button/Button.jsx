import React from "react";

import "./Button.css";

const Button = ({ type = "button", children }) => (
  <button className="button" type={type}>
    {children}
  </button>
);

export default Button;
