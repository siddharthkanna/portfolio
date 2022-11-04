import React from "react";
import "./Skills.css";
import { FaReact, FaGit } from "react-icons/fa";
import { SiHtml5, SiCplusplus } from "react-icons/si";
import { DiCss3, DiPython } from "react-icons/di";
import { SiJavascript, SiFirebase, SiJava } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { Fade } from "react-awesome-reveal";

function Skills() {
  return (
    <Fade delay={500} duration={1000}>
      <div className="section main">
        <h1 className="section__title" id="skills">
          03.Skills
        </h1>
        <div className="techsection">
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>

          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <FaGit />
            <h5>Git</h5>
          </div>
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
          <div>
            <SiFirebase />
            <h5>Firebase</h5>
          </div>
          <div>
            <SiCplusplus />
            <h5>C/C++</h5>
          </div>
          <div>
            <DiPython />
            <h5>Python</h5>
          </div>
          <div>
            <SiJava />
            <h5>Java</h5>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Skills;
