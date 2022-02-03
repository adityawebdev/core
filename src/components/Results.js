import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { useResultContext } from "../context/ResultContextProvider";
import Loading from "./Loading";
import { useColorContext } from "../context/ColorContextProvider";

const Results = () => {
  const { color } = useColorContext();
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();
  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === "/videos") {
        getResults(`/search/q=${searchTerm} videos`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=40`);
      }
    }
  }, [searchTerm, location.pathname]);
  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.map(({ link, title }, index) => (
            <div key={index} className="w-full md:w-2/5">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm " style={{ color: color }}>
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p
                  className="text-lg hover:underline  "
                  style={{ color: color }}
                >
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
    case "/images":
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results?.map(({ image, link: { href, title } }, index) => (
            <a
              className="sm:p-3 p-5"
              href={href}
              key={index}
              target="_blank"
              rel="noreferrer"
            >
              <img src={image?.src} alt={title} loading="lazy" />
              <p
                className="break-words w-36 text-sm mt-2 "
                style={{ color: color }}
              >
                {title}
              </p>
            </a>
          ))}
        </div>
      );
    case "/news":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56 items-center">
          {results?.map(({ links, title, source, id }) => (
            <div key={id} className="w-full md:w-2/5">
              <a
                href={links?.[0].href}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                <p className="text-lg  " style={{ color: color }}>
                  {title}
                </p>
                <div className="flex gap-4 " style={{ color: color }}>
                  <a href={source?.href} target="_blank">
                    {source?.href}
                  </a>
                </div>
              </a>
            </div>
          ))}
        </div>
      );
    case "/videos":
      return (
        <div className="flex flex-wrap">
          {results.map((video, index) => (
            <div key={index} className="p-2">
              {video.additional_links?.[0]?.href && (
                <ReactPlayer
                  url={video.additional_links?.[0].href}
                  controls
                  width="355px"
                  height="200px"
                />
              )}
            </div>
          ))}
        </div>
      );
    default:
      return "ERROR!";
  }
};

export default Results;
