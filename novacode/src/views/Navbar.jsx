import React, { useState } from "react";
import "../styles/navbar.scss";
import { NavLink, useLocation } from "react-router-dom";

export default function NavBar() {
  // location
  const location = useLocation();

  return (
    <>
      <nav>
        <h1>
          <span>nova</span>code
        </h1>
        <nav className="links">
          <NavLink exact activeClassName="clickedDash" to="/work">
            Work
          </NavLink>
          <NavLink exact activeClassName="clickedDash" to="/">
            Tutoring
          </NavLink>
          <a href="#">Videos</a>
          <a href="#">Contact</a>
          <a href="#">About Us</a>
        </nav>
        <a className="rightNavButton" href="#">
          Blog
          <i class="fa fa-rss" aria-hidden="true"></i>
        </a>
      </nav>
    </>
  );
}
