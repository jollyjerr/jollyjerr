// import Document from "../assets/resume.svg";
import Layout from "../components/layout";
import { Link } from "gatsby";
import React from "react";
import ResumePDF from "../assets/2021ResumeTabb.pdf";
import SEO from "../components/seo";

const resume = () => {
  return (
    <Layout>
      <SEO title="Resume" />
      <div className="bg-blue-jerr transform rotate-12 m-auto h-32 p-8 w-1/3 shadow-xl mt-60">
        <h1 className="text-center transform -rotate-12 font-Montserrat text-gray-100 lg:text-6xl text-2xl">
          Resume
        </h1>
      </div>
      <div className="md:w-1/2 w-11/12 mx-auto md:my-32 mt-6">
        <a href={ResumePDF} download>
          <button className="rounded-xl bg-orange-jerr p-3 hover:bg-yellow-800 hover:shadow-lg my-8">
            Download a copy!
          </button>
        </a>
        <Link to="/climbing-live-feed">
          <button className="rounded-xl bg-blue-jerr p-3 hover:bg-blue-800 hover:shadow-lg my-8 float-right">
            Check out my climbing resume!
          </button>
        </Link>
      </div>
    </Layout>
  );
};

export default resume;
