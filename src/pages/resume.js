import Document from "../assets/resume.svg";
import Layout from "../components/layout";
import React from "react";
import SEO from "../components/seo";

const resume = () => {
  return (
    <Layout>
      <SEO title="Resume" />
      <div className="text-3xl md:hidden font-Montserrat pl-20">
        <h1>Resume</h1>
      </div>
      {/* <div className="bg-blue-jerr md:p-12 w-5/6 mx-auto md:block hidden"> */}
      <div className="md:w-1/2 w-11/12 mx-auto md:my-16 mt-6">
        <button className="rounded-xl bg-orange-jerr p-3 hover:bg-yellow-800 hover:shadow-lg my-8">
          Download a copy!
        </button>
        <Document />
      </div>
      {/* </div> */}
    </Layout>
  );
};

export default resume;
