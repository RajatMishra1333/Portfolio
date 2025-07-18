import React from "react";
import "./BlogCard.css";
import { motion } from "framer-motion";

export default function BlogCard({ blog }) {
  function openUrlInNewTab(url) {
    if (url !== undefined) {
      const win = window.open(url, "_blank");
      win.focus();
    }
  }

  return (
    <motion.div
      className="blog-card"
      onClick={() => openUrlInNewTab(blog.url)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="blog-card-image">
        <img src={blog.image} alt={blog.title} />
      </div>

      <div className="blog-card-content">
        <div className="blog-card-header">
          <h3 className="blog-title">{blog.title}</h3>
          <span className="blog-date">{blog.date}</span>
        </div>

        <p className="blog-description">{blog.description}</p>

        <div className="blog-card-footer">
          <div className="blog-tags">
            {blog.tags &&
              blog.tags.map((tag, index) => (
                <span key={index} className="blog-tag">
                  {tag}
                </span>
              ))}
          </div>

          <div className="blog-meta">
            <span className="blog-read-time">
              {blog.readTime || "5 min read"}
            </span>
            <span className="blog-author">{blog.author || "Author"}</span>
          </div>
        </div>
      </div>

      <div className="blog-card-overlay">
        <button className="read-more-btn">Read More</button>
      </div>
    </motion.div>
  );
}
