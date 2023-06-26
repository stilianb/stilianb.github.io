import React, { useState } from "react";
import DefaultCard from "./Cards/DefaultCard";
import ProjectCard from "./Cards/ProjectCard";

function Projects(props) {
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
    <div className="flex md:flex-row flex-col gap-2 z-0 h-[600px] max-w-[800px] ">
      <div className="relative flex-grow ">
        <DefaultCard card={activeCard} />
        <ProjectCard
          card={activeCard}
          name="CliqueBait"
          desc="A full-stack mobile social media manager"
          extdesc="CliqueBait is an Android specific social media management 
          app created for my senior capstone project as MSU Denver. Our goal with this application was to
          create individual API interactions with specific social media services in order to compile everyones data in one place."
          color=""
        />
      </div>
      <div className="flex hidden flex-col justify-between text-text p-2 bg-mantle rounded-md h-fit ">
        <div className="">
          <div className="border-b border-text pb-2 mb-2 text-center">
            Stuff i've worked on
          </div>
          <div className="bg-crust flex flex-col gap-2 p-4 rounded-md">
            <button
              className={`translate-all ${
                activeCard === "CliqueBait"
                  ? "bg-surface2"
                  : "bg-surface0 hover:bg-surface2"
              }`}
              onClick={() => ToggleCard("CliqueBait")}
            >
              CliqueBait
            </button>
          </div>
        </div>
        <div className="flex gap-1 justify-evenly text-2xl mt-2 bg-crust rounded-md p-2">
          <a href="#" className="">
            <i className="fa-brands fa-github my-auto"></i>
          </a>
          <a href="#" className="">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="#" className="">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
