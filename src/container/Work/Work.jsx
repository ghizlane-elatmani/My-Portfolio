import React, { useEffect, useState } from "react";
import "./Work.scss";
import { FaEye, FaGithub, FaImages } from "react-icons/fa";
import { Projects } from "./Projects";
import { motion } from "framer-motion";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(Projects);
    handleWorkFilter();
  }, []);

  const handleWorkFilter = (item) => {
    if (item === "All") {
      setActiveFilter(item);
      setProjects(Projects);
    }

    if (item === "React JS") {
      setActiveFilter(item);
      const newList = Projects.filter((it) => it.tags == "react");
      setProjects(newList);
    }

    if (item === "Responsive") {
      setActiveFilter(item);
      const newList = Projects.filter((it) => it.tags == "responsive");
      setProjects(newList);
    }
  };

  return (
    <section id="work" className="app__work">
      <h2 className="heading-2 mb--3">
        Recent <span>Projects</span>
      </h2>

      <div className="app__work-filter mb--2">
        {/* IN THE FUTUTRE FULLSTACK APP WILL BE ADDED */}
        {["React JS", "Responsive", "All"].map((item, index) => (
          <div
            className={`app__work-filter-item flex-center ${
              activeFilter === item ? "item-active" : ""
            }`}
            key={index}
            onClick={() => handleWorkFilter(item)}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="app__work-portfolio">
        {projects.map((item, index) => (
          <div key={index} className="app__work-project">
            <img
              className="project-img"
              src={`src/assets/${item.name}.png`}
              alt=""
            />

            <p className="project-description">{item.description}</p>

            <div className="project-btn">
              <a href={item.urlDemo} className="btn btn--white">
                <FaEye />
                DEMO
              </a>
              <a href={item.urlCode} className="btn btn--white">
                <FaGithub />
                CODE
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
