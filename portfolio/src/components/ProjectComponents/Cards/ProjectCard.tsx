import React, { useState } from "react";

function ProjectCard(props) {
  let isActive = props.card === props.name;
  return (
    <div
      className={`${
        isActive ? "max-w-full" : "max-w-0 "
      } bg-mantle flex rounded-md absolute right-0 w-full h-full translate-all duration-200 `}
    >
      <div className="w-[85%] flex flex-col gap-2 h-full m-auto overflow-auto ">
        <div
          className={`${
            isActive ? "opacity-100" : "opacity-0"
          } translate-all duration-100`}
        >
          <h1 className="text-4xl md:text-5xl">{props.name}</h1>
          <p className="text-subtext0 ml-4">{props.teas}</p>
        </div>
        <div
          className={`${
            isActive ? "opacity-100 delay-300" : "opacity-0"
          } flex flex-col md:flex-row gap-2 translate-all duration-100 min-h-fit `}
        >
          <div className="flex-grow flex flex-col justify-evenly bg-crust rounded-md p-4 gap-2">
            <div className="">{props.desc}</div>
            <div className="flex w-fit mx-auto gap-2 justify-center">
              <a
                href="#"
                className="bg-surface0 hover:bg-surface1 translate-all duration-100 p-2 rounded-md"
              >
                Learn More
              </a>
              <a
                href="#"
                className="bg-surface0 hover:bg-surface1 translate-all duration-100 p-2 rounded-md"
              >
                Project GitHub
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex-grow bg-crust rounded-md p-2 min-w-[200px]">
              <div className="">Tools</div>
              <ul className="">
                <li className="">Kotlin</li>
                <li className="">Auth0</li>
                <li className="">Multiple API's</li>
              </ul>
            </div>
            <div className="flex-grow bg-crust rounded-md p-2">
              <div className="">Team</div>
              <div className="">Lorem Ipsum</div>
              <div className="">Lorem Ipsum</div>
              <div className="">Lorem Ipsum</div>
              <div className="">Lorem Ipsum</div>
              <div className="">Lorem Ipsum</div>
              <div className="">Lorem Ipsum</div>
              <div className="">Lorem Ipsum</div>
              <div className="">Lorem Ipsum</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
