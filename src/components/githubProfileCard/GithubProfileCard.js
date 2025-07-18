import "./GithubProfileCard.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactInfo } from "../../portfolio";
import emoji from "react-easy-emoji";
import { motion } from "framer-motion";

export default function GithubProfileCard({ prof }) {
  const isHireable = prof.hireable ? "Yes" : "No";

  return (
    <motion.div
      className="main"
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
    >
      <h1 className="prof-title">Reach Out to me!</h1>
      <div className="row">
        <motion.div
          className="main-content-profile"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="blog-header">
            <p className="subTitle blog-subtitle">{contactInfo.subtitle}</p>
          </div>
          <h2 className="bio-text">{emoji(String(prof.bio))}</h2>

          {prof.location && (
            <div className="location-div">
              <span className="desc-prof">
                <svg
                  viewBox="0 0 12 16"
                  version="1.1"
                  width="20"
                  height="18"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
                  ></path>
                </svg>
                {prof.location}
              </span>
            </div>
          )}

          <div className="opp-div">
            <span className="desc-prof">Open for opportunities: {isHireable}</span>
          </div>

          <SocialMedia />
        </motion.div>

        <motion.div
          className="image-content-profile"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <img
            src={prof.avatarUrl}
            alt={prof.name}
            className="profile-image"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
