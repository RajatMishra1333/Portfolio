import React, { useState, useEffect } from "react";
import "./Top.css";
import { motion, AnimatePresence } from "framer-motion";

export default function Top() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    window.addEventListener("load", toggleVisibility);

    // Cleanup event listeners
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("load", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          id="topButton"
          title="Go to top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <i className="fas fa-hand-point-up" aria-hidden="true"></i>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
