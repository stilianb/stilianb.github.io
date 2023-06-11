import React from "react";

function Tool(props) {
  return (
    <div className="bg-surface1 hover:bg-surface2 hover:cursor-pointer p-2 rounded-md flex gap-2 w-fit">
      <div className="bg-blue p-2"></div>
      <div className="text-md">{props.name}</div>
    </div>
  );
}

export default Tool;
