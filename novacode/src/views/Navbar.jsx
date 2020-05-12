import React from "react";
import "../styles/navbar.scss";

export default function NavBar() {
  return (
    <nav>
      <h1>novacode</h1>
      <div className="links">
        <a href="#home">HOME</a>
        <a href="#services">SERVICES</a>
        <a href="#gallery">GALLERY</a>
        <a href="#reviews-">REVIEWS</a>
        <a href="#quote">QUOTE</a>
      </div>
    </nav>
  );
}
