import React from "react";
import "./SoftwareSkill.css";
import { skillsSection } from "../../portfolio";
import { motion } from "framer-motion";

export default function SoftwareSkill() {
  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <div className="software-skills-main-div">
      <ul className="dev-icons">
        {skillsSection.softwareSkills.map((skill, index) => (
          <motion.li
            className="software-skill-inline"
            key={skill.skillName || index}
            name={skill.skillName}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={iconVariants}
            whileHover={{ scale: 1.2, rotate: 5 }}
          >
            <span
              className="iconify"
              data-icon={skill.classname}
              style={skill.style}
              data-inline="false"
            ></span>
            <p>{skill.skillName}</p>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
