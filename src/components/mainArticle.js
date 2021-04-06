import { Link, graphql, useStaticQuery } from "gatsby";

import Climbing from "./Images/Climbing";
import Img from "gatsby-image";
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
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  return (
    <>
      <section className="grid md:grid-cols-2 ">
        <div className=" p-2 md:p-0 w-2/3 ml-auto mr-auto my-16 md:mt-20 relative">
          <div className="absolute shadow-xl transform rotate-33 bg-orange-jerr w-full h-full" />
          <ProfilePhoto />
        </div>
        <div className="w-full md:w-2/3 mr-auto mt-2 p-2 md:p-0 md:mt-20 text-gray-100 text-4xl text-center md:text-left">
          <p className="mb-6 font-Montserrat">👋 Welcome!</p>
          <hr className="bg-gray-700 dark:bg-gray-900 border-none h-1 hidden md:block" />
          <p className="text-2xl mt-6">
            I am a full-stack engineer with a passion for turning complicated
            ideas into slick applications.
          </p>
        </div>
      </section>
      <section className="text-center w-full mt-12 md:mt-36 text-gray-100">
        <div className="m-auto w-11/12 md:w-1/2 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold font-Montserrat">
            What’s New?
          </h2>
          <hr className="bg-gray-700 border-none h-1" />
        </div>
        <div className="grid md:grid-cols-3 p-2 mt-6">
          {blogPosts &&
            blogPosts
              .slice(0, 3)
              .filter((post) => post.node.frontmatter.title.length > 0)
              .map(({ node: post }) => (
                <div
                  className="w-3/4 m-auto bg-gray-100 text-gray-900 dark:bg-gray-600 dark:text-gray-100 rounded-xl p-6 text-left hover:shadow-2xl mb-6 md:mb-0"
                  key={post.id}
                >
                  <Link to={post.frontmatter.slug}>
                    <div className="w-full">
                      <Img
                        className="rounded-xl"
                        fluid={
                          post?.frontmatter?.featuredImage?.childImageSharp
                            ?.fluid
                        }
                      />
                    </div>
                    <section className="my-3">
                      <h1 className="text-3xl font-Montserrat">
                        {post.frontmatter.title}
                      </h1>
                      <h2 className="text-gray-700 dark:text-gray-400">
                        {post.frontmatter.date}
                      </h2>
                    </section>
                    <hr className="bg-gray-700 border-none h-px mb-3" />
                    <p>{post.excerpt}</p>
                  </Link>
                </div>
              ))}
        </div>
      </section>
      <section className="text-center w-full mt-10 text-gray-100">
        <div className="m-auto w-11/12 md:w-1/2  space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold font-Montserrat">
            My Work
          </h2>
          <hr className="bg-gray-700 border-none h-1" />
        </div>
        <div className="mt-10">
          <div className="p-2 md:p-0 md:w-1/2 ml-auto mx-auto relative my-16">
            <div className="absolute shadow-xl transform -rotate-12 bg-orange-jerr w-full h-full" />
            <WorkWithCats />
          </div>
          <div className="text-center w-full md:w-4/6 p-3 md:p-8 mx-auto space-y-4 text-2xl">
            <p>
              Most of my time is spent understanding problems and building
              solutions using whatever tools necessary. I love writing client
              facing interfaces with React.js and Vue.js. For server side work,
              I love Node.js, Golang and Python.
            </p>
            <p>
              This website is built with Gatsby.js and Tailwindcss with some
              supporting lambda functions written in Golang!
            </p>
            <a href="https://github.com/jollyjerr/jollyjerr" target="blank">
              <button className="rounded-xl bg-orange-jerr p-3 hover:bg-yellow-800 hover:shadow-lg my-8">
                Check it out!
              </button>
            </a>
          </div>
        </div>
      </section>
      <section className="text-center w-full mt-8 text-gray-100">
        <div className="m-auto w-1/2 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold font-Montserrat">
            My Life
          </h2>
          <hr className="bg-gray-700 border-none h-1" />
        </div>
        <div className="grid md:grid-cols-2 mt-6">
          <div className="md:text-left text-center w-full md:w-3/4 ml-auto space-y-6 text-2xl pl-3 md:pl-0">
            <p>I live and work in Boulder, CO</p>
            <p>
              If I am not coding, you can find my climbing rocks all around the
              US or at home learning a new skill.
            </p>
            <Link to="about-me">
              <button className="rounded-xl bg-orange-jerr p-3 hover:bg-yellow-800 hover:shadow-lg my-8">
                Read my full bio
              </button>
            </Link>
          </div>
          <div className="w-full p-2 md:p-0 md:w-2/3 ml-auto mr-auto relative my-16">
            <div className="absolute shadow-xl transform rotate-12 bg-orange-jerr w-full h-full" />
            <Climbing />
          </div>
        </div>
      </section>
    </>
  );
};

export default MainArticle;
