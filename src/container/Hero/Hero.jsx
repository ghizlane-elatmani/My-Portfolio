import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import "./Hero.scss";

const Hero = () => {
  return (
    <section id="home" className="app__header flex-center">
      <div className="app__header-cta">
        <p className="subtitle-1 mb--05">Ghizlane EL ATMANI</p>
        <h1 className="heading-1 mb--2">
          Front end <span>developer</span>
        </h1>

        <p className="body-1 mb--105">
          I like to design and create solid and scalable frontend products with
          great user experiences.
        </p>

        <div className="cta-btn">
          <a href="src/assets/resume.pdf" download className="btn btn--white">
            <FaCloudDownloadAlt />
            Resume
          </a>
          <a href="#contact" className="btn btn--glass">
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
