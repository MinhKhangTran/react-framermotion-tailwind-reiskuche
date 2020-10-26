import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const buttonVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, delay: 2 } },
  hover: { scale: 1.05, transition: { duration: 0.3, yoyo: Infinity } }
};
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1.5 }
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" }
  }
};
export default function Home() {
  return (
    <motion.section
      className="grid place-items-center w-screen"
      style={{ height: "75vh" }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="text-center text-red-400 font-bold text-2xl md:text-3xl">
        <motion.h1
          initial={{ y: "-100vh", opacity: 0 }}
          animate={{
            y: "0",
            opacity: 1,
            transition: { duration: 1.25, delay: 1 }
          }}
        >
          Willkommen
        </motion.h1>
        <motion.h1
          initial={{ y: "100vh", opacity: 0 }}
          animate={{
            y: "0",
            opacity: 1,
            transition: { duration: 1.5, delay: 1 }
          }}
        >
          Lass uns 떡볶이 machen
        </motion.h1>
        <Link to="/schaerfe">
          <motion.button
            className="border border-red-500 px-3 py-1 mt-4 rounded-full hover:bg-red-500 hover:text-red-100"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            Los Geht's
          </motion.button>
        </Link>
      </div>
    </motion.section>
  );
}
