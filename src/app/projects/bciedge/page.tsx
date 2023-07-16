import Transition from "@/app/components/Transition";
import React from "react";
import bannerimg from "./images/BCIImage.png";
import Image from "next/image";
import Link from "next/link";

function BciEdge() {
  return (
    <div className="w-full bg-base bg-opacity-75 p-8 text-text flex flex-col gap-4 overflow-auto">
      <div className="">
        <h1 className="text-5xl">BCI Edge</h1>
        <h2 className="ml-2 text-subtext0">Basketball Club International</h2>
      </div>
      <div className="rounded-md overflow-hidden h-full max-h-[300px] min-h-[200px] ">
        <Image src={bannerimg} alt="" className="" />
      </div>
      <div className="flex-grow flex flex-col md:flex-row gap-2">
        <div className="flex-grow bg-mantle rounded-md min-w-[50%]">
          <div className="p-2 text-subtext1">
            <h2 className="">What is it?</h2>
            <p className="text-sm text-subtext0 p-2">
              Basketball Club International is a unique nonprofit organization
              that challenges professional basketball players to grow deeper in
              their faith, walk alongside their peers, and share their life
              experiences with fans and kids. BCI has done many livestream
              events with current/former NBA players, as well as working with a
              number of Collegiate/Professional Coaches in the US.
            </p>
          </div>
        </div>
        <div className="flex-grow flex flex-col gap-2">
          <div className="bg-mantle rounded-md flex-grow p-2">
            <h2 className="text-subtext1">My Contribution</h2>
            <p className="text-sm text-subtext0 p-2">
              While working on BCI Edge, I was responsible for converting their
              old static website into a dynamic nextjs project, managing the
              server the site is hosted on, as well as creating campaign
              specific pages for any upcoming events. Since many of the people
              working on the website previously we're not as familiar with a web
              framework, my goal was to build the site in an understandable
              structure such that it could be easily added to or editied by
              anyone.
            </p>
          </div>
          <div className="bg-mantle rounded-md p-2 flex gap-2 text-center text-sm">
            <a
              href="http://www.bciedge.org/"
              target="_blank"
              className="flex-grow bg-surface0 hover:bg-surface1 rounded-sm transition-all"
            >
              Learn More
            </a>
            <Link
              href="#"
              className="flex-grow bg-surface0 hover:bg-surface1 rounded-sm transition-all"
            >
              See the Repo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BciEdge;
