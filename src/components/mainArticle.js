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
        <div className="w-full p-2 md:p-0 md:w-2/3 ml-auto mr-auto mt-3 md:mt-20">
          <ProfilePhoto />
        </div>
        <div className="w-full md:w-2/3 mr-auto mt-2 p-2 md:p-0 md:mt-20 text-gray-100 text-4xl text-center md:text-left">
          <p className="mb-6 font-Montserrat">👋 Welcome!</p>
          <hr className="bg-gray-700 border-none h-1 hidden md:block" />
          <p className="text-2xl mt-6">
            I am a full-stack engineer with a passion for turning complicated
            ideas into slick applications.
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
                  className="w-3/4 m-auto bg-gray-100 text-gray-900 rounded-xl p-6 text-left hover:shadow-2xl mb-6 md:mb-0"
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
                      <h2 className="text-gray-700">{post.frontmatter.date}</h2>
                    </section>
                    <hr className="bg-gray-700 border-none h-px hidden md:block mb-3" />
                    <p>{post.excerpt}</p>
                  </Link>
                </div>
              ))}
        </div>
      </section>
      <section className="text-center w-full mt-10 text-gray-100">
        <h2 className="underline text-5xl font-bold font-Montserrat">
          My work
        </h2>
        <div className="mt-6">
          <div className="p-2 md:p-0 md:w-1/2 ml-auto mr-auto">
            <WorkWithCats />
          </div>
          <div className="text-center w-full p-3 md:p-8 ml-auto space-y-4 text-2xl">
            <p>
              Most of my time is spent understanding problems and creating
              effective solutions using whatever tools necessary.
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
        </div>
      </section>
      <section className="text-center w-full mt-16 text-gray-100">
        <h2 className="underline text-5xl font-bold font-Montserrat">
          My life
        </h2>
        <div className="grid md:grid-cols-2 mt-6">
          <div className="md:text-left text-center w-full md:w-3/4 ml-auto space-y-6 text-2xl pl-3 md:pl-0">
            <p>I live and work in Boulder, CO</p>
            <p>
              If I am not coding, you can find my climbing rocks all around the
              US or at home learning a new skill.
            </p>
            <Link to="about-me">
              <button className="rounded-xl bg-yellow-700 p-3 hover:bg-yellow-800 hover:shadow-lg my-8">
                Read my full bio
              </button>
            </Link>
          </div>
          <div className="w-full p-2 md:p-0 md:w-2/3 ml-auto mr-auto">
            <Climbing />
          </div>
        </div>
      </section>
    </>
  );
};

export default MainArticle;
