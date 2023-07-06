import React, { useState } from "react";
import { PROJECTB_NAME } from "../../../constants/ProjectInfo";
import Contributors from "../Contributors";
import Tools from "../Tools";

function ProjectCard(props) {
  let isActive = props.card === props.name;
  return (
    <div
      className={`${
        isActive ? "max-w-full md:p-8" : "max-w-0 delay-200"
      } bg-crust flex rounded-md absolute right-0 w-full h-full translate-all duration-200 `}
    >
      <div className="h-full w-full m-auto overflow-auto ">
        <div
          className={`${
            isActive
              ? "opacity-100 delay-200 duration-200 "
              : "opacity-0 delay-0 duration-200"
          } translate-all flex flex-col gap-4 h-full `}
        >
          <div className="p-3">
            <div className="text-5xl">{props.name}</div>
            <div className="text-subtext0 ml-1">{props.teas}</div>
          </div>
          <div className="flex flex-col gap-2 w-[85%] h-[80%] my-auto mx-auto ">
            <div className="bg-mantle rounded-md hidden lg:flex  flex-grow max-h-[300px] overflow-hidden relative">
              <img src={props.image} alt="" className="absolute bottom-0 top-0" />
            </div>
            <div className="text-subtext1 flex flex-col md:flex-row ">
              <div className="bg-mantle rounded-md flex flex-grow p-2 mx-auto w-full">
                <div className="my-auto ">{props.desc}</div>
              </div>
              <div className="flex flex-row md:flex-col gap-2">
                {props.name === PROJECTB_NAME ? undefined : (
                  <div className="bg-mantle rounded-md p-2 flex-grow ml-2">
                    <Tools project={props.name} />
                  </div>
                )}
                {props.name === PROJECTB_NAME ? undefined : (
                  <div className="bg-mantle rounded-md p-2 flex-grow ml-2">
                    <Contributors project={props.name} />
                  </div>
                )}
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-2 text-center w-full mb-2 mx-auto justify-center">
              <a
                href={props.more}
                className="rounded-md bg-surface0 hover:bg-surface1 p-2 transition-all"
              >
                Learn More
              </a>
              <a
                href={props.url}
                className="rounded-md bg-surface0 hover:bg-surface1 p-2 transition-all "
              >
                Check out the Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
