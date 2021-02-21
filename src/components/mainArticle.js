// import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

import ProfilePhoto from "../components/profilePhoto";
import React from "react";

const MainArticle = () => {
  return (
    <>
      <section className="grid md:grid-cols-2 ">
        <div className="w-2/3 ml-auto mr-auto mt-20">
          <ProfilePhoto />
        </div>
        <div className="w-2/3 mr-auto mt-20 text-gray-100 text-3xl sm:text-center md:text-left">
          <p>
            Hey! Thanks for visiting my site! It does not do a lot yet, but feel
            free to click around and explore.
          </p>
        </div>
      </section>
      <section className="grid md:grid-cols-2 ">
        <div className="w-1/2 ml-auto mt-20 text-gray-100 text-3xl sm:text-center relative md:text-right">
          <p>
            This website is a work in progress. Come back soon for a lot more!
          </p>
        </div>
        <div className="w-2/3 ml-auto mr-auto mt-20">🚧</div>
      </section>
    </>
  );
};

export default MainArticle;
