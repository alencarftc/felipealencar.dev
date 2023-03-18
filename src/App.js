import React from "react";

import Home from "@pages/Home";
import { ColorProvider } from "@providers/ColorContext";
import MenuProvider from "@providers/MenuContext";

function App() {
  return (
    <div id="app">
      <ColorProvider>
        <MenuProvider>
          <Home />
        </MenuProvider>
      </ColorProvider>
    </div>
  );
}

export default App;
