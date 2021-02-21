import {
  ArrowUpCircle,
  LogoGithub,
  LogoInstagram,
  LogoLinkedin,
  LogoMedium,
  LogoTwitter,
  MailUnread,
} from "react-ionicons";

import React from "react";

const Footer = () => {
  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  const oops = () =>
    window.alert(
      "Oops! 🙈 My email form is not ready yet! You can email me at tabbjeremiah@gmail.com",
    );
  return (
    <footer className="relative flex  text-xl text-gray-800 h-36">
      <section className="col-span-7 mt-auto w-1/5 mb-6">
        <h3 className="text-lg font-bold mb-3">{"Let's Connect"}</h3>
        <div className="grid grid-cols-6">
          <a href="https://github.com/jollyjerr" target="blank">
            <LogoGithub width="32px" height="32px" />
          </a>
          <a href="https://www.linkedin.com/in/jeremiahtabb/" target="blank">
            <LogoLinkedin width="32px" height="32px" />
          </a>
          <a href="https://twitter.com/JerrTabb" target="blank">
            <LogoTwitter width="32px" height="32px" />
          </a>
          <a href="https://medium.com/@jollyjerr" target="blank">
            <LogoMedium width="32px" height="32px" />
          </a>
          <a href="https://www.instagram.com/jollyjerr/" target="blank">
            <LogoInstagram width="32px" height="32px" />
          </a>
          <button onClick={oops}>
            <MailUnread width="32px" height="32px" />
          </button>
        </div>
      </section>
      <section className="absolute right-0 bottom-3">
        <div className="text-left">
          <button onClick={scrollToTop}>
            <ArrowUpCircle width="56px" height="56px" />
          </button>
          <h4>Back to top</h4>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
