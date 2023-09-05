import React from "react";
import Projects from "./Projects";
import Socials from "./Socials";
import Landing from "./Landing";

function Card() {
  return (
    <div className="bg-gray-800 flex flex-col md:flex-row rounded-md p-2 w-full max-w-3xl min-w-[366px] md:max-h-[80%] h-full m-auto">
      <div className="">
        <Landing name="Stilian Balasopoulov" desc="landing description text" />
      </div>
      <div className="flex flex-col flex-grow">
        <Projects />
        <Socials />
      </div>
    </div>
  );
}

export default Card;
