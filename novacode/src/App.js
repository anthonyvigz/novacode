import React from "react";
import NavBar from "./views/Navbar";
import Home from "./views/Home";
import "./styles/home.scss";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
