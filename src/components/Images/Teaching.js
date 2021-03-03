import { graphql, useStaticQuery } from "gatsby";

import Img from "gatsby-image";
import React from "react";

const Teaching = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "lunchnlearn.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found! :(</div>;
  }
  return (
    <Img
      className="rounded-xl shadow-lg"
      fluid={data.placeholderImage.childImageSharp.fluid}
      alt={"A picture of me teaching a class about algorithms!"}
    />
  );
};

export default Teaching;
