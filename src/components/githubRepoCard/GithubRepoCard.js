import React from "react";
import "./GithubRepoCard.css";
import { motion } from "framer-motion";

export default function GithubRepoCard({ repo }) {
  function openRepoinNewTab(url) {
    const win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
    >
      <div
        className="repo-card-div"
        key={repo.node.id}
        onClick={() => openRepoinNewTab(repo.node.url)}
      >
        <div className="repo-name-div">
          <svg
            aria-hidden="true"
            className="octicon"
            height="20"
            role="img"
            viewBox="0 0 12 16"
            width="14"
          >
            <path
              fillRule="evenodd"
              d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
            ></path>
          </svg>
          <p className="repo-name">{repo.node.name}</p>
        </div>

        <p className="repo-description">{repo.node.description}</p>

        <div className="repo-stats">
          <div className="repo-left-stat">
            <span>
              <div
                className="language-color"
                style={{ backgroundColor: repo.node.primaryLanguage.color }}
              ></div>
              <p>{repo.node.primaryLanguage.name}</p>
            </span>
          </div>

          <div className="repo-right-stat">
            <p>{repo.node.diskUsage} KB</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
