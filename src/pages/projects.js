import Layout from "../components/layout";
import React from "react";
import SEO from "../components/seo";

const projects = () => {
  return (
    <Layout>
      <SEO title="Software Engineering Projects" />
      <div className="min-h-screen">
        <article className="mt-6">
          This page is a work in progress! In the meantime - check out my GitHub{" "}
          <a
            href="https://github.com/jollyjerr"
            target="blank"
            className="text-blue-jerr underline"
          >
            here
          </a>
          .
        </article>
      </div>
    </Layout>
  );
};

export default projects;
