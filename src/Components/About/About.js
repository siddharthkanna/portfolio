import React from "react";
import "./About.css";
import sid from "./sid.png";
import { Fade } from "react-awesome-reveal";

function About() {
  return (
    <Fade delay={500} duration={1000}>
      <h1 className="a-title" id="aboutt">
        02.About me
      </h1>
      <div className="about">
        <div className="a-des">
          <p>
            Hello, I'm Siddharth, currently pursuing my undergraduate studies in
            Computer Science and Information Technology. Alongside my passion
            for crafting stunning and dependable websites for the internet, I
            also have an affinity for developing engaging applications. Apart
            from my interest in cricket and fondness for movies, I'm
            enthusiastic about embracing new knowledge and continually strive to
            enhance and expand my skills.
          </p>
        </div>
        <div className="a-img">
          <img src={sid} alt="sid" width="260px" height="300px" />
        </div>
      </div>
    </Fade>
  );
}

export default About;
