import React from "react";
import ProjectItem from "./ProjectItem";
import photo1 from "../assets/img1.jpg";

function Projects() {
  return (
    <div id="projects" className="m-2 pt-16 text-text">
      <div className="bg-crust w-full rounded-md flex flex-wrap gap-2 p-2 justify-evenly">
        <div className="text-3xl w-full">My Work...</div>
        <ProjectItem
          name="Project Name"
          img_url={photo1}
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          contribution="project contribution"
        />
        <ProjectItem
          name="Project Name"
          img_url={photo1}
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          contribution="project contribution"
        />
        <ProjectItem
          name="Project Name"
          img_url={photo1}
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          contribution="project contribution"
        />
        <ProjectItem
          name="Project Name"
          img_url={photo1}
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          contribution="project contribution"
        />
      </div>
    </div>
  );
}

export default Projects;
