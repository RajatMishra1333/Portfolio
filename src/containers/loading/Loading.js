// Loading.jsx

import React from "react";
import { Code2, Database, Server, Globe } from "lucide-react";
import "./loading.css"; // Make sure this path is correct

// Array to hold the tech stack data - easy to add/remove items here!
const techStack = [
  {
    id: "mongo",
    Icon: Database,
    label: "MongoDB",
    textColor: "text-green-400",
  },
  {
    id: "express",
    Icon: Server,
    label: "Express",
    textColor: "text-gray-400",
  },
  {
    id: "react",
    Icon: Globe,
    label: "React",
    textColor: "text-blue-400",
  },
  {
    id: "node",
    Icon: Code2,
    label: "Node.js",
    textColor: "text-green-500",
  },
];

function Loading() {
  return (
    <div className="loader-container">
      {/* Stack Icons - Now generated dynamically */}
      <div className="stack-icons">
        {techStack.map((tech) => (
          <div className="icon-container" key={tech.id}>
            <div className={`stack-icon ${tech.id}`}>
              {/* The Icon component is now dynamic */}
              <tech.Icon className="w-8 h-8 text-white" />
            </div>
            {/* The label and color are also dynamic */}
            <p className={`icon-label ${tech.textColor}`}>{tech.label}</p>
          </div>
        ))}
      </div>

      {/* Loading Bar */}
      <div className="loading-bar-container">
        <div className="loading-bar"></div>
      </div>

      {/* Loading Text */}
      <h2 className="loading-text">Loading Portfolio</h2>
      <p className="subtitle">Developer</p>
    </div>
  );
}

export default Loading;