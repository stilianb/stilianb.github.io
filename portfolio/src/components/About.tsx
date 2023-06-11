import React from "react";
import Tool from "./Tool";

function About() {
  return (
    <div id="about" className="pt-14 text-text">
      <div className="bg-crust m-2 p-2 rounded-md">
        <div className="flex flex-col">
          <h1 className="text-3xl">a little about me...</h1>
          <div className="flex flex-wrap justify-evenly m-2 gap-2">
            <p className="text-lg md:w-1/2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="flex flex-col gap-2">
              <div className="bg-surface0 rounded-md p-2 h-fit">
                <h2 className="text-xl w-fit mx-auto">My Favorite Tools</h2>
                <div className="grid grid-cols-2 w-fit mx-auto gap-2">
                  <Tool name="tool name" url="" logo="" />
                  <Tool name="tool name" url="" logo="" />
                  <Tool name="tool name" url="" logo="" />
                  <Tool name="tool name" url="" logo="" />
                  <Tool name="tool name" url="" logo="" />
                  <Tool name="tool name" url="" logo="" />
                </div>
              </div>
              <div className="bg-surface0 rounded-md p-2 h-fit">
                <h2 className="text-xl w-fit mx-auto">Language Experience</h2>
                <ul className="text-xl grid grid-cols-2 w-fit mx-auto gap-2">
                  <li>language</li>
                  <li>language</li>
                  <li>language</li>
                  <li>language</li>
                  <li>language</li>
                  <li>language</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
