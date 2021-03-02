import Layout from "../components/layout";
import React from "react";
import SEO from "../components/seo";

const AboutMe = () => {
  return (
    <Layout>
      <SEO title="About Me | Jeremiah Tabb" />
      <div className="h-screen relative mt-16 text-gray-900">
        <div className="bg-blue-jerr transform rotate-12 m-auto h-32 p-8 w-1/3 shadow-xl">
          <h1 className="text-center transform -rotate-12 font-Montserrat text-gray-100 lg:text-6xl text-2xl">
            About me
          </h1>
        </div>
        <article className="grid md:grid-cols-2 mt-16">
          <section>
            <h2 className="font-Montserrat text-2xl">Experience</h2>
            <hr className="bg-gray-900 border-none h-1 mb-3" />
            <p>I write the best code ever.</p>
          </section>
          <div></div>
          <div></div>
          <section>
            <h2 className="font-Montserrat text-right text-2xl">Education</h2>
            <hr className="bg-gray-900 border-none h-1 mb-3" />
          </section>
          <section>
            <h2 className="font-Montserrat text-2xl">Freelance</h2>
            <hr className="bg-gray-900 border-none h-1 mb-3" />
          </section>
          <div></div>
          <div></div>
          <section>
            <h2 className="font-Montserrat text-right text-2xl">Hobbies</h2>
            <hr className="bg-gray-900 border-none h-1 mb-3" />
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default AboutMe;
