import React from "react";
import portfolioInfo from "./portfolioInfo.json";
import Link from "next/link";

function Portfolios() {
  return (
    <div className="bg-base bg-opacity-50 w-full p-8 overflow-auto flex flex-col gap-2">
      <div className="">
        <h2 className="ml-1 text-subtext0">Check out some of my</h2>
        <h1 className="text-5xl">Portfolios</h1>
      </div>
      <div className="bg-crust flex-grow rounded-md grid grid-cols-2 gap-2 p-2">
        {portfolioInfo.map((item) => (
          <div className="bg-mantle rounded-md scale-90 group hover:scale-100 transition-all flex flex-col relative">
            <div className="flex-grow absolute h-full w-full"></div>
            <div className="absolute flex flex-col overflow-hidden bottom-0 h-[100px] group-hover:h-3/4 transition-all delay-100 w-full p-2 bg-base rounded-t-md">
              <div className="flex">
                <div className="flex flex-col flex-grow">
                  <div className="">{item.name}</div>
                  <div className="">{item.job}</div>
                </div>
                <div className="bg-crust rounded-full flex max-h-[70px]">
                  <div className="m-auto overflow-hidden">image</div>
                </div>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-all delay-200 mt-auto mx-auto">
                <Link
                  href={item.url}
                  className="bg-surface0 hover:bg-surface1 transition-all p-1 rounded-sm"
                >
                  Live Project
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolios;
