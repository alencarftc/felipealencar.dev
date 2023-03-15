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
    document.documentElement.setAttribute("data-theme", colorMode);
  }, []);

  const handleOnColorChange = () => {
    const newColorMode = toggleColorMode();
    setColorMode(newColorMode);
    document.documentElement.setAttribute("data-theme", newColorMode);
    localStorage.setItem("theme", newColorMode);
  };

  return (
    <ColorContext.Provider value={{ colorMode, handleOnColorChange }}>
      {children}
    </ColorContext.Provider>
  );
}
