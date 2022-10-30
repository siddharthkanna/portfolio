import React from "react";
import "./Skills.css";
import { FaReact } from "react-icons/fa";
import { SiHtml5 } from "react-icons/si";
import { DiCss3, DiPython } from "react-icons/di";
import { SiJavascript, SiFirebase, SiJava } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";

function Skills() {
  return (
    <>
      <div className="section main">
        <h1 className="section__title">02.Skills</h1>
        <div className="techsection">
          <h2 className="fe">Frontend</h2>
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>

          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
          <div>
            <SiFirebase />
            <h5>Firebase</h5>
          </div>
          <h2 className="fe">Programming languages</h2>
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
    </>
  );
}

export default Skills;
