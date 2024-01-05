import React, { useState } from "react";
import Tag from "./Tag";
import ExpandedProject from "./ExpandedProject";

function ProjectItem(props: any) {
  const [isActive, setActive] = useState("close");

  const OpenProject = () => {
    setActive("open");
  };

  const CloseProject = () => {
    setActive("close");
  };

  return (
    <div className={`flex gap-1`}>
      <div
        className={`flex-grow rounded-md bg-surface0 p-2 transition-all transition-all hover:cursor-pointer hover:bg-surface1`}
        onClick={isActive === "close" ? OpenProject : undefined}
      >
        <div
          className={`${isActive === "open"
              ? "opacity-100"
              : "pointer-events-none opacity-0"
            } fixed left-0 top-0 flex h-full w-full transition-all`}
        >
          <div
            className={`${isActive === "open" ? "" : ""
              } absolute z-0 h-full w-full bg-base opacity-50 blur-lg`}
            onClick={isActive === "open" ? CloseProject : undefined}
          ></div>
          <div
            className={`${isActive === "open" ? "opacity-100" : "opacity-0"
              } z-10 m-6 w-full rounded-md bg-crust transition-all`}
          >
            <ExpandedProject name={props.name} />
          </div>
        </div>
        <div className="flex justify-between gap-2">
          <div className="flex flex-grow items-center">{props.name}</div>
          <div className="flex flex-wrap md:flex-nowrap justify-end gap-1">
            {props.tags.map((i: any) => (
              <Tag name={i.name} color={i.color} key={i.key} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex min-w-[55px] items-center justify-center rounded-md bg-surface0 hover:cursor-pointer hover:bg-surface1">
        <i className="fa-brands fa-github text-xl"></i>
      </div>
    </div>
  );
}

export default ProjectItem;
