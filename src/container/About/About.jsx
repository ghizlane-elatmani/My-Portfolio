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
      <h2>About me & Skills</h2>

      <div className="app__aboutme-grid">
        <div className="app__aboutme-profile">
          <h3 className="profile-title">👋 Hi, I'm Ghizlane</h3>
          <p className="profile-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum illo
            aliquam cupiditate ab. Sed expedita culpa provident, quas vel
            distinctio, id dolorum impedit voluptas quae nisi aliquam magnam
            consequatur! Quas facilis debitis asperiores fugit excepturi
            laudantium, consectetur possimus. Dolorem, maiores?
          </p>
        </div>

        <div className="app__aboutme-skills">
          {skills.map((item) => {
            return (
              <div className="skill">
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
