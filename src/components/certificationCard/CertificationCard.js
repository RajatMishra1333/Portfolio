import React, { Component } from 'react';
import "./CertificationCard.css";
import { motion } from "framer-motion";

class CertificationCard extends Component {
    render() {
        const certificate = this.props.certificate;
        return (
            <motion.div
                className="cert-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1 }}
            >
                <div className="content">
                    <a href={certificate.certificate_link} target="_blank" rel="noopener noreferrer">
                        <div className="content-overlay"></div>
                        <div className="cert-header" style={{ backgroundColor: certificate.color_code }}>
                            <img
                                className="logo_img"
                                src={require(`../../assets/images/${certificate.logo_path}`)}
                                alt={certificate.alt_name}
                            />
                        </div>
                        <div className="content-details fadeIn-top">
                            <h3 className="content-title">Certificate</h3>
                        </div>
                    </a>
                </div>
                <div className="cert-body">
                    <h2 className="cert-body-title">{certificate.title}</h2>
                    <h3 className="cert-body-subtitle">{certificate.subtitle}</h3>
                </div>
            </motion.div>
        );
    }
}

export default CertificationCard;
