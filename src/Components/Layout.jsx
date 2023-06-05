import React from "react";
import Home from "./Home/Home";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Main />
      <Footer />
    </>
  );
};

export default Layout;
