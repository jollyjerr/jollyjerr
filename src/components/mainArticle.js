import ProfilePhoto from "../components/profilePhoto";
import React from "react";
import devClimbs from "../assets/devClimbs.json";

const MainArticle = () => {
  const [climbs, setClimbs] = React.useState([]);

  const getClimbData = () => {
    if (process.env.NODE_ENV === "production") {
      fetch("https://jtabb.dev/.netlify/functions/climbs")
        .then((res) => res.json())
        .then((json) => setClimbs(json.items))
        .catch(console.error);
    } else {
      setClimbs([
        devClimbs.items[0],
        devClimbs.items[1],
        devClimbs.items[3],
        devClimbs.items[4],
        devClimbs.items[5],
      ]);
    }
  };

  React.useEffect(() => {
    getClimbData();
  }, []);

  return (
    <>
      <section className="grid md:grid-cols-2 ">
        <div className="w-full p-2 md:p-0 md:w-2/3 ml-auto mr-auto mt-3 md:mt-20">
          <ProfilePhoto />
        </div>
        <div className="w-full md:w-2/3 mr-auto mt-2 p-2 md:p-0 md:mt-20 text-gray-100 text-3xl text-center md:text-left">
          <p className="mb-6">👋 Hey, thanks for visiting my site!</p>
          <p>
            I am a full-stack engineer with a passion for turning complicated
            ideas into slick applications.
          </p>
        </div>
      </section>
      <section className="text-center w-full mt-16 text-gray-100">
        <h2 className="underline text-4xl font-bold">What’s new?</h2>
        <p className="mt-6">
          This website is brand new and still under active development! I will
          eventually list recent blog posts here!
        </p>
      </section>
      <section className="text-center w-full mt-16 text-gray-100">
        <h2 className="underline text-4xl font-bold">
          Tech I am excited about right now
        </h2>
      </section>
      <section className="text-center w-full mt-16 text-gray-100">
        <h2 className="underline text-4xl font-bold">Latest climbs</h2>
        {climbs.map((c, i) => (
          <div key={i} dangerouslySetInnerHTML={{ __html: c.description }} />
        ))}
      </section>
    </>
  );
};

export default MainArticle;
