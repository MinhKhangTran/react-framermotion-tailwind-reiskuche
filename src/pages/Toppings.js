import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const buttonVariants = {
  hover: { scale: 1.05, transition: { duration: 0.3, yoyo: Infinity } }
};

const sectionVariants = {
  hidden: { opacity: 0, x: "100vw" },
  visible: {
    opacity: 1,
    x: "0",
    transition: { type: "spring", duration: 1 }
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" }
  }
};
const nextVariants = {
  hidden: {
    x: "-100vw"
  },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 120 }
  }
};
export default function Toppings({ rice, addToppings }) {
  const toppings = ["Ramen", "Fischkuchen", "Eier", "Reis", "Mehr Reiskuchen"];
  return (
    <motion.section
      className="grid place-items-center w-screen"
      style={{ height: "75vh" }}
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="text-center text-red-400 font-bold text-2xl md:text-3xl">
        <h1>Was möchtest du für Toppings?</h1>
        <ul className="font-normal">
          {toppings.map((item) => {
            return (
              <motion.li
                className={`${
                  rice.toppings.includes(item)
                    ? "cursor-pointer hover:text-red-700 text-red-900 font-semibold"
                    : "cursor-pointer hover:text-red-700"
                }`}
                key={item}
                whileHover={{ scale: 1.15, originX: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => {
                  addToppings(item);
                }}
              >
                <span>{item}</span>
              </motion.li>
            );
          })}
        </ul>

        <motion.div variants={nextVariants} initial="hidden" animate="visible">
          <Link to="/order">
            <motion.button
              className="border border-red-500 px-3 py-1 mt-4 rounded-full hover:bg-red-500 hover:text-red-100"
              variants={buttonVariants}
              whileHover="hover"
            >
              Bestellen
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
