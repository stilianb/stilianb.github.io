import React from "react";

function DefaultCard(props) {
  let isActive = props.card === "default";
  return (
    <div
      className={`${isActive ? "opacity-100" : "opacity-0"
        } absolute w-full h-full flex flex-col`}
    >
      <div className="h-[75%] md:h-full w-5/6 flex flex-col justify-center mx-auto gap-8">
        <div className="flex flex-col ">
          <div className="ml-1 text-subtext0 text-2xl">Hi, I'm</div>
          <div className="text-5xl md:text-6xl ">Stilian Balasopoulov</div>
          <div className="ml-3 text-subtext0 text-xl">a webdev based in Colorado.</div>
        </div>
        <div className="ml-3 text-subtext1">desc</div>
      </div>
    </div>
  );
}

export default DefaultCard;
