import React from "react";
import { useColorContext } from "../context/ColorContextProvider";
const Footer = () => {
  const { color, bgColor } = useColorContext();
  return (
    <div
      className="text-center p-10 mt-10 border-t"
      style={{ color: color, borderColor: color, backgroundColor: bgColor }}
    >
      <h1>2022 Core Inc.</h1>
    </div>
  );
};

export default Footer;
