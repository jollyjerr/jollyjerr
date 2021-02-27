import { Link, graphql, useStaticQuery } from "gatsby";

import Climbing from "./Images/Climbing";
import ProfilePhoto from "./Images/ProfilePhoto";
import React from "react";
import WorkWithCats from "./Images/WorkWithCats";

const MainArticle = () => {
  const {
    allMarkdownRemark: { edges: blogPosts },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            excerpt(pruneLength: 250)
            id
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              slug
            }
          }
        }
      }
    }
  `);
  return (
    <>
      <section className="grid md:grid-cols-2 ">
        <div className="w-full p-2 md:p-0 md:w-2/3 ml-auto mr-auto mt-3 md:mt-20">
          <ProfilePhoto />
        </div>
        <div className="w-full md:w-2/3 mr-auto mt-2 p-2 md:p-0 md:mt-20 text-gray-100 text-4xl text-center md:text-left">
          <p className="mb-6 font-Montserrat">👋 Welcome!</p>
          <p className="text-2xl">
            I am a full-stack engineer with a passion for turning complicated
            ideas into slick applications.
          </p>
          <p className="text-red-700">
            This website is in very early development and is not ready for the
            public eye! Click around if you want, but everything will break!
          </p>
        </div>
      </section>
      <section className="text-center w-full mt-16 text-gray-100">
        <h2 className="underline text-5xl font-bold font-Montserrat">
          What’s new?
        </h2>
        <div className="grid md:grid-cols-3 p-2 mt-6">
          {blogPosts &&
            blogPosts
              .slice(0, 3)
              .filter((post) => post.node.frontmatter.title.length > 0)
              .map(({ node: post }) => (
                <div
                  className="w-3/4 m-auto h-72 bg-gray-100 text-gray-900"
                  key={post.id}
                >
                  {" "}
                  <h1>
                    <Link to={post.frontmatter.slug}>
                      {post.frontmatter.title}
                    </Link>
                  </h1>
                  <h2>{post.frontmatter.date}</h2>
                  <p>{post.excerpt}</p>
                </div>
              ))}
        </div>
      </section>
      <section className="text-center w-full mt-16 text-gray-100">
        <h2 className="underline text-5xl font-bold font-Montserrat">
          My work
        </h2>
        <div className="grid md:grid-cols-2 mt-6">
          <div className="text-center md:text-left md:w-3/4 w-full p-3 md:p-0 ml-auto space-y-4 text-2xl">
            <p>
              As an engineer, most of my time is spent understanding problems
              and creating simple, effective solutions using whatever tools
              necessary.
            </p>
            <h6 className="font-Montserrat">Frontend</h6>
            <p>
              I love building client facing interfaces with React.js and Vue.js.
            </p>
            <h6 className="font-Montserrat">Backend</h6>
            <p>For server side work, I love Node.js, Golang and Python.</p>
            <h6 className="font-Montserrat text-4xl text-gray-900">Example</h6>
            <p>
              This website is built with Gatsby.js and Tailwindcss with some
              supporting lambda functions written in Golang!{" "}
              <a
                href="https://github.com/jollyjerr/jollyjerr"
                target="blank"
                className="underline"
              >
                Check it out!
              </a>
            </p>
          </div>
          <div className="w-full p-2 md:p-0 md:w-2/3 ml-auto mr-auto">
            <WorkWithCats />
          </div>
        </div>
      </section>
      <section className="text-center w-full mt-16 text-gray-100">
        <h2 className="underline text-5xl font-bold font-Montserrat">
          My life
        </h2>
        <div className="grid md:grid-cols-2 mt-6">
          <div className="w-full p-2 md:p-0 md:w-2/3 ml-auto mr-auto">
            <Climbing />
          </div>
          <div className="text-left w-3/4 mr-auto space-y-4 text-2xl pl-3 md:pl-0">
            <p>I live and work in Boulder, CO</p>
            <p>
              If I am not coding, you can find my climbing rocks all around the
              US or at home learning a new skill.
            </p>
            <p>
              How did I get here? Read my full bio{" "}
              <Link to="about-me" className="underline">
                here
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainArticle;
