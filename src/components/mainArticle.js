// import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

import ProfilePhoto from "../components/profilePhoto";
import React from "react";

const MainArticle = () => {
  return (
    <>
      <section className="grid md:grid-cols-2 ">
        <div className="w-full p-2 md:p-0 md:w-2/3 ml-auto mr-auto mt-3 md:mt-20">
          <ProfilePhoto />
        </div>
        <div className="w-full md:w-2/3 mr-auto mt-2 p-2 md:p-0 md:mt-20 text-gray-100 text-3xl text-center md:text-left">
          <p>
            Hey! Thanks for visiting my site! It doesn‘t do a lot yet, but feel
            free to click around and explore.
          </p>
        </div>
      </section>
    </>
  );
};

export default MainArticle;
