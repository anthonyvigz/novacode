import React from "react";
import NavBar from "./views/Navbar";
import Home from "./views/Home";
import Work from "./views/Work";
import "./styles/home.scss";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="app">
      <NavBar />
      <div className="header">
        <div class="elementor-shape elementor-shape-top" data-negative="false">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path class="elementor-shape-fill" d="M0,6V0h1000v100L0,6z"></path>
          </svg>{" "}
        </div>
        <AnimatePresence>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Home} />
            <Route exact path="/work" component={Work} />
          </Switch>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
