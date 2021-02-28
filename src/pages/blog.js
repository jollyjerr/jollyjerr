import { Link, graphql } from "gatsby";

import Img from "gatsby-image";
import Layout from "../components/layout";
import React from "react";
import SEO from "../components/seo";

const blog = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout>
      <SEO title="Blog | Jeremiah Tabb" />
      <div className="text-3xl md:hidden font-Montserrat pl-20">
        <h1>Blog</h1>
      </div>
      <div className="grid md:grid-cols-3 md:my-10">
        {posts
          .filter((post) => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div
                className="w-3/4 m-auto bg-gray-100 text-gray-900 rounded-xl p-6 text-left hover:bg-blue-jerr hover:text-gray-100 mb-6 md:mb-0"
                key={post.id}
              >
                <Link to={post.frontmatter.slug}>
                  <div className="w-full">
                    <Img
                      className="rounded-xl"
                      fluid={
                        post?.frontmatter?.featuredImage?.childImageSharp?.fluid
                      }
                    />
                  </div>
                  <section className="my-3">
                    <h1 className="text-3xl font-Montserrat">
                      {post.frontmatter.title}
                    </h1>
                    <h2 className="text-gray-700">{post.frontmatter.date}</h2>
                  </section>
                  <hr className="bg-gray-700 border-none h-px mb-3" />
                  <p>{post.excerpt}</p>
                </Link>
              </div>
            );
          })}
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogQuery {
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
`;

export default blog;
