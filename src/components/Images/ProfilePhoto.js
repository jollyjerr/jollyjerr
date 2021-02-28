import { graphql, useStaticQuery } from "gatsby";

import Img from "gatsby-image";
import React from "react";

const ProfilePhoto = () => {
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
      className="rounded-xl shadow-lg"
      fluid={data.placeholderImage.childImageSharp.fluid}
      alt={"A picture of me!"}
    />
  );
};

export default ProfilePhoto;
