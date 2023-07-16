import React from "react";
import Image from "next/image";
import cbLogo from "./images/cliquebait-high-resolution-logo-color-on-transparent-background2.png";
import teamInfo from "./teamInfo.json";
import cliquebaitInfo from "./cliquebaitInfo.json";
import Link from "next/link";

function CliqueBait() {
  return (
    <div className="bg-base bg-opacity-50 w-full p-8 flex flex-col gap-2 overflow-auto">
      <div className="flex gap-2">
        <Image src={cbLogo} alt="" className="w-24" />
        <div className="h-fit my-auto">
          <h1 className="text-5xl">CliqueBait</h1>
          <h2 className="ml-2 text-subtext0">
            A full-stack social media management app
          </h2>
        </div>
      </div>
      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="bg-crust rounded-md bg-opacity-75 p-2">
          <h2 className="text-3xl text-subtext1">Our Goal</h2>
          <p className="p-2 text-sm text-subtext0">
            Over the course of 1 semester, our team set out to create a social
            media management platform that any business could use to bundle all
            of their social media information into one customizable location.
            This project was made for our senior capstone at MSU Denver, and the
            APK can be found at the github linked below if you want to test it
            yourself.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="bg-crust bg-opacity-75 rounded-md p-2 flex-grow">
            <h2 className="text-2xl text-subtext1">What we used</h2>
            <ul className="text-sm text-subtext0 p-2">
              <li className="">Kotlin / XML</li>
              <li className="">Auth0</li>
              <li className="">Firebase</li>
              <li className="">META API</li>
            </ul>
          </div>
          <div className="bg-crust bg-opacity-75 rounded-md p-2 flex-grow">
            <h2 className="text-2xl text-subtext0">In Collaboration With</h2>
            <ul className="text-sm text-subtext0 p-2">
              {teamInfo.map((member) => (
                <li className="">
                  <Link href={member.url} className="">
                    {member.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-md bg-crust bg-opacity-75 h-fit p-2 flex gap-2">
            {cliquebaitInfo.map((link) => (
              <Link
                href={link.url}
                target="_blank"
                className="bg-surface1 hover:bg-surface2 bg-opacity-75 transition-all p-1 rounded-sm text-sm flex-grow text-center"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CliqueBait;
