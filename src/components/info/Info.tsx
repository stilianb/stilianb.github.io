import React from "react";
import Projects from "./projects/Projects";
import Socials from "./socials/Socials";

function Info() {
  return (
    <div className="flex flex-col gap-2 rounded-md bg-crust p-2 min-w-[45%]">
      <Socials />
      <Projects />
    </div>
  );
}

export default Info;
