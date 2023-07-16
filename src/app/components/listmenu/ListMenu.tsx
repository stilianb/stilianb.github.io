"use client";
import React, { useState } from "react";
import ListItem from "./ListItem";

function ListMenu(props) {
  let [activeProject, setActiveProject] = useState("default");
  function OpenProject(project) {
    setActiveProject(`${project}`);
  }
  return (
    <div className={`flex flex-col gap-1 `}>
      {props.items.map((item) => (
        <div
          className={`${
            activeProject === item.name
              ? "max-h-[400px] bg-crust "
              : " min-h-[60px] max-h-[60px] bg-crust bg-opacity-50 hover:bg-crust hover:cursor-pointer "
          } transition-all relative rounded-md p-2 overflow-hidden`}
          onClick={
            activeProject === item.name
              ? undefined
              : () => OpenProject(item.name)
          }
          key={item.key}
        >
          <ListItem
            key={item.key}
            id={item.key}
            name={item.name}
            lang={item.languages}
            desc={item.description}
            url={item.url}
            close={() => OpenProject("default")}
          />
          <div
            className="absolute right-0 top-0 h-[60px] w-[60px] flex "
            onClick={() => OpenProject("default")}
          >
            <div className="sticky top-0 h-[40px] w-[40px] flex hover:bg-surface0 rounded-md m-auto transition-all hover:cursor-pointer">
              <i
                className={`${
                  activeProject === item.name ? "rotate-45" : ""
                } fa-solid fa-plus transition-all m-auto`}
              ></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListMenu;
