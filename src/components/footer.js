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
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isEmail, setIsEmail] = React.useState(false);

  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://jtabb.dev/.netlify/functions/email", {
      method: "POST",
      body: JSON.stringify({ email, message }),
    })
      .catch(alert)
      .finally(() => setIsEmail(false));
  };

  return (
    <footer className="relative hidden md:flex container mx-auto  text-xl text-gray-800 h-36">
      <section className="col-span-7 mt-auto w-1/5 mb-6">
        <h3 className="text-lg font-bold mb-3">{"Let's Connect"}</h3>
        <div className="grid grid-cols-6">
          <a
            href="https://github.com/jollyjerr"
            target="blank"
            className="w-min"
          >
            <LogoGithub width="32px" height="32px" title="Link to Github" />
          </a>
          <a
            href="https://www.linkedin.com/in/jeremiahtabb/"
            target="blank"
            className="w-min"
          >
            <LogoLinkedin width="32px" height="32px" title="Link to LinkedIn" />
          </a>
          <a
            href="https://twitter.com/JerrTabb"
            target="blank"
            className="w-min"
          >
            <LogoTwitter width="32px" height="32px" title="Link to Twitter" />
          </a>
          <a
            href="https://medium.com/@jollyjerr"
            target="blank"
            className="w-min"
          >
            <LogoMedium width="32px" height="32px" title="Link to Medium" />
          </a>
          <a
            href="https://www.instagram.com/jollyjerr/"
            target="blank"
            className="w-min"
          >
            <LogoInstagram
              width="32px"
              height="32px"
              title="Link to Instagram"
            />
          </a>
          <div className="relative">
            <button className="w-min" onClick={() => setIsEmail(true)}>
              <MailUnread width="32px" height="32px" title="Open email form" />
            </button>
            {isEmail && (
              <div className="absolute -top-96 mb-20 ml-10 p-6 origin-bottom-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none z-20">
                <form onSubmit={handleSubmit}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="message">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="resize-none"
                    cols="30"
                    rows="10"
                    id="message"
                    name="message"
                  />
                  <button type="submit">Send</button>
                </form>
              </div>
            )}
          </div>
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
