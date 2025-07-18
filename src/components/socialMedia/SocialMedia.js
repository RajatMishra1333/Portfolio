import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";
import { motion } from "framer-motion";

export default function SocialMedia() {
  const iconVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  return (
    <div className="social-media-div">
      {socialMediaLinks.github && (
        <motion.a
          href={socialMediaLinks.github}
          className="icon-button github"
          target="_blank"
          rel="noreferrer"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={iconVariants}
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="fab fa-github"></i>
          <span></span>
        </motion.a>
      )}

      {socialMediaLinks.linkedin && (
        <motion.a
          href={socialMediaLinks.linkedin}
          className="icon-button linkedin"
          target="_blank"
          rel="noreferrer"
          custom={1}
          initial="hidden"
          animate="visible"
          variants={iconVariants}
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="fab fa-linkedin-in"></i>
          <span></span>
        </motion.a>
      )}

      {socialMediaLinks.gmail && (
        <motion.a
          href={`mailto:${socialMediaLinks.gmail}`}
          className="icon-button google"
          custom={2}
          initial="hidden"
          animate="visible"
          variants={iconVariants}
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="fab fa-google"></i>
          <span></span>
        </motion.a>
      )}

      {socialMediaLinks.facebook && (
        <motion.a
          href={socialMediaLinks.facebook}
          className="icon-button facebook"
          target="_blank"
          rel="noreferrer"
          custom={3}
          initial="hidden"
          animate="visible"
          variants={iconVariants}
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="fab fa-facebook-f"></i>
          <span></span>
        </motion.a>
      )}

      {socialMediaLinks.twitter && (
        <motion.a
          href={socialMediaLinks.twitter}
          className="icon-button twitter"
          target="_blank"
          rel="noreferrer"
          custom={4}
          initial="hidden"
          animate="visible"
          variants={iconVariants}
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="fab fa-twitter"></i>
          <span></span>
        </motion.a>
      )}
    </div>
  );
}
