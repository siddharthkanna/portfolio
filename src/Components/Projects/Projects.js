import React from "react";
import SingleProject from "./SingleProject";
import "./Projects.css";
import { projectsData } from "./projectsData";
import { Fade } from "react-awesome-reveal";

function Projects() {
  return (
   
      <div className="projects" id="project">
        <div className="projects__header">
          <h1>03.Projects</h1>
        </div>
        <div className="projects__body">
          <div className="projects__bodyContainer">
            {projectsData.map((project) => (
               <Fade delay={500}>
              <SingleProject
                key={project.id}
                name={project.projectName}
                desc={project.projectDesc}
                tags={project.tags}
                code={project.code}
                demo={project.demo}
                image={project.image}
              />
              </Fade>
            ))}
          </div>
        </div>
      </div>
   
  );
}

export default Projects;
