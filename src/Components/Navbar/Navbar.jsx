import React, { useState } from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Packages from "./Packages/Packages";
import About from "./About/About";
import Contact from "./Contact/Contact";
import BookNow from "./BookNow/BookNow";
// import Layout from "../Layout";
import "./navbar.css";
import { MdExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  const [active, setActive] = useState("navBar");
  // Function to toggle navBar
  const showNav = () => {
    setActive("navBar activeNavbar");
  };
  // Function to remove navBar
  const removeNavbar = () => {
    setActive("navBar");
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <MdExplore className="icon" /> iWander
            </h1>
          </a>
        </div>

        <div className={active}>
          <BrowserRouter>
            <ul className="navLists flex">
              <li className="navItem">
                <Link to="/" className="navLink">
                  Home
                </Link>
              </li>

              <li className="navItem">
                <Link to="/packages" className="navLink">
                  Packages
                </Link>
              </li>

              <li className="navItem">
                <Link to="/about" className="navLink">
                  About
                </Link>
              </li>

              <li className="navItem">
                <Link to="/contact" className="navLink">
                  Contact
                </Link>
              </li>

              <button className="btn">
                <Link to="/book-now">BOOK NOW</Link>
              </button>
            </ul>

            <Switch>
              {/* <Route exact path="/" component={Layout} /> */}
              <Route path="/packages" component={Packages} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/book-now" component={BookNow} />
            </Switch>
          </BrowserRouter>

          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
