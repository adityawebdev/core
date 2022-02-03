import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useResultContext } from "../context/ResultContextProvider";
import Links from "./Links";
import { useColorContext } from "../context/ColorContextProvider";

const Search = () => {
  const { color, bgColor } = useColorContext();
  const [text, setText] = useState("");
  const { setSearchTerm } = useResultContext();
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);
  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
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
          className="absolute top-1.5 right-4 text-xl"
          onClick={() => setText(" ")}
          style={{ color: color }}
        >
          X
        </button>
      )}
      <Links />
    </div>
  );
};

export default Search;
