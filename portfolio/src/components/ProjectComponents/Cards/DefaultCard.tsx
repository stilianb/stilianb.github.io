import React from "react";

function DefaultCard(props) {
  return (
    <div className="absolute flex flex-col w-full h-full bg-base rounded-md p-2">
      <div className="flex-grow">
        <h1 className="">Stilian Balasopoulov</h1>
      </div>
      <div className="flex gap-4">
          <a href="" className="flex group gap-1 text-3xl">
            <i className="fa-brands fa-github h-fit my-auto "></i>
            <div className="max-w-0 truncate translate-all duration-[300ms] group-hover:max-w-[200px]">Github</div>
          </a>
          <a href="" className="flex group gap-1 text-3xl">
            <i className="fa-brands fa-linkedin h-fit my-auto "></i>
            <div className="max-w-0 truncate translate-all duration-[300ms] group-hover:max-w-[200px]">Linkedin</div>
          </a>
          <a href="" className="flex group gap-1 text-3xl">
            <i className="fa-brands fa-codepen h-fit my-auto "></i>
            <div className="max-w-0 truncate translate-all duration-[300ms] group-hover:max-w-[200px]">Codepen</div>
          </a>
      </div>
    </div>
  );
}

export default DefaultCard;
