import Footer from "./footer";
import MobileFooter from "./MobileFooter";
import Navbar from "./navbar";
import PropTypes from "prop-types";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 font-Raleway min-h-screen">
      <Navbar />
      <main className="container mx-auto">{children}</main>
      <Footer />
      <MobileFooter />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
