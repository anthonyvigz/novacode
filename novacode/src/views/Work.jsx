import React from "react";
import { motion } from "framer-motion";

export default function Work() {
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
    >
      <motion.h2
        variants={item}
        transition={{
          ease: "easeIn",
          type: "spring",
          stiffness: 100,
        }}
        exit="hidden"
      >
        WORK IT
      </motion.h2>
    </motion.div>
  );
}
