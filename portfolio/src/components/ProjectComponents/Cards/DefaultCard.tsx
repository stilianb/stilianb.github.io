import React from "react";

function DefaultCard(props) {
  return (
    <div className="absolute flex flex-col w-full h-full justify-center bg-mantle rounded-md p-2 ">
      <div className="w-fit mx-auto p-2 flex flex-col gap-3 ">
        <div className="">
          <h2 className="ml-1 text-subtext0 text-2xl">Hi, I'm</h2>
          <h1 className="text-5xl">Stilian Balasopoulov</h1>
          <p className="ml-1 text-subtext0">a webdev based in Colorado.</p>
        </div>
        <div className="ml-1 max-w-[75%] ">
          <p className="text-subtext1">Feel free to check out my work or get in touch</p>
        </div>
      </div>
    </div>
  );
}

export default DefaultCard;
