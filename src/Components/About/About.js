import React from "react";
import "./About.css";
import sid from "./sid.png";

function About() {
  return (
    <div className="about">
      <div className="a-des">
        <h1 className="a-title">02.About me</h1>
        <p>
          Hello! I'm Siddharth, Junior Frontend Developer,based in
          Hyderabad.Currently I'm pursuing my undergrad in Computer Science and
          Engineering.I enjoy creating beautiful and reliable applications for
          internet and phones. My goal is to always build scalable products and
          performant experiences.
        </p>
      </div>
      <div className="a-img">
        <img src={sid} alt="sid" width="260px" height="300px" />
      </div>
    </div>
  );
}

export default About;
