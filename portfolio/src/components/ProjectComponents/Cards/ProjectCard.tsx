import React, { useState } from "react";
import Contributors from "../Contributors";
import Tools from "../Tools";

function ProjectCard(props) {
  let isActive = props.card === props.name;
  return (
    <div
      className={`${isActive ? "max-w-full" : "max-w-0 delay-200"
        } bg-mantle flex rounded-md absolute right-0 w-full h-full translate-all duration-200 `}
    >
      <div className="h-full w-full m-auto overflow-auto ">
        <div
          className={`${isActive ? "opacity-100 delay-200 duration-200 " : "opacity-0 delay-0 duration-200"
            } translate-all flex flex-col gap-4 h-full `}
        >
          <div className="rounded-t-md bg-crust p-3 ">
            <div className="text-5xl">{props.name}</div>
            <div className="text-subtext0 ml-1">{props.teas}</div>
          </div>
          <div className="flex flex-col gap-2 w-[85%] h-[80%] my-auto mx-auto ">
            <div className="bg-crust rounded-md hidden lg:flex flex-grow max-h-[300px] overflow-auto relative">
              <img src={props.image} alt="" className="absolute" />
            </div>
            <div className="text-subtext1 flex flex-col md:flex-row gap-2 ">
              <div className="bg-crust rounded-md flex flex-grow p-2 ">
                <div className="my-auto ">
                  {props.desc}
                </div>
              </div>
              <div className="flex flex-row md:flex-col gap-2">
                <div className="bg-crust rounded-md p-2 flex-grow">
                  <Tools project={props.name} />
                </div>
                <div className="bg-crust rounded-md p-2 flex-grow">
                  <Contributors project={props.name} />
                </div>
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-2 text-center w-full mb-2 mx-auto justify-center">
              <a href={props.more} className="rounded-md bg-surface0 hover:bg-surface1 p-2">Learn More</a>
              <a href={props.url} className="rounded-md bg-surface0 hover:bg-surface1 p-2">Check out the Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
