import React from "react";
import { motion } from "framer-motion";
import WorkPiece from "./WorkPiece";
import "../styles/work.scss";

export default function Work() {
  // variants for parent animation
  const parentList = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const imagelinks = [
    "https://i.imgur.com/mrWcNoF.png",
    "https://i.imgur.com/ydYqINx.png",
    "https://i.imgur.com/VLRCfXM.png",
    "https://i.imgur.com/jyXGXIA.png",
    "https://i.imgur.com/igevTeB.png",
    "https://i.imgur.com/LxyNHq3.png",
    "https://i.imgur.com/ZA2u5Yc.png",
    "https://i.imgur.com/0gXCgkE.png",
  ];

  return (
    <motion.div
      variants={parentList}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="allWork"
    >
      {imagelinks.map((link, index) => {
        return <WorkPiece link={link} key={index} />;
      })}
    </motion.div>
  );
}
