import { createContext, useContext, useState } from "react";

const ColorContext = createContext();

export const ColorContextProvider = ({ children }) => {
  const [color, setColor] = useState("#ADEFD1");
  const [bgColor, setBgColor] = useState("#00203F");
  return (
    <ColorContext.Provider value={{ color, setColor, bgColor, setBgColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColorContext = () => useContext(ColorContext);
