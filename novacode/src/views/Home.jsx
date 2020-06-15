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
            <div className="listedSolutions">
              <li className="solution">
                <i className="fas fa-check"></i>
                <p>Website Design</p>
              </li>
              <li className="solution">
                <i className="fas fa-check"></i>
                <p>Web Applications</p>
              </li>
              <li className="solution">
                <i className="fas fa-check"></i>
                <p>Mobile Responsiveness</p>
              </li>
              <li className="solution">
                <i className="fas fa-check"></i>
                <p>Custom Business Software</p>
              </li>
              <li className="solution">
                <i className="fas fa-check"></i>
                <p>System Design Integration</p>
              </li>
              <li className="solution">
                <i className="fas fa-check"></i>
                <p>Database Management</p>
              </li>
              <li className="solution">
                <i className="fas fa-check"></i>
                <p>User Authentication</p>
              </li>
              <li className="solution">
                <i className="fas fa-check"></i>
                <p>Video Editing</p>
              </li>
            </div>
            <div className="additionalSolutions">
              <h4>Additional Solutions:</h4>
              <div className="addSolution">
                <img
                  src="https://mk0placer5c8hgdh2ll.kinstacdn.com/wp-content/uploads/2019/12/icon1.svg"
                  alt="Custom Reports"
                />
                <p>Copywriting/ Scriptwriting</p>
              </div>
              <div className="addSolution">
                <img
                  src="https://mk0placer5c8hgdh2ll.kinstacdn.com/wp-content/uploads/2019/12/icon2.svg"
                  alt="code"
                />
                <p>Framework Tutorials</p>
              </div>
              <div className="addSolution">
                <img
                  src="https://mk0placer5c8hgdh2ll.kinstacdn.com/wp-content/uploads/2019/12/icon3.svg"
                  alt="block"
                />
                <p>Algorithmic Services</p>
              </div>
            </div>
          </div>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}
