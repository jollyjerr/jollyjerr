import {
  LogoGithub,
  LogoLinkedin,
  LogoMedium,
  LogoTwitter,
} from "react-ionicons";

import { Link } from "gatsby";
import Logo from "../assets/logo.svg";
import Navdrop from "../components/navdrop";
import React from "react";

const Navbar = () => (
  <nav className="h-24 container mx-auto pt-6 relative flex space-x-4 text-xl">
    <div>
      <Link to="/">
        <Logo style={{ width: "62.3px" }} />
      </Link>
    </div>
    <section className="col-span-13 space-x-4 flex items-end h-full pb-1">
      <Navdrop
        title="About"
        items={[
          { title: "tldr", linkTo: "/" },
          { title: "Full bio", linkTo: "/" },
        ]}
      />
      <Navdrop
        title="Projects"
        items={[
          { title: "Cryptofu", linkTo: "/" },
          { title: "Other stuff", linkTo: "/" },
        ]}
      />
      <Navdrop
        title="Music"
        items={[
          { title: "Bandcamp", linkTo: "/", external: true },
          { title: "Soundcloud", linkTo: "/", external: true },
        ]}
      />
      <button className="font-semibold">Blog</button>
      <button className="font-semibold">Resume</button>
    </section>
    <section className="flex items-end h-full absolute right-4 bottom-0 space-x-2">
      <a href="https://github.com/jollyjerr" target="blank">
        <LogoGithub width="19px" />
      </a>
      <a href="https://www.linkedin.com/in/jeremiahtabb/" target="blank">
        <LogoLinkedin width="19px" />
      </a>
      <a href="https://twitter.com/JerrTabb" target="blank">
        <LogoTwitter width="19px" />
      </a>
      <a href="https://medium.com/@jollyjerr" target="blank">
        <LogoMedium width="19px" />
      </a>
    </section>
  </nav>
);

export default Navbar;
