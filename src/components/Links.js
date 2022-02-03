import React from "react";
import { NavLink } from "react-router-dom";
import { useColorContext } from "../context/ColorContextProvider";
const links = [
  {
    url: "/search",
    text: "🔍 All",
  },
  {
    url: "/news",
    text: "📰 News",
  },
  {
    url: "/images",
    text: "📷 Images",
  },
  {
    url: "/videos",
    text: "📺 Videos",
  },
];
const Links = () => {
  const { color } = useColorContext();
  return (
    <div className="flex sm:justify-center justify-between items-center mt-4">
      {links.map(({ url, text }) => (
        <NavLink
          to={url}
          activeClassName=" border-b-2   pb-2 animate-pulse"
          className="m-2 mb-2 "
          style={{ color: color }}
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
};

export default Links;
