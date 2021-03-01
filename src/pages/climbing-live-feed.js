import Layout from "../components/layout";
import React from "react";
import SEO from "../components/seo";
import devClimbs from "../assets/devClimbs.json";

const ClimbingLiveFeed = () => {
  const [climbs, setClimbs] = React.useState([]);

  const getClimbData = () => {
    if (process.env.NODE_ENV === "production") {
      // Uncomment once I start climbing again
      // fetch("https://jtabb.dev/.netlify/functions/climbs")
      //   .then((res) => res.json())
      //   .then((json) => setClimbs(json.items))
      //   .catch(console.error);
      setClimbs(devClimbs.items);
    } else {
      setClimbs(devClimbs.items);
    }
  };

  React.useEffect(() => {
    getClimbData();
  }, []);

  return (
    <Layout>
      <SEO title="Climbing Live Feed" />
      <div className="md:ml-10 my-6">
        <h1 className="text-5xl font-Montserrat">Climbing Resume</h1>
        <h3 className="text-2xl font-Montserrat">
          Live stream of my{" "}
          <a
            className="text-blue-jerr underline"
            href="https://www.mountainproject.com/"
          >
            Mountain Project
          </a>{" "}
          {"ticks"}.
        </h3>
      </div>
      <article className="grid md:grid-cols-2 lg:grid-cols-3">
        {climbs.map((c, i) => (
          <a key={i} href={c.link} target="blank">
            <div className="w-3/4 m-auto bg-gray-100 text-gray-900 rounded-xl p-6 text-left hover:bg-blue-jerr hover:text-gray-100 mb-6 md:mb-0">
              <h2 className="text-3xl font-Montserrat">{c.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: c.description }} />
            </div>
          </a>
        ))}
      </article>
    </Layout>
  );
};

export default ClimbingLiveFeed;
