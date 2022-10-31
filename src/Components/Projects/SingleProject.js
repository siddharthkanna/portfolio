import React from "react";
import { FaCode, FaPlay } from "react-icons/fa";
import "./SingleProject.css";

function SingleProject(props) {
  return (
    <>
      <div className="singleProject">
        <div className="projectContent">
          <h2>{props.name}</h2>

          <img src={props.image} alt="pro1" />
          <div className="project__showcasebtn">
            <a className="iconBtn" href={props.demo}>
              <FaPlay className="icon" />
            </a>
            <a className="iconBtn" href={props.code}>
              <FaCode className="icon" />
            </a>
          </div>
        </div>

        <p className="project__desc">{props.desc}</p>

        <div className="project__lang">
          {props.tags.map((tag, id) => (
            <span key={id}>{tag}</span>
          ))}
        </div>
      </div>
    </>
  );
}

export default SingleProject;
