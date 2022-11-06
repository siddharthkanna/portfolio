import React from "react";
import "./Intro.css";
import {
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import Typewriter from "typewriter-effect";
import { Fade } from "react-awesome-reveal";

function Intro() {
  return (
    <Fade>
      <div className="Intro" id="intro">
        <h2>Welcome,I'm</h2>
        <h1>Siddharth Kanna.</h1>
        <span className="type">
          <Typewriter
            className="type"
            onInit={(typewriter) => {
              typewriter
                .typeString("Computer Science Student!")
                .pauseFor(2000)
                .deleteAll()
                .typeString("Frontend Developer!l")
                .start();
            }}
          />
        </span>

        <div className="icons">
          <a
            href="https://github.com/siddharthkanna"
            style={{ color: "white" }}
          >
            <AiOutlineGithub
              size={35}
              style={{ margin: "10px", cursor: "pointer" }}
            />
          </a>
          <a
            href="www.linkedin.com/in/siddharth-kanna-823bb5219"
            style={{ color: "white" }}
          >
            <AiOutlineLinkedin
              size={35}
              style={{ margin: "10px", cursor: "pointer" }}
            />
          </a>

          <a href="https://twitter.com/itssid07" style={{ color: "white" }}>
            <AiOutlineTwitter
              size={35}
              style={{ margin: "10px", cursor: "pointer" }}
            />
          </a>
          <a
            href="https://www.instagram.com/siddharth__kanna"
            style={{ color: "white" }}
          >
            <AiOutlineInstagram
              size={35}
              style={{ margin: "10px", cursor: "pointer" }}
            />
          </a>
        </div>
      </div>
    </Fade>
  );
}

export default Intro;
