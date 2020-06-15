import React from "react";
import "../styles/home.scss";

export default function Home() {
  return (
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
      <div className="homeBanner">
        <h1>
          We write code that
          <br />
          works for your business.
        </h1>
        <div className="whatWeDo">
          <div className="wwdHeader">
            <h2>Solutions</h2>
            <h3>Customize Your Package</h3>
          </div>
          <div className="solutionsBlock">
            <div className="listedSolutions"></div>
            <div className="additionalSolutions"></div>
          </div>
          <button>Quote</button>
        </div>
      </div>
    </div>
  );
}
