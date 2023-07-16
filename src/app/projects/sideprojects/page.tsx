import ListMenu from "@/app/components/listmenu/ListMenu";
import React from "react";
import sideProjects from "./sideProjects.json";

function SideProjects() {
  return (
    <div className="bg-base bg-opacity-50 w-full p-4 flex flex-col gap-4">
      <div className="mt-8 md:mt-0 w-fit md:w-full mx-auto">
        <h2 className="ml-1 text-subtext0">Check out some of my</h2>
        <h1 className="text-5xl">Side Projects</h1>
      </div>
      <p className="text-subtext0 text-sm max-w-lg px-8 ">
        These are some of the projects I've worked on at any point that didn't
        require their own page. Most include projects from my degree or personal
        configurations for my environment.
      </p>
      <div className="bg-mantle md:p-2 rounded-md flex-grow overflow-auto">
        <ListMenu items={sideProjects} />
      </div>
    </div>
  );
}

export default SideProjects;
