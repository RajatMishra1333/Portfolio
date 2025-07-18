import React from "react";
import "./Header.css";
import { greeting, workExperiences } from "../../portfolio";
import { motion } from "framer-motion";

function Header() {
  const exp = workExperiences.viewExperiences;

  return (
    <motion.header
      className="header"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <a href="#home" className="logo">
        <span className="grey-color"> &lt;</span>
        <span className="logo-name">{greeting.username}</span>
        <span className="grey-color">/&gt;</span>
      </a>

      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>

      <ul className="menu">
        <li>
          <a href="#skills">Skills</a>
        </li>

        {exp === true && (
          <li>
            <a href="#experience">Work Experiences</a>
          </li>
        )}

        <li>
          <a href="#opensource">Projects</a>
        </li>

        <li>
          <a href="#certs">Certifications</a>
        </li>

        <li>
          <a href="#blogs">Blogs</a>
        </li>

        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>
    </motion.header>
  );
}

export default Header;
