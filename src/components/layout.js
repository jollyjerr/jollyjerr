import Footer from "./footer";
import MobileFooter from "./MobileFooter";
import Navbar from "./navbar";
import PropTypes from "prop-types";
import React from "react";

export const DarkModeContext = React.createContext(false);

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = React.useState(false); // TODO: get initial value from local storage
  return (
    <DarkModeContext.Provider value={darkMode}>
      <div className={darkMode ? "dark" : ""}>
        <div className="bg-gray-100 dark:bg-gray-800 font-Raleway min-h-screen overflow-x-hidden">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <main className="container mx-auto">{children}</main>
          <Footer />
          <MobileFooter />
        </div>
      </div>
    </DarkModeContext.Provider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
