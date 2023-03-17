import { useEffect, useState, createContext } from "react";

export const MenuContext = createContext(null);

const MenuProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const close = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [open]);

  return (
    <MenuContext.Provider value={{ open, close }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
