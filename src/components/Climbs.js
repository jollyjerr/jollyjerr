import React from "react";
import devClimbs from "../assets/devClimbs.json";

const Climbs = () => {
  const [climbs, setClimbs] = React.useState([]);

  const getClimbData = () => {
    if (process.env.NODE_ENV === "production") {
      // Uncomment once I start climbing again
      // fetch("https://jtabb.dev/.netlify/functions/climbs")
      //   .then((res) => res.json())
      //   .then((json) => setClimbs(json.items))
      //   .catch(console.error);
      setClimbs([
        devClimbs.items[0],
        devClimbs.items[4],
        devClimbs.items[5],
        devClimbs.items[6],
        devClimbs.items[7],
      ]);
    } else {
      setClimbs([
        devClimbs.items[0],
        devClimbs.items[4],
        devClimbs.items[5],
        devClimbs.items[6],
        devClimbs.items[7],
      ]);
    }
  };

  React.useEffect(() => {
    getClimbData();
  }, []);

  console.log(climbs);
  return <div></div>;
};

export default Climbs;
