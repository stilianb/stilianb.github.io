import React, { useState } from "react";
import DefaultCard from "./Cards/DefaultCard";
import ProjectCard from "./Cards/ProjectCard";

function Projects() {
  const [activeCard, setActiveCard] = useState("default");
  const [isActive, setActive] = useState("false");
  function ToggleCard(card) {
    if (activeCard === card) {
      setActiveCard("default");
    } else {
      setActiveCard(`${card}`);
    }
  }
  return (
    <div className="flex md:flex-row flex-col p-8 gap-2 z-0 h-full ">
      <div className="relative flex-grow ">
        <DefaultCard card={activeCard} />
        <ProjectCard card={activeCard} name="Project 1" color="bg-surface0" />
        <ProjectCard card={activeCard} name="Project 2" color="bg-surface1" />
        <ProjectCard card={activeCard} name="Project 3" color="bg-surface2" />
      </div>
      <div className="flex flex-col text-text p-2 bg-base rounded-md">
        <div className="border-b border-text pb-2">Stuff i've worked on</div>
        <div className="bg-mantle flex flex-col gap-2 p-4 rounded-md">
          <button
            className={`translate-all ${activeCard === "Project 1" ? "bg-surface2" : "bg-surface0 hover:bg-surface2"
              }`}
            onClick={() => ToggleCard("Project 1")}
          >
            Project 1
          </button>
          <button
            className={`translate-all ${activeCard === "Project 2" ? "bg-surface2" : "bg-surface0 hover:bg-surface2"
              }`}
            onClick={() => ToggleCard("Project 2")}
          >
            {" "}
            Project 2
          </button>
          <button
            className={`translate-all ${activeCard === "Project 3" ? "bg-surface2" : "bg-surface0 hover:bg-surface2"
              }`}
            onClick={() => ToggleCard("Project 3")}
          >
            {" "}
            Project 3
          </button>
        </div>
        <div className="flex">
        extra stuff maybe?
        </div>
      </div>
    </div>
  );
}

export default Projects;
