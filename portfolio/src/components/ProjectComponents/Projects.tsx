import React, { useState } from "react";
import ProjectCard from "./Cards/DefaultCard";

function Projects() {
  const [activeCard, setActiveCard] = useState("default");
  const [isActive, setActive] = useState("false");
  function ToggleCard(card) {
    setActiveCard(`${card}`);
    setActive(!isActive);
  }
  return (
    <div className="flex md:flex-row flex-col p-2 gap-2 z-0">
      <div className="relative flex-grow min-h-[400px]">
        <ProjectCard card={activeCard} name="Project 1" color="bg-blue" />
        <ProjectCard card={activeCard} name="Project 2" color="bg-green" />
        <ProjectCard card={activeCard} name="Project 3" color="bg-red" />
      </div>
      <div className="flex flex-col text-text">
        <button className={`translate-all hover:opacity-75 ${activeCard === "Project 1" ? "opacity-50 bg-blue" : ""}`}onClick={() => ToggleCard("Project 1")}>Project 1</button>
        <button className={`translate-all hover:opacity-75 ${activeCard === "Project 2" ? "opacity-50 bg-green" : ""}`}onClick={() => ToggleCard("Project 2")}>Project 2</button>
      </div>
    </div>
  );
}

export default Projects;
