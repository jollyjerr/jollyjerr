import { graphql, useStaticQuery } from "gatsby";

import Img from "gatsby-image";
import React from "react";

const Climbing = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "climbing.jpg" }) {
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
      alt={"A picture of me climbing in the sawtooth range!"}
    />
  );
};

export default Climbing;
