import { createContext } from "react";
import { useState } from "react";

export const HeaderStore = createContext();

export default function HeaderData({ children }) {
  const [menuToggle, setMenuToggle] = useState(false);
  const handleMenuToggle = () => {
    setMenuToggle((prev) => !prev);
  };

  return (
    <HeaderStore.Provider value={{ menuToggle, handleMenuToggle }}>
      {children}
    </HeaderStore.Provider>
  );
}
