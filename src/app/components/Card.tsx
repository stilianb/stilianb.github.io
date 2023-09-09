import React from "react";
import Projects from "./Projects";
import Landing from "./Landing";

function Card() {
  return (
    <div className="bg-base text-text flex flex-col md:flex-row rounded-md w-full max-w-5xl min-w-[366px] lg:max-h-[80%] h-fit md:h-fit lg:h-full m-auto">
      <div className="flex w-full ">
        <Landing />
      </div>
      <div className=" flex flex-col flex-grow md:min-w-[45%] md:max-w-[45%] h-full md:overflow-auto">
        <Projects />
      </div>
    </div>
  );
}

export default Card;
