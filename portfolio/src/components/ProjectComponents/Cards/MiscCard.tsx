import React, { useState } from "react";
import MiscCardProjects from "./MiscCardProjects";

function MiscCard(props) {
  let isActive = props.card === props.name;
  return (
    <div
      className={`${props.card === props.name ? "max-w-full md:p-8" : "max-w-0 "
        } bg-crust rounded-md absolute right-0 overflow-auto h-full w-full flex translate-all duration-200 `}
    >
      <div
        className={`${isActive ? "opacity-100" : "opacity-0"
          } translate-all duration-100 h-full p-4 flex flex-col gap-8 h-full my-auto`}
      >
        <div className="">
          <h2 className="">Check out some of my</h2>
          <h1 className="text-5xl">{props.name}</h1>
        </div>
        <div className="bg-mantle rounded-md p-2 flex flex-col flex-grow">
          <div className="flex-grow rounded-md overflow-auto flex flex-col gap-2 max-h-[725px]">
            <MiscCardProjects name="project 1" languages={["language 1 "]} />
            <MiscCardProjects name="project 2" languages={["language 2 "]} />
            <MiscCardProjects name="project 3" languages={["language 3 "]} />
            <MiscCardProjects name="project 4" languages={["language 4 "]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiscCard;
