import React from "react";
import "../styles/navbar.scss";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <span>nova</span>code
      </h1>
      <div className="links">
        <a href="#">Products</a>
        <a href="#">Solutions</a>
        <a href="#">Pricing</a>
      </div>
      <div className="navButtons">
        <button className="loginButton">Log In</button>
        <button className="quoteButton">Get a Quote</button>
      </div>
    </nav>
  );
}
