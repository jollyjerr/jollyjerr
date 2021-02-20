import Flip from "../components/flip";
import HeroToBodyWave from "../assets/herotobodywave.svg";
import Layout from "../components/layout";
import ProfilePhoto from "../components/profilePhoto";
import React from "react";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="mt-20 text-gray-900">
      <section className="pl-14">
        <div className="text-5xl font-bold flex ml-8 cursor-default">
          I{"  "}
          <Flip
            terms={["build software", "write music", "love React", "like jazz"]}
            interval={2000}
            className="ml-4 underline w-full"
          />
        </div>
      </section>
      <section className="relative">
        <HeroToBodyWave className="w-full" />
        <button className="text-gray-100 absolute z-10 right-40">
          Check out my butt
        </button>
      </section>
      <article className="bg-blue-jerr min-h-screen">
        <section className="grid grid-cols-2">
          <div className="w-2/3">
            <ProfilePhoto />
          </div>
        </section>
      </article>
    </div>
  </Layout>
);

export default IndexPage;
