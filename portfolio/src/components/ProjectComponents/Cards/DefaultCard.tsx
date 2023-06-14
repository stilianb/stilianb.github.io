import React from "react";

function DefaultCard(props) {
  return (
    <div className="absolute w-full h-full">
      <h2
        className={`translate-all duration-[300ms] bg-base rounded-t-md w-fit px-2 py-1 text-3xl ${
          props.card === "default" ? "" : "-translate-y-10 delay-[500ms]"
        }`}
      >
        Stilian Balasopoulov
      </h2>
    </div>
  );
}

export default DefaultCard;
