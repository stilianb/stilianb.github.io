import React from "react";
import projects from "../../../api/projects.json";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <div className="flex flex-col gap-2 rounded-md bg-mantle p-2">
      <div className="rounded-sm bg-surface0 px-2 py-1">search</div>
      <div className="flex flex-col gap-1 overflow-auto md:max-h-[200px] lg:max-h-[530px]">
        {projects.map((i) => (
          <div className="" key={i.key}>
            <ProjectItem name={i.name} tags={i.tags} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
