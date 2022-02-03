import React from "react";
import { Rings } from "react-loader-spinner";
import { useColorContext } from "../context/ColorContextProvider";
const Loading = () => {
  const { color } = useColorContext();
  return (
    <div className="flex justify-center items-center">
      <Rings color={color} height={80} width={80} />
    </div>
  );
};

export default Loading;
