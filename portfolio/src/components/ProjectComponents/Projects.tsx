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
    <div className="flex md:flex-row flex-col p-2 gap-2 z-0">
      <div className="relative flex-grow ">
        <DefaultCard card={activeCard}/>
        <ProjectCard card={activeCard} name="Project 1" color="bg-blue" />
        <ProjectCard card={activeCard} name="Project 2" color="bg-green" />
        <ProjectCard card={activeCard} name="Project 3" color="bg-red" />
      </div>
      <div className="flex flex-col text-text">
        <button
          className={`translate-all ${
            activeCard === "Project 1" ? "bg-blue" : ""
          }`}
          onClick={() => ToggleCard("Project 1")}
        >
          Project 1
        </button>
        <button
          className={`translate-all ${
            activeCard === "Project 2" ? "bg-green" : ""
          }`}
          onClick={() => ToggleCard("Project 2")}
        >
          Project 2
        </button>
        <button
          className={`translate-all ${
            activeCard === "Project 3" ? "bg-red" : ""
          }`}
          onClick={() => ToggleCard("Project 3")}
        >
          Project 3
        </button>
      </div>
    </div>
  );
}

export default Projects;
