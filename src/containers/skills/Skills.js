import React from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skillsSection } from "../../portfolio";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <div className="main" id="skills">
      <div className="skills-main-div">
        <motion.div
          className="skills-image-div"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <img
            alt="Rajat Working"
            src={require("../../assets/images/developerActivity.png")}
          />
        </motion.div>

        <motion.div
          className="skills-text-div"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <h1 className="skills-heading">{skillsSection.title}</h1>
          <p className="subTitle skills-text-subtitle">
            {skillsSection.subTitle}
          </p>
          <SoftwareSkill />
          <div>
            {skillsSection.skills.map((skill, index) => (
              <p key={index} className="subTitle skills-text">
                {skill}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
