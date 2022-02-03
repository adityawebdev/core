import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useDebounce } from "use-debounce";
import { useResultContext } from "../context/ResultContextProvider";
import Links from "./Links";
import { useColorContext } from "../context/ColorContextProvider";
const Navbar = () => {
  const { color, setColor, bgColor, setBgColor } = useColorContext();
  const { setSearchTerm } = useResultContext();
  const [text, setText] = useState("");
  const [debouncedValue] = useDebounce(text, 300);

  const t1 = "#ADEFD1";
  const t2 = "#141a16";
  const t3 = "#FCC5CC";
  const t4 = "#fcc729";
  const b1 = "#00203F";
  const b2 = "#ec8b5e";
  const b3 = "#CC313D";
  const b4 = "#337def";

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);
  return (
    <div
      className="p-5 pb-2 flex flex-col flex-wrap md:flex-row sm:justify-between justify-center items-center border-b  "
      style={{ borderColor: color, backgroundColor: bgColor }}
    >
      <div className="flex justify-between items center space-x-5 md:-mt-24">
        <Link to="/">
          {" "}
          <p
            className="text-2xl  rounded-md font-bold   py-1 px-2"
            style={{ color: color, backgroundColor: bgColor }}
          >
            <span className=" font-mono font-light ">core</span>
          </p>
        </Link>
      </div>
      <div className=" mt-3">
        <input
          value={text}
          type="text"
          className="sm:w-96 w-80 h-10 border  rounded-full shadow-sm outline-none p-4    hover:shadow-lg"
          placeholder="Search Core or Type URL"
          onChange={(e) => setText(e.target.value)}
          style={{ color: color, borderColor: color, backgroundColor: bgColor }}
        />
        {!text && (
          <button
            type="button"
            className="text-xl -ml-6"
            onClick={() => setText(" ")}
            style={{ color: color }}
          >
            X
          </button>
        )}
        <Links />
      </div>
      <div className="flex justify-center items-center md:justify-around md:-mt-24 bg-white rounded-full">
        <button
          type="button"
          onClick={() => {
            setColor(t1);
            setBgColor(b1);
          }}
          className="rounded-full w-4 h-4 m-1"
          style={{ backgroundColor: b1 }}
        />
        <button
          type="button"
          onClick={() => {
            setColor(t2);
            setBgColor(b2);
          }}
          className="rounded-full w-4 h-4 m-1"
          style={{ backgroundColor: b2 }}
        />
        <button
          type="button"
          onClick={() => {
            setColor(t3);
            setBgColor(b3);
          }}
          className="rounded-full w-4 h-4 m-1"
          style={{ backgroundColor: b3 }}
        />
        <button
          type="button"
          onClick={() => {
            setColor(t4);
            setBgColor(b4);
          }}
          className="rounded-full w-4 h-4 m-1"
          style={{ backgroundColor: b4 }}
        />
        <button
          type="button"
          onClick={() => {
            setColor(b1);
            setBgColor(t1);
          }}
          className="rounded-full w-4 h-4 m-1"
          style={{ backgroundColor: t1 }}
        />
        <button
          type="button"
          onClick={() => {
            setColor(b2);
            setBgColor(t2);
          }}
          className="rounded-full w-4 h-4 m-1"
          style={{ backgroundColor: t2 }}
        />

        <button
          type="button"
          onClick={() => {
            setColor(b3);
            setBgColor(t3);
          }}
          className="rounded-full w-4 h-4 m-1"
          style={{ backgroundColor: t3 }}
        />
        <button
          type="button"
          onClick={() => {
            setColor(b4);
            setBgColor(t4);
          }}
          className="rounded-full w-4 h-4 m-1"
          style={{ backgroundColor: t4 }}
        />
      </div>
    </div>
  );
};

export default Navbar;
