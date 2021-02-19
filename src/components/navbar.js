import {
  LogoGithub,
  LogoLinkedin,
  LogoMedium,
  LogoTwitter,
} from "react-ionicons";

import { Link } from "gatsby";
import Logo from "../assets/logo.svg";
import React from "react";

const Navbar = () => (
  <nav className="h-14 container mx-auto pt-6 grid grid-cols-10">
    <section className="col-span-9">
      <Link to="/">
        <Logo className="w-8" />
      </Link>
    </section>
    <section className="grid grid-cols-4">
      <a href="https://github.com/jollyjerr" target="blank" className="mt-auto">
        <LogoGithub width="16px" />
      </a>
      <a
        href="https://www.linkedin.com/in/jeremiahtabb/"
        target="blank"
        className="mt-auto"
      >
        <LogoLinkedin width="16px" />
      </a>
      <a href="https://twitter.com/JerrTabb" target="blank" className="mt-auto">
        <LogoTwitter width="16px" />
      </a>
      <a
        href="https://medium.com/@jollyjerr"
        target="blank"
        className="mt-auto"
      >
        <LogoMedium width="16px" />
      </a>
    </section>
  </nav>
);

export default Navbar;
