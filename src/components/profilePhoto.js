import { graphql, useStaticQuery } from "gatsby";

import Img from "gatsby-image";
import React from "react";

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile.jpg" }) {
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
      className="rounded-xl"
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  );
};

export default Image;
