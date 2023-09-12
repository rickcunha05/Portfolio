import { useWork } from "../../hooks/containers/useWork";

import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { urlFor } from "../../services/client";
import { AppWrap, MotionWrap } from "../../wrapper";

import "./Work.scss";

function Work() {
  const { setUseWork } = useWork();
  return (
    <>
      <h2 className="head-text">
        Minha seção de  <span>Portfólio </span> criativo
      </h2>
      <div className="app__work-filter">
        {["All", "Frontend", "Backend", "Mobile Apps"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => setUseWork.handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                setUseWork.activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>
      <motion.div
        animate={setUseWork.animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {setUseWork.filterWork.length === 0 ? (
          <h1>Ainda estamos construindo esse espaço.</h1>
        ) : (
          setUseWork.filterWork.map((work, index) => (
            <div className="app__work-item app__flex" key={index}>
              <div className="app__work-img app__flex">
                <img src={urlFor(work.imgUrl).url()} alt={work.name} />
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="app__work-hover app__flex"
                >
                  <a href={work.projectLink} target="_blanc" rel="noreferrer">
                    <motion.div
                      whileHover={{ scale: [0, 1] }}
                      whileInView={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a href={work.codeLink} target="_blanc" rel="noreferrer">
                    <motion.div
                      whileHover={{ scale: [0, 1] }}
                      whileInView={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>
              <div className="app__work-content app__flex">
                <a
                  href={work.projectLink}
                  target="_blanc"
                  rel="noreferrer"
                  className="app__link-title"
                >
                  <h4 className="bold-text p-text">{work.title}</h4>
                </a>
                <p className="p-text" style={{ marginTop: 10 }}>
                  {work.description}
                </p>
                <div className="app__work-tag app__flex">
                  <p className="p-text">{work.tags[0]}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </motion.div>
    </>
  );
}

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
