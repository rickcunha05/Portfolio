import { motion } from "framer-motion";
import { useAbout } from "../../hooks/containers/useAbout";

import "./About.scss";
import { urlFor } from "../../services/client";
import { AppWrap, MotionWrap } from "../../wrapper";

function About() {
  const { setUseAbout } = useAbout();

  return (
    <>
      <h2 className="head-text">
        UM BOM 
        <span> NEGÓCIO </span>
        <br />
        COMEÇA COM UM <br/>
        <span> BOM DESENVOLVEDOR </span>
      </h2>
      <div className="app__profiles">
        {setUseAbout.abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl).url()} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
