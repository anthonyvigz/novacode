import React from "react";
import "../styles/home.scss";
import TextLoop from "react-text-loop";
import logo from "../img/NOVACODELOGO.png";
import { motion } from "framer-motion";

export default function Home() {
  // variants for parent animation
  const parentList = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };

  // variants for word animation
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -55 },
  };
  return (
    <motion.div
      variants={parentList}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="homeBanner"
    >
      <motion.div
        variants={item}
        transition={{
          ease: "easeIn",
          type: "spring",
          stiffness: 100,
        }}
        exit="hidden"
        className="leftBanner"
      >
        <img src={logo} width="250" alt="homelogo" />
        <h1>
          We write code that
          <br />
          works for your
          <br />
          <TextLoop springConfig={{ stiffness: 180, damping: 15 }}>
            <h3>business.</h3>
            <h3>website.</h3>
            <h3>application.</h3>
            <h3>users.</h3>
            <h3>database.</h3>
            <h3>online store.</h3>
          </TextLoop>
        </h1>
        <button className="workButton">
          Our Work <i className="fa fa-arrow-right"></i>
        </button>
      </motion.div>
      <motion.div
        variants={item}
        transition={{
          ease: "easeIn",
          type: "spring",
          stiffness: 100,
        }}
        exit="hidden"
        className="whatWeDo"
      >
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
      </motion.div>
    </motion.div>
  );
}
