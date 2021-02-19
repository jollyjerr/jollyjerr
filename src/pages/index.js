import HeroToBodyWave from "../assets/herotobodywave.svg";
import Layout from "../components/layout";
import ProfilePhoto from "../components/profilePhoto";
import React from "react";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="mt-20">
      <section className="pl-14">
        <h1 className="text-5xl font-bold">
          I <span className="underline">build </span>
          <span className="underline">software</span>.
        </h1>
      </section>
      <section className="relative">
        <HeroToBodyWave className="w-full" />
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
