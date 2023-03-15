import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ColorContext = createContext(null);

export function ColorProvider({ children }) {
  const [colorMode, setColorMode] = useState(
    localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );

  const toggleColorMode = useCallback(
    () => (colorMode === "dark" ? "light" : "dark"),
    [colorMode]
  );

  useEffect(() => {
    const newColorMode = toggleColorMode();
    document.documentElement.setAttribute("data-theme", newColorMode);
    localStorage.setItem("theme", newColorMode);
  }, [colorMode, toggleColorMode]);

  const handleOnColorChange = () => {
    setColorMode(toggleColorMode());
  };

  return (
    <ColorContext.Provider value={{ colorMode, handleOnColorChange }}>
      {children}
    </ColorContext.Provider>
  );
}
