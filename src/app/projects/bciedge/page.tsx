import Transition from "@/app/components/Transition";
import React from "react";
import bannerimg from "./images/BCIImage.png";
import Image from "next/image";
import Link from "next/link";

function BciEdge() {
  return (
    <Transition>
      <div className="w-full bg-base bg-opacity-75 p-8 text-text flex flex-col gap-4">
        <div className="">
          <h1 className="text-5xl">BCI Edge</h1>
          <h2 className="ml-2 text-subtext0">Basketball Club International</h2>
        </div>
        <div className="rounded-md overflow-hidden max-h-[300px]">
          <Image src={bannerimg} alt="" className="" />
        </div>
        <div className="flex-grow flex flex-col md:flex-row gap-2">
          <div className="flex-grow bg-mantle rounded-md">
            <div className="p-2">What is it?</div>
          </div>
          <div className="flex-grow flex flex-col gap-2">
            <div className="bg-mantle rounded-md flex-grow p-2">
              My Contribution
            </div>
            <div className="bg-mantle rounded-md p-2 flex gap-2 text-center">
              <Link
                href="#"
                className="flex-grow bg-surface0 hover:bg-surface1 rounded-sm transition-all"
              >
                Learn More
              </Link>
              <Link
                href="#"
                className="flex-grow bg-surface0 hover:bg-surface1 rounded-sm transition-all"
              >
                See the repo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}

export default BciEdge;
