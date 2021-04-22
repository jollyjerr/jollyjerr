import Layout from "../components/layout";
import { Link } from "gatsby";
import React from "react";
import SEO from "../components/seo";
import Teaching from "../components/Images/Teaching";

const AboutMe = () => {
  return (
    <Layout>
      <SEO title="About Me | Jeremiah Tabb" />
      <div className="relative mt-16 text-gray-900 dark:text-gray-300">
        <div className="bg-blue-jerr transform rotate-12 m-auto h-32 p-8 w-1/3 shadow-xl">
          <h1 className="text-center transform -rotate-12 font-Montserrat text-gray-100 lg:text-6xl text-2xl">
            About me
          </h1>
        </div>
        <article className="grid md:grid-cols-2 mt-16 space-y-16">
          <section className="col-span-2">
            <h2 className="font-Montserrat text-2xl">Experience</h2>
            <hr className="bg-gray-900 border-none h-1 mb-3" />
            <div className="space-y-6">
              <p>
                I spend the majority of my time building data-driven/iot
                applications with the awesome team at{" "}
                <a
                  href="https://smartrent.com"
                  className="text-blue-jerr underline"
                >
                  SmartRent
                </a>
                . I also work as an engineer for other projects - building
                modern web applications with a variety of technologies.
              </p>
              <p>
                Previously, I have worked on computational linguistics pipelines
                to transform the unstructured medical text into meaningful
                datapoints to assist with patient tracking and diagnosis. I have
                also spent time building custom functionality into the Microsoft
                Dynamics application suite.
              </p>
              <p>
                I am happy in any environment where I can write highly optimized
                code using modern technologies like Golang, Node.js, and React.
                Regardless of the business problem being solved, I write
                thoroughly tested code and am insistent on learning the best
                tools for the job and building technology that makes life
                simpler.
              </p>
            </div>
          </section>
          <section>
            <h2 className="font-Montserrat text-right text-2xl">Education</h2>
            <hr className="bg-gray-900 border-none h-1 mb-3" />
            <div className="space-y-6">
              <p>
                My story begins in Buffalo, Wyoming - where I attended school
                and fell in love with physics, music, and protecting the
                outdoors.
              </p>
              <p>
                As soon as I discovered computers, I was fascinated by their
                ability to portray the real world and to produce effective tools
                for research, business, and entertainment. I loved programming
                physics simulations and learning about the epic programs that
                people were building around the world.
              </p>
              <p>
                I moved on to Indiana Wesleyan University to study music
                composition and theory. I love composing music and am inspired
                by the work of Caroline Shaw and Philip Glass. While obtaining
                my undergraduate degree in music composition, I toured around
                the world performing and conducting. I had the amazing
                opportunity to witness one of my works performed in the Roman
                Pantheon, and many other highlights like a film score that went
                on to be part of a regional Emmy-winning film.
              </p>
              <p>
                Towards the end of my college career, I started to realize that
                my childhood love for science and technology was stronger than
                my love for classical music. I spent a lot of my senior year
                teaching myself JavaScript, and getting ready to make a massive
                change. I applied to the Flatiron School in Denver, CO and
                started classes in July 2019 - just three months after
                graduating with my undergraduate degree.
              </p>
              <p>
                Four intense months later, I graduated as a software engineer
                and started pursuing my goal to make the world a better place
                through technology.
              </p>
            </div>
          </section>
          <div className="w-3/4 m-auto relative col-span-2 md:col-span-1">
            <div className="bg-blue-jerr transform -rotate-12 w-full h-full absolute shadow-lg" />
            <Teaching />
          </div>
          {/* <section className="col-span-2">
            <h2 className="font-Montserrat text-2xl">Freelance</h2>
            <hr className="bg-gray-900 border-none h-1 mb-3" />
            <div className="space-y-6">
              <p>I will build things for you!</p>
            </div>
          </section> */}
          <div></div>
          <section className="col-span-2 mb-20 md:mb-0 md:col-span-1">
            <h2 className="font-Montserrat text-right text-2xl">Hobbies</h2>
            <hr className="bg-gray-900 border-none h-1 mb-3" />
            <div className="space-y-6">
              <p>
                I am an avid rock climber, and enjoy traveling with friends to
                attempt to summit some of the most iconic rock in the world. My
                primary form of climbing is trad, but I enjoy sport climbing and
                bouldering when I get the chance as well.{" "}
                <Link
                  to="/climbing-live-feed"
                  className="text-blue-jerr underline"
                >
                  Check out my climbing live feed here.
                </Link>
              </p>
              <p>
                I compose music for film and for large and small ensemble. My
                biggest project to date was my senior college piece{" "}
                <a
                  href="https://youtu.be/Yqy6TQVIaa8"
                  className="text-blue-jerr underline"
                >
                  Ceramic Bird
                </a>
                , a piece for orchestra and film that focuses on our
                relationship with the earth and other species.
              </p>
              <p>
                I love playing music with other humans. If I was not writing
                code for a living I would be working hard to make a living
                playing jazz!
              </p>
            </div>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default AboutMe;
