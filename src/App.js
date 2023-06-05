import React from "react";
import "./app.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/Navbar/About/About";
import Packages from "./Components/Navbar/Packages/Packages";
import Contact from "./Components/Navbar/Contact/Contact";
import { BrowserRouter, Switch, Route } from "react-router-dom/cjs/react-router-dom";
import BookNow from "./Components/Navbar/BookNow/BookNow";

const App = () => {
  let component
  switch (window.location.pathname) {
    case "/about":
      component = <About />
      break
      case "/packages":
        component = <Packages />
        break
      case "/contact":
        component = <Contact />
        break
  }
  return (
    <BrowserRouter>
      <Navbar />
      {component}
      <Switch>
              {/* <Route exact path="/" component={Layout} /> */}
              <Route exact path="/" component={Home} />
              <Route exact path="/packages" component={Packages} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/book-now" component={BookNow} />
      </Switch>
   </BrowserRouter>
  );
};
export default App;
