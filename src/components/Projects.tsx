import React from "react";
import ProjectButton from "./ProjectButton";
import projects from "../api/projects.json";

function Projects() {
  return (
    <div className="flex h-full max-h-80 w-full flex-grow flex-col gap-2 rounded-md bg-mantle p-2 md:max-w-96">
      <h2 className="p-2 pb-0 text-xl">Stuff I've worked on</h2>
      <div className="flex flex-grow flex-col gap-2 overflow-auto rounded-md bg-crust p-2">
        {projects.map((project) => (
          <ProjectButton
            name={project.name}
            link={project.link}
            key={project.key}
            tags={project.tags}
            desc={project.desc}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
