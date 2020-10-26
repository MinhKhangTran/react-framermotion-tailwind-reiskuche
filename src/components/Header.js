import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const headerVariants = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: "0",
    opacity: 1,
    transition: { duration: 0.75, ease: "easeInOut" }
  }
};

const svgVariants = {
  hidden: { scale: 1.25 },
  visible: { scale: 1, transition: { duration: 1.25 } }
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut"
    }
  }
};
export default function Header() {
  return (
    <motion.section
      className="border-b-2 border-red-500 shadow-lg bg-red-300"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <Link to="/">
        <div className="flex items-center p-4">
          <motion.svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="pepper-hot"
            class="svg-inline--fa fa-pepper-hot fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-8 h-8 text-red-500"
            variants={svgVariants}
          >
            <motion.path
              fill="currentColor"
              d="M330.67 263.12V173.4l-52.75-24.22C219.44 218.76 197.58 400 56 400a56 56 0 0 0 0 112c212.64 0 370.65-122.87 419.18-210.34l-37.05-38.54zm131.09-128.37C493.92 74.91 477.18 26.48 458.62 3a8 8 0 0 0-11.93-.59l-22.9 23a8.06 8.06 0 0 0-.89 10.23c6.86 10.36 17.05 35.1-1.4 72.32A142.85 142.85 0 0 0 364.34 96c-28 0-54 8.54-76.34 22.59l74.67 34.29v78.24h89.09L506.44 288c3.26-12.62 5.56-25.63 5.56-39.31a154 154 0 0 0-50.24-113.94z"
              variants={pathVariants}
            ></motion.path>
          </motion.svg>
          <h1 className="ml-4 text-2xl text-red-500 font-mono font-semibold">
            Reiskuchen
          </h1>
        </div>
      </Link>
    </motion.section>
  );
}
