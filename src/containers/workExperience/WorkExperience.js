import React from "react";
import "./WorkExperience.css";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { workExperiences } from "../../portfolio";
import { Fade } from "react-awesome-reveal";
export default function WorkExperience() {
    if (workExperiences.viewExperiences) {
        return (
            <div id="experience">
                <Fade bottom duration={1000} distance="20px">
                    <div className="experience-container" id="workExperience">
                        <div>
                            <h1 className="experience-heading">Experiences</h1>
                            <div className="experience-cards-div">
                                {workExperiences.experience.map((card, idx) => (
                                    <Fade
                                        key={idx}
                                        direction="up"
                                        duration={600}
                                        delay={idx * 150}
                                        triggerOnce
                                    >
                                        <ExperienceCard
                                            cardInfo={{
                                                company: card.company,
                                                desc: card.desc,
                                                date: card.date,
                                                companylogo: card.companylogo,
                                                role: card.role,
                                                descBullets: card.descBullets
                                            }}
                                        />
                                    </Fade>
                                ))}
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        );
    }
    return null;
}
