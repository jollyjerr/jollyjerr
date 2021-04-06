import Footer from "./footer";
import MobileFooter from "./MobileFooter";
import Navbar from "./navbar";
import PropTypes from "prop-types";
import React from "react";
import useLocalStorage from "./useLocalStorage";

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useLocalStorage("jtabb.dev:DarkMode", false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-800 font-Raleway min-h-screen overflow-x-hidden">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="container mx-auto">{children}</main>
        <Footer />
        <MobileFooter />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
