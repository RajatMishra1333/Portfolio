import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { motion } from "framer-motion";
import emoji from "react-easy-emoji";

export default function Greeting() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="greet-main"
      id="greeting"
    >
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text">
              {greeting.title}{" "}
              <span className="wave-emoji">{emoji("👋")}</span>
            </h1>
            <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
            <SocialMedia />
            <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button
                text="See my resume"
                newTab={true}
                href={greeting.resumeLink}
              />
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="greeting-image-div"
        >
          <img
            src={require("../../assets/images/manOnTable.png")}
            alt="Man on table"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
