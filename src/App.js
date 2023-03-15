import React from "react";

import Home from "@pages/Home";
import { ColorProvider } from "@providers/ColorContext";

function App() {
  return (
    <div id="app">
      <ColorProvider>
        <Home />
      </ColorProvider>
    </div>
  );
}

export default App;
