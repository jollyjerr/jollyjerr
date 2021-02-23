import { ArrowForwardCircle } from "react-ionicons";
import BodyToFooterWave from "../assets/bodyToFooterWave.svg";
import Flip from "../components/flip";
import HeroToBodyWave from "../assets/herotobodywave.svg";
import Layout from "../components/layout";
import MainArticle from "../components/mainArticle";
import React from "react";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="md:mt-20 pt-8 md:pt-0 text-gray-900 pb-20 md:pb-0">
      <section className="md:pl-14">
        <div className="text-5xl font-bold flex ml-8 cursor-default h-24">
          I{"  "}
          <Flip
            terms={[
              "build software.",
              "write music.",
              "love React.",
              "like jazz.",
            ]}
            interval={2000}
            className="ml-4 underline w-full max-w-max"
          />
        </div>
      </section>
      <section className="relative">
        <HeroToBodyWave className="w-full" />
        <div className="text-gray-100 hidden md:block absolute z-10 ml-auto mr-auto -right-1/3 left-0 w-56 top-1/3">
          <button>
            <ArrowForwardCircle
              title="Button: Check out my work."
              color="#f9fafb"
              height="75px"
              width="75px"
            />
          </button>
          <h2 className="ml-2 text-2xl">Check out my work</h2>
        </div>
      </section>
      <article className="bg-blue-jerr -mt-1 md:-mt-0">
        <MainArticle />
      </article>
      <BodyToFooterWave className="w-full" />
    </div>
  </Layout>
);

export default IndexPage;
