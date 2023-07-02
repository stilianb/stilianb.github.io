import React from "react";

function DefaultCard(props) {
  let isActive = props.card === "default";
  return (
    <div
      className={`${isActive ? "opacity-100" : "opacity-0"
        } absolute w-full h-full flex flex-col`}
    >
      <div className="h-[75%] m-auto w-fit md:pl-0 flex flex-col ">
        <h2 className="text-2xl text-subtext0 ml-1">Hi, I'm</h2>
        <h1 className="text-5xl">Stilian Balasopoulov</h1>
        <p className="ml-3 text-subtext0">A webdev based in Colorado.</p>
        <div className="flex-grow flex flex-col md:flex-row">
        </div>
      </div>
    </div>
  );
}

export default DefaultCard;
