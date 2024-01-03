import React, { useState } from "react";

function ProjectItem() {
  const [isActive, setActive] = useState("close");

  const OpenProject = () => {
    setActive("open");
  };

  const CloseProject = () => {
    setActive("close");
  };

  return (
    <div className={`flex gap-2`}>
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
          ></div>
        </div>
        <div className="flex justify-between">
          <div className="">Name</div>
          <div className="text-xs items-center">tags</div>
        </div>
      </div>
      <div className="rounded-md bg-surface0 p-2 hover:cursor-pointer hover:bg-surface1">
        i
      </div>
    </div>
  );
}

export default ProjectItem;
