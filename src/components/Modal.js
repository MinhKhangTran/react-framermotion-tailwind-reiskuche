import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};
const modalVariants = {
  hidden: { y: "-100vh" },
  visible: {
    y: "200px",
    transition: {
      type: "spring",
      stiffness: "300",
      ease: "easeOut",
      duration: "1"
    }
  }
};
export default function Modal({ showModal, setShowModal }) {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed top-0 left-0 h-screen w-screen z-10"
          style={{ background: "rgba(0,0,0,0.5)" }}
        >
          <motion.div className="flex justify-center" variants={modalVariants}>
            <div className="bg-red-100 inline-block rounded p-4 text-center">
              <h1 className="text-red-400">
                Deine Bestellung wurde entgegengenommen
              </h1>
              <Link to="/">
                <button className="bg-red-400 text-red-100 px-3 rounded-full py-1 mt-6">
                  Zurück zur Homepage
                </button>
              </Link>
            </div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
