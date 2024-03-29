import { useSkills } from "../../hooks/containers/useSkills";

import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import { urlFor } from "../../services/client";
import { AppWrap, MotionWrap } from "../../wrapper";

import "./Skills.scss";

function Skills() {
  const { setUseSkills } = useSkills();
  return (
    <>
      <h2 className="head-text">Skills & Experiências</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {setUseSkills.skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name + index}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon).url()} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {setUseSkills.experiences.map((experience, index) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year + index}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work, index) => (
                  <div key={work.name + index}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                    >
                      <a
                        data-tooltip-id="my-tooltip-inline"
                        data-tooltip-content={work.desc}
                      >
                        <h4 className="bold-text">{work.name}</h4>
                        <p className="p-text">{work.company}</p>
                      </a>
                      <Tooltip
                        id="my-tooltip-inline"
                        className="skills-tooltip"
                      />
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
