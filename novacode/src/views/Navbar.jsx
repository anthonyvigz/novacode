import React, { useState } from "react";
import "../styles/navbar.scss";

export default function NavBar() {
  // this sets the side navbar
  const [sideNav, setNav] = useState(false);

  // function for navbar
  const showNav = (event) => {
    event.preventDefault();

    setNav(!sideNav);
  };

  return (
    <>
      <nav>
        <h1>
          <span>nova</span>code
        </h1>
        <nav className="links">
          <a href="#">Pricing</a>
          <a href="#">Services</a>
          <a href="#">Work</a>
          <a href="#">Contact</a>
          <a href="#">About Us</a>
        </nav>
        <i onClick={showNav} className="fas fa-bars"></i>
      </nav>
      <div className="sideNav" style={!sideNav ? { right: "-200px" } : null}>
        <button onClick={showNav}>X</button>
      </div>
    </>
  );
}
