import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import "./Hero.scss";

const Hero = () => {
  return (
    <section id="home" className="app__header app__flex">
      <div className="app__header-cta">
        <p className="cta-subtitle">Ghizlane EL ATMANI</p>
        <h1 className="cta-title">
          Front end <span>developer</span>
        </h1>

        <p className="cta-text">
          I like to design and create solid and scalable frontend products with
          great user experiences.
        </p>

        <div className="cta-btn">
          <button className="btn-white">
            <FaCloudDownloadAlt />
            Resume
          </button>
          <button className="btn-glass">Contact me</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
