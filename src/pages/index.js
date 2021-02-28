import { ArrowForwardCircle } from "react-ionicons";
import BodyToFooterWave from "../assets/bodyToFooterWave.svg";
import Flip from "../components/flip";
import HeroToBodyWave from "../assets/herotobodywave.svg";
import Layout from "../components/layout";
import { Link } from "gatsby";
import MainArticle from "../components/mainArticle";
import React from "react";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Jeremiah Tabb" />
    <div className="md:mt-20 pt-8 md:pt-0 text-gray-900 pb-20 md:pb-0">
      <section className="md:pl-14">
        <div className="md:text-5xl text-4xl font-bold flex md:ml-8 cursor-default h-24 w-full p-2 font-Montserrat">
          I{"  "}
          <Flip
            terms={[
              "build software.",
              "write music.",
              "love React.",
              "like jazz.",
            ]}
            interval={2000}
            className="ml-4 underline w-full"
          />
        </div>
      </section>
      <section className="relative">
        <HeroToBodyWave className="w-full" />
        <div className="text-gray-100 hidden md:block absolute z-10 ml-auto mr-auto -right-1/3 left-0 w-56 top-1/3">
          <Link to="/projects">
            <button>
              <ArrowForwardCircle
                title="Button: Check out my work."
                color="#f9fafb"
                height="75px"
                width="75px"
              />
            </button>
          </Link>
          <h2 className="ml-2 font-Montserrat">Jump to my work</h2>
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
