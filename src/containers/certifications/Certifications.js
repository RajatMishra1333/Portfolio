import './Certifications.css';
import { certifications } from "../../portfolio";
import CertificationCard from '../../components/certificationCard/CertificationCard';
import { motion } from "framer-motion";

export default function Certifications() {
  return (
    <motion.div
      className="main"
      id="certs"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
    >
      <h1 className="cert-header-title">Certifications</h1>

      <motion.div
        className="cert-main-div"
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
        <div className="cert-text-div">
          {certifications.certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <CertificationCard certificate={cert} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

