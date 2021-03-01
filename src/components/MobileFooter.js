import {
  CodeSlash,
  Home,
  Newspaper,
  PersonCircleOutline,
} from "react-ionicons";

import { Link } from "gatsby";
import React from "react";

const MobileFooter = () => {
  return (
    <footer className="fixed bottom-4 md:hidden z-20 w-screen h-20 text-gray-900">
      <div className="grid grid-cols-4 w-11/12 m-auto h-full bg-gray-100 opacity-90 text-opacity-90 rounded-xl shadow-inner border-gray-400">
        <Link className="w-full h-full flex items-center" to="/">
          <div className="m-auto text-center">
            <Home width="32px" height="32px" cssClasses="m-auto opacity-90" />
            <label className="text-xs font-Montserrat">Home</label>
          </div>
        </Link>
        <Link className="w-full h-full flex items-center" to="/projects">
          <div className="m-auto">
            <CodeSlash
              width="32px"
              height="32px"
              cssClasses="m-auto opacity-90"
            />
            <label className="text-xs font-Montserrat">Projects</label>
          </div>
        </Link>
        <Link className="w-full h-full flex items-center" to="/blog">
          <div className="m-auto">
            <Newspaper
              width="32px"
              height="32px"
              cssClasses="m-auto opacity-90"
            />
            <label className="text-xs font-Montserrat">Blog</label>
          </div>
        </Link>
        <Link className="w-full h-full flex items-center" to="/about-me">
          <div className="m-auto">
            <PersonCircleOutline
              width="32px"
              height="32px"
              cssClasses="m-auto opacity-90"
            />
            <label className="text-xs font-Montserrat">About</label>
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default MobileFooter;
