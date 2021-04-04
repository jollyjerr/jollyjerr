import {
  LogoGithub,
  LogoLinkedin,
  LogoMedium,
  LogoTwitter,
} from "react-ionicons";

import { Link } from "gatsby";
import Logo from "../assets/logo.svg";
import Navdrop from "../components/navdrop";
import PropTypes from "prop-types";
import React from "react";

const Navbar = ({ darkMode, setDarkMode }) => (
  <nav className="h-24 container mx-auto pt-6 relative md:flex hidden space-x-4 text-xl text-gray-800 dark:text-gray-100">
    <div>
      <Link to="/">
        <Logo style={{ width: "62.3px" }} />
      </Link>
    </div>
    <section className="col-span-13 space-x-4 flex items-end h-full pb-1">
      <Navdrop
        title="About"
        items={[
          { title: "My Story", linkTo: "/about-me" },
          { title: "Resume", linkTo: "/resume" },
        ]}
      />
      <Navdrop
        title="Projects"
        items={[
          { title: "Open Source", linkTo: "/projects/opensource" },
          { title: "Personal", linkTo: "/projects/personal" },
          // { title: "Hire Me", linkTo: "/" },
        ]}
      />
      <Navdrop
        title="Music"
        items={[
          {
            title: "Bandcamp",
            linkTo: "https://jeremiahtabb.bandcamp.com/",
            external: true,
          },
          {
            title: "Soundcloud",
            linkTo: "https://soundcloud.com/jeremiah-tabb-802138204",
            external: true,
          },
        ]}
      />
      <Link to="/blog">
        <button className="font-semibold">Blog</button>
      </Link>
    </section>
    <section className="flex items-end h-full absolute right-4 bottom-0 space-x-2">
      <a href="https://github.com/jollyjerr" target="blank">
        <LogoGithub
          title="Link to my github account"
          width="19px"
          color="#1F2937"
        />
      </a>
      <a href="https://www.linkedin.com/in/jeremiahtabb/" target="blank">
        <LogoLinkedin
          title="Link to my linkedin account"
          width="19px"
          color="#1F2937"
        />
      </a>
      <a href="https://twitter.com/JerrTabb" target="blank">
        <LogoTwitter
          title="Link to my twitter account"
          width="19px"
          color="#1F2937"
        />
      </a>
      <a href="https://medium.com/@jollyjerr" target="blank">
        <LogoMedium
          title="Link to my medium account"
          width="19px"
          color="#1F2937"
        />
      </a>
      {/* <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setDarkMode(!darkMode)}
      >
        <div
          className={`w-16 h-10 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out ${
            darkMode && "bg-gray-700"
          }`}
        >
          <div
            className={`bg-white w-8 h-8 rounded-full shadow-md transform duration-300 ease-in-out ${
              darkMode && "translate-x-6"
            }`}
          ></div>
        </div>
      </div> */}
    </section>
  </nav>
);

Navbar.propTypes = {
  darkMode: PropTypes.bool,
  setDarkMode: PropTypes.func,
};

export default Navbar;
