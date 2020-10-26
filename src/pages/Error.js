import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function Error() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };
  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3, yoyo: Infinity } }
  };
  return (
    <motion.section
      className="text-4xl text-red-500 grid place-items-center h-screen w-screen"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="text-center">
        <h1>Es tut mir Leid, diese Seite gibt es nicht</h1>
        <Link className="flex justify-center text-xl" to="/">
          <motion.button
            className="border border-red-500 px-3 py-1 mt-4 rounded-full hover:bg-red-500 hover:text-red-100"
            variants={buttonVariants}
            whileHover="hover"
          >
            Zurück zur Homepage
          </motion.button>
        </Link>
      </div>
    </motion.section>
  );
}
