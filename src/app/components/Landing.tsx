import React from "react";

function Landing(props) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow">
        <div className="text-5xl"> {props.name} </div>
        <div className=""> {props.desc} </div>
      </div>
      <div className="">
        <button className="border">get in touch</button>
        <button className="border">Resume</button>
      </div>
    </div>
  );
}

export default Landing;
