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
      <div className="text-3xl md:hidden font-Montserrat pl-20">
        <h1>Resume</h1>
      </div>
      {/* <div className="bg-blue-jerr md:p-12 w-5/6 mx-auto md:block hidden"> */}
      <div className="md:w-1/2 w-11/12 mx-auto md:my-16 mt-6 h-screen">
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
        {/* <Document /> */}
        <p>
          I am working on revamping my resume right now - come back soon to
          check it out!
        </p>
      </div>
      {/* </div> */}
    </Layout>
  );
};

export default resume;
