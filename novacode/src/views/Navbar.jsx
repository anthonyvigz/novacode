import React, { useState } from "react";

export default function NavBar() {
  return (
    <nav>
      <img className="showLogo" src={top ? logowhite : logo} alt="navLogo" />
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
