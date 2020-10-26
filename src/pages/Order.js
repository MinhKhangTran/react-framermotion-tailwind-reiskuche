import React from "react";
import { motion } from "framer-motion";
const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
    transition: {
      staggerChildren: 0.5
    }
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.4,
      when: "beforeChildren"
    }
  }
};

const childVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
};
export default function Order({ rice, setShowModal }) {
  React.useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  }, [setShowModal]);

  return (
    <motion.section
      className="grid place-items-center w-screen"
      style={{ height: "75vh" }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        className="text-center text-red-400 font-bold text-2xl md:text-3xl"
        variants={childVariants}
      >
        <h1>Danke für deine Bestellung!</h1>
        <p className="text-xl font-normal">
          Einmal Reiskuchen mit der Schärfe <br></br> {rice.schaerfe}
        </p>
        <p className="text-xl font-normal">und folgende Toppings:</p>
        <motion.div variants={childVariants}>
          {rice.toppings.map((topping) => {
            return <li className="text-xl font-normal">{topping}</li>;
          })}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
