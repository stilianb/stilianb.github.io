import React from "react";

function Tags(props: any) {
  return (
    <div className="flex items-center">
      <p
        className={`${props.color} text-md rounded-md p-1 text-crust md:text-xs`}
      >
        {props.name}
      </p>
    </div>
  );
}

export default Tags;
