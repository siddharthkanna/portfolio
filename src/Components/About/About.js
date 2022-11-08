import React from "react";
import "./About.css";
import sid from "./sid.png";
import { Fade } from "react-awesome-reveal";

function About() {
  return (
    <Fade delay={500} duration={1000}  >
      <h1 className="a-title" id="aboutt" >02.About me</h1>
      <div className="about">
        <div className="a-des">
          <p>
            Hello! I'm Siddharth. Currently I'm pursuing my undergrad in Computer Science
            and Engineering.I enjoy creating beautiful and reliable websites
            for internet.<br />I like cricket and also love watching movies.<br />
            I'm enthusisatic about learnig new things and I'm persistently trying to teach and improve myself.
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
