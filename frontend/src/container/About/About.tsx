import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { About } from "../../@types/About";

import "./About.scss";
import { urlFor, client } from "../../client";

export default function About() {
  const [abouts, setAbouts] = useState<About[]>([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data: About[]) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        I know that
        <span>Good Development</span>
        <br />
        means
        <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
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
