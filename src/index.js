import App from "App";
import React from "react";
import ReactDOM from "react-dom/client";
import ReactGA from "react-ga";

import "./assets/css/normalize.css";
import "./assets/css/reset.css";
import "animate.css";

import "./index.css";

const TRACKING_ID = "G-CK1BT2XCWN";

ReactGA.initialize(TRACKING_ID);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
