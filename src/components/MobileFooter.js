import { CodeSlash, Home, Newspaper, Wifi } from "react-ionicons";

import { Link } from "gatsby";
import React from "react";

const MobileFooter = () => {
  return (
    <footer className="fixed bottom-4 md:hidden z-20 w-screen h-20">
      <div className="grid grid-cols-4 w-11/12 m-auto h-full bg-gray-100 rounded-xl shadow-inner border-gray-400">
        <div className="w-full h-full flex items-center">
          <Link className="m-auto" to="/">
            <Home width="32px" height="32px" />
          </Link>
        </div>
        <div className="w-full h-full flex items-center">
          <Link className="m-auto" to="/projects">
            <CodeSlash width="32px" height="32px" />
          </Link>
        </div>
        <div className="w-full h-full flex items-center">
          <Link className="m-auto" to="/blog">
            <Newspaper width="32px" height="32px" />
          </Link>
        </div>
        <div className="w-full h-full flex items-center">
          <Link className="m-auto" to="/about-me">
            <Wifi width="32px" height="32px" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default MobileFooter;
