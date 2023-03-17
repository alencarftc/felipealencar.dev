import React from "react";

import "./Switch.css";

function Switch({ onToggle }) {
  return (
    <label className="switch" onChange={() => onToggle()}>
      <input type="checkbox" />
      <span className="slider round"></span>
    </label>
  );
}

export default Switch;
