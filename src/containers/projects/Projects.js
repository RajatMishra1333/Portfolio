import React, { lazy, Suspense } from "react";
import "./Project.css";
import Button from "../../components/button/Button";
import Loading from "../loading/Loading";
import { socialMediaLinks } from "../../portfolio";
import { motion } from "framer-motion";

const GithubRepoCard = lazy(() =>
  import("../../components/githubRepoCard/GithubRepoCard")
);

export default function Projects() {
  const repo = [
    {
      node: {
        id: "1",
        name: "My Portfolio",
        description: "Personal portfolio website built using React",
        url: "https://github.com/RajatMishra1333/portfolio",
        diskUsage: 512,
        primaryLanguage: {
          name: "JavaScript",
          color: "#f1e05a",
        },
      },
    },
    {
      node: {
        id: "2",
        name: "Live Location",
        description: "A real-time live location tracking app",
        url: "https://github.com/RajatMishra1333/Live-Location",
        diskUsage: 620,
        primaryLanguage: {
          name: "Node.js",
          color: "#43853d",
        },
      },
    },
    {
      node: {
        id: "3",
        name: "Database Site",
        description: "A basic database management site project",
        url: "https://github.com/RajatMishra1333/Databasesite",
        diskUsage: 780,
        primaryLanguage: {
          name: "JavaScript",
          color: "#f1e05a",
        },
      },
    },
    {
      node: {
        id: "4",
        name: "Todo List 2",
        description: "A to-do list app with advanced features",
        url: "https://github.com/RajatMishra1333/Todolist2",
        diskUsage: 410,
        primaryLanguage: {
          name: "JavaScript",
          color: "#f1e05a",
        },
      },
    },
  ];

  return (
    <Suspense fallback={<Loading />}>
      <motion.div
        className="main"
        id="opensource"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <h1 className="project-title">Projects</h1>

        <motion.div
          className="repo-cards-div-main"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {repo.map((v, index) => (
            <motion.div
              key={v.node.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <GithubRepoCard repo={v} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Button
            text={"More Projects"}
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
        </motion.div>
      </motion.div>
    </Suspense>
  );
}
