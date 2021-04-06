import "./blogTemplate.css";

import Layout from "../components/layout";
/* eslint-disable react/prop-types */
import React from "react";
import SEO from "../components/seo";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import { graphql } from "gatsby";

deckDeckGoHighlightElement();

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <SEO title={frontmatter.title + " | Jeremiah Tabb"} />
      <div className="blog-post-container md:w-3/4 m-auto mt-3">
        <div className="p-3">
          <h1 className="text-5xl font-Montserrat dark:text-gray-100">
            {frontmatter.title}
          </h1>
          <h2 className="text-gray-600">{frontmatter.date}</h2>
          <hr />
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
