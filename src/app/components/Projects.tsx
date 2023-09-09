import React from "react";
import projects from "./info/projects.json";
import Socials from "./Socials";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="h-full flex flex-col gap-2 p-2 pb-0">
      <Socials />
      <div className="bg-mantle rounded-md flex overflow-auto flex-col gap-2 p-2 h-full relative ">
        <div className="p-1 bg-crust rounded-md text-center w-full ">
          Stuff I've worked on
        </div>
        <div className="rounded-md flex-grow flex flex-col gap-2 z-20">
          {projects.map((project) => (
            <div className="">
              <ProjectCard
                name={project.name}
                desc={project.desc}
                contrib={project.contrib}
                tags={project.tags}
              />
            </div>
          ))}
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}

export default Projects;
