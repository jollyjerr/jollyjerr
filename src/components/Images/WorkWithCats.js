import { graphql, useStaticQuery } from "gatsby";

import Img from "gatsby-image";
import React from "react";

const WorkWithCats = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "work.jpg" }) {
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
      alt={"A picture of my cats and some code!"}
    />
  );
};

export default WorkWithCats;
