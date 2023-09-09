"use client";
import React, { useState } from "react";

function ProjectCard(props) {
  const [isActive, setActive] = useState("close");

  const OpenCard = () => {
    setActive("open");
  };

  const CloseCard = () => {
    setActive("close");
  };

  return (
    <div
      className={`${
        isActive === "open"
          ? "h-[300px] "
          : "h-[60px] overflow-hidden hover:bg-base"
      } transition-all bg-crust rounded-md relative`}
      onClick={isActive === "close" ? OpenCard : null}
    >
      <a
        href="#"
        className={`${
          isActive === "open"
            ? "opacity-100 delay-opacity-200"
            : "opacity-0 pointer-events-none"
        } bg-surface0 hover:bg-surface1 p-2 flex gap-2 rounded-md absolute right-0 bottom-0 m-2 transition-all`}
      >
        <div className="my-auto ">Check out the Project</div>
        <i className="my-auto fa-solid fa-arrow-up-right-from-square"></i>
      </a>
      <div className="flex justify-between p-2 h-[60px]">
        <div className="my-auto md:text-lg">{props.name}</div>
        <div className="my-auto flex gap-2">
          {props.tags.map((tag) => (
            <div
              className={`
              ${tag === "NextJS" ? "bg-maroon" : ""} 
              ${tag === "Kotlin" ? "bg-blue" : ""} 
              ${tag === "Open Source" ? "bg-green" : ""} 
              ${tag === "Prolog" ? "bg-teal" : ""} 
              ${tag === "Scala" ? "bg-pink" : ""} 
              ${tag === "Lua" ? "bg-lavender" : ""} 
              ${tag === "nvim" ? "bg-peach" : ""} 
              ${tag === "python" ? "bg-flamingo" : ""} 
              text-xs rounded-full px-1 text-base`}
            >
              {tag}
            </div>
          ))}
        </div>
        <div
          className={`${
            isActive === "open" ? "bg-red text-base" : "bg-surface0"
          } rounded-md w-[36px] flex hover:cursor-pointer`}
          onClick={CloseCard}
        >
          <i
            className={`${
              isActive === "open" ? "rotate-45" : ""
            } fa-solid fa-plus transition-all duration-100 m-auto `}
          ></i>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <hr
          className={`${
            isActive === "open" ? "w-full delay-100" : "w-0"
          } transition-all bg-lavender rounded-md border-none h-[2px]`}
        ></hr>
      </div>
      <div className={`${isActive === "open" ? "" : ""} p-4 flex gap-4`}>
        <div className="text-sm md:text-[16px] lg:text-[18px]">{props.desc}</div>
        <div className="flex flex-col gap-1">
          <div className="text-sm ">
            {props.contrib ? "Collaborators:" : null}
          </div>
          <div className="truncate">
            {props.contrib
              ? props.contrib.map((contributor) => (
                  <div className="text-xs md:text-sm">{contributor}</div>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
