import React from "react";
import {
  PROJECTA_NAME,
  PROJECTB_NAME,
  TOOLS_A,
  TOOLS_B,
} from "../../constants/ProjectInfo";

function Tools(props) {
  let tools = TOOLS_A;

  switch (props.project) {
    case PROJECTA_NAME:
      tools = TOOLS_A;
      break;
    case PROJECTB_NAME:
      tools = TOOLS_B;
      break;
  }

  return (
    <div className="">
      <div className="text-center border-b border-subtext0 mb-2">Tools Used</div>
      <div className="flex flex-col gap-2 text-center">
        {tools.map((tool) => {
          return (
            <a href={tool.url} key={tool.key} className="">
              <div className="bg-surface0 rounded-sm ">{tool.name}</div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Tools;
