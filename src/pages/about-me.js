import Layout from "../components/layout";
import React from "react";
import SEO from "../components/seo";
import Teaching from "../components/Images/Teaching";

const AboutMe = () => {
  return (
    <Layout>
      <SEO title="About Me | Jeremiah Tabb" />
      <div className="relative mt-16 text-gray-900">
        <div className="bg-blue-jerr transform rotate-12 m-auto h-32 p-8 w-1/3 shadow-xl">
          <h1 className="text-center transform -rotate-12 font-Montserrat text-gray-100 lg:text-6xl text-2xl">
            About me
          </h1>
        </div>
        <article className="grid md:grid-cols-2 mt-16 space-y-16">
          <section className="col-span-2">
            <h2 className="font-Montserrat text-2xl">Experience</h2>
            <hr className="bg-gray-900 border-none h-1 mb-3" />
            <div className="space-y-6">
              <p>
                I spend the majority of my time building data-driven
                applications with the awesome team at{" "}
                <a
                  href="https://soseintelworks.com"
                  className="text-blue-jerr underline"
                >
                  Sose Intelworks
                </a>
                . I also work as a full-time engineer for other projects -
                building modern web applications with a variety of technologies.
              </p>
              <p>
                Previously, I have worked on computational linguistics pipelines
                to transform the unstructured medical text into meaningful
                datapoints to assist with patient tracking and diagnosis. I have
                also spent time building custom functionality into the Microsoft
                Dynamics application suite.
              </p>
              <p>
                I am happy in any environment where I can write highly optimized
                code using modern technologies like Golang, Node.js, and React.
                Regardless of the business problem being solved, I write
                thoroughly tested code and am insistent on learning the best
                tools for the job and building technology that makes life
                simpler.
              </p>
            </div>
          </section>
          <section>
            <h2 className="font-Montserrat text-right text-2xl">Education</h2>
            <hr className="bg-gray-900 border-none h-1 mb-3" />
            <div className="space-y-6">
              <p>I went to school</p>
            </div>
          </section>
          <div className="w-3/4 m-auto relative">
            <div className="bg-blue-jerr transform -rotate-12 w-full h-full absolute shadow-lg" />
            <Teaching />
          </div>
          <section className="col-span-2">
            <h2 className="font-Montserrat text-2xl">Freelance</h2>
            <hr className="bg-gray-900 border-none h-1 mb-3" />
            <div className="space-y-6">
              <p>I will build things for you!</p>
            </div>
          </section>
          <div></div>
          <section>
            <h2 className="font-Montserrat text-right text-2xl">Hobbies</h2>
            <hr className="bg-gray-900 border-none h-1 mb-3" />
            <div className="space-y-6">
              <p>I climb rocks and play jazz</p>
            </div>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default AboutMe;
