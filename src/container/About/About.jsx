import React from "react";
import "./About.scss";
import { images } from "../../constants";

const About = () => {
  const skills = [
    {
      id: "1",
      name: "ReactJs",
      logo: images.react,
    },
    {
      id: "2",
      name: "Javascript",
      logo: images.javascript,
    },
    {
      id: "3",
      name: "HTML5",
      logo: images.html,
    },
    {
      id: "4",
      name: "CSS3",
      logo: images.css,
    },
    {
      id: "5",
      name: "Sass",
      logo: images.sass,
    },
    {
      id: "6",
      name: "Java",
      logo: images.java,
    },
    {
      id: "7",
      name: "Spring",
      logo: images.spring,
    },
    {
      id: "8",
      name: "Android",
      logo: images.android,
    },
    {
      id: "9",
      name: "MySQL",
      logo: images.mysql,
    },
    {
      id: "10",
      name: "Figma",
      logo: images.figma,
    },
    {
      id: "11",
      name: "Git",
      logo: images.git,
    },
  ];

  return (
    <section id="aboutme" className="app__aboutme">
      <h2 className="heading-2 mb--3">
        About me <span>&</span> Skills
      </h2>

      <div className="app__aboutme-grid">
        <div className="app__aboutme-profile mb--2">
          <h3 className="profile-title mb--05">👋 Hello, I'm Ghizlane</h3>
          <p className="body-1">
            I’m passionate about building things for the web. I started my
            journey as an android developer after high school. I found a
            tutorial on how to code a basic application with java, and once that
            happened, I was completely hooked to the world of computers. <br />
            <br /> I learn how to code by studying multiple field like database
            structure, how works a backend application with Java and his
            framework Spring. <br />
            <br />
            Lately, I’ve discovered my passion for the world of web development
            and the beauty behind building useful websites like the one you will
            find in this portfolio. I’m now looking for a junior dev position to
            finally kick start my career and learn among professionals.
          </p>
        </div>

        <div className="app__aboutme-skills">
          {skills.map((item, index) => {
            return (
              <div className="skill" key={index}>
                <img className="skill-logo" src={item.logo} alt="" />
                <p className="skill-name">{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
