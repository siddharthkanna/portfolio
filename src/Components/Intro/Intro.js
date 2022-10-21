import React from "react";
import "./Intro.css";
import {
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import Typewriter from "typewriter-effect";

function Intro() {
  return (
    <div className="Intro">
      <h2>Welcome,I'm</h2>
      <h1>Siddharth Kanna</h1>
      <span className="type">
        <Typewriter
          className="type"
          onInit={(typewriter) => {
            typewriter
              .typeString("Frontend Developer!")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Computer Science Student!")
              .start();
          }}
        />
      </span>

      <div className="icons">
        <AiOutlineGithub
          size={35}
          style={{ margin: "10px", cursor: "pointer" }}
        />
        <AiOutlineLinkedin
          size={35}
          style={{ margin: "10px", cursor: "pointer" }}
        />
        <AiOutlineTwitter
          size={35}
          style={{ margin: "10px", cursor: "pointer" }}
        />
        <AiOutlineInstagram
          size={35}
          style={{ margin: "10px", cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

export default Intro;
