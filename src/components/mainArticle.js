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
          <p className="mb-6">👋 Hey, thanks for visiting my site!</p>
          <p>
            I am a full-stack engineer with a passion for turning complicated
            ideas into slick applications.
          </p>
        </div>
      </section>
      <section className="text-center w-full mt-16 text-gray-100">
        <h2 className="underline text-4xl font-bold">What’s new?</h2>
      </section>
      <section className="text-center w-full mt-16 text-gray-100">
        <h2 className="underline text-4xl font-bold">
          Tech I am excited about right now
        </h2>
      </section>
      <section className="text-center w-full mt-16 text-gray-100">
        <h2 className="underline text-4xl font-bold">Latest climbs</h2>
      </section>
    </>
  );
};

export default MainArticle;
