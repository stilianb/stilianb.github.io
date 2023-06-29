import React, { useState } from "react";
import AltCardProjects from "./AltCardProjects";

function AltCard(props) {
  let isActive = props.card === props.name;
  return (
    <div
      className={`${
        isActive ? "max-w-full" : "max-w-0 "
      } bg-mantle rounded-md absolute right-0 overflow-auto h-full w-full translate-all duration-200 `}
    >
      <div className={`${isActive ? "opacity-100" : "opacity-0"} translate-all duration-100 h-full p-4 flex flex-col gap-4`}>
        <div className="">
          <h2 className="">Check out some of my</h2>
          <h1 className="text-4xl">{props.name}</h1>
        </div>
        <div className="bg-crust flex-grow p-2 rounded-md grid md:grid-cols-2 gap-2">
          <AltCardProjects name="project 1"/>
          <AltCardProjects name="project 2"/>
          <AltCardProjects name="project 3"/>
          <AltCardProjects name="project 4"/>
        </div>
      </div>
    </div>
  );
}

export default AltCard;
("react");
