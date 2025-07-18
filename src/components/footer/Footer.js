import React from "react";
import "./Footer.css";
import { motion } from "framer-motion";
import emoji from "react-easy-emoji";

export default function Footer() {
  return (
    <motion.div
      className="footer-div"
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <p className="footer-text">{emoji("Made by RAJAT MISHRA")}</p>
    </motion.div>
  );
}
