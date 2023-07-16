"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import navbarInfo from "./navbarInfo.json";
import socialsInfo from "./socialsInfo.json";
import { usePathname } from "next/navigation";

function Navbar(props) {
  const currentRoute = usePathname();
  const [isActive, setActive] = useState("close");
  const [isLocked, setLocked] = useState("false");

  const OpenNav = () => {
    setActive("open");
  };
  const CloseNav = () => {
    setActive("close");
  };
  const ToggleLock = () => {
    setLocked(!isLocked);
  };
  const ClosenLock = () => {
    setLocked(!isLocked);
    setActive("close");
  };
  return (
    <div
      className={`${
        isActive === "open"
          ? "max-w-[300px] max-h-[375px] lg:max-h-[500px] bg-crust"
          : "max-h-[50px] max-w-[50px]"
      } fixed lg:absolute right-0 bottom-0 md:top-0 bg-opacity-75 transition-all h-full m-8 lg:m-16 w-full rounded-md overflow-hidden`}
    >
      <div
        className={`${
          isActive === "open" ? "" : "pointer-events-none"
        } h-screen w-screen fixed top-0 left-0 z-0 transition-all`}
        onClick={ClosenLock}
      ></div>
      <div
        className="relative w-full h-full z-40 "
        onMouseEnter={OpenNav}
        onMouseLeave={isLocked ? CloseNav : undefined}
      >
        <div className="absolute bottom-0 md:top-0 right-0 h-[50px] w-[50px] flex">
          <div
            className={`${
              isLocked ? "bg-blue" : "bg-red"
            } text-crust w-full flex rounded-md bg-base bg-opacity-75 m-1 mr-2 mt-2 delay-150 hover:bg-opacity-100 hover:cursor-pointer transition-all`}
            onClick={isActive === "open" ? ToggleLock : OpenNav}
          >
            <i
              className={`${
                isLocked ? "" : "rotate-45"
              } fa-solid fa-plus h-fit transition-all m-auto `}
            ></i>
          </div>
        </div>
        <div
          className={`z-20 transition-all absolute h-[50px] w-[50px] bottom-0 md:top-0 right-[50px] flex`}
          onClick={props.mode}
        >
          <div className="w-full flex rounded-md m-1 mt-2 ml-2 bg-base bg-opacity-75  hover:bg-surface0 hover:cursor-pointer transition-all">
            <i className="fa-solid fa-moon m-auto h-fit "></i>
          </div>
        </div>
        <div
          className={`${
            isActive === "open"
              ? "w-fit left-0 opacity-100 delay-200"
              : " min-w-[300px] right-0 mr-[50px] opacity-0 pointer-events-none "
          } transition-all h-[50px] flex absolute bottom-0 z-0 md:top-0 whitespace-nowrap `}
        >
          <Link
            href="/"
            className={`${
              currentRoute === "/" ? "text-lavender" : ""
            } text-lg md:text-sm m-auto ml-2`}
          >
            Stilian Balasopoulov
          </Link>
        </div>
        <div
          className={`${
            isActive === "open"
              ? "opacity-100 delay-200"
              : "opacity-0 pointer-events-none delay-0"
          } transition-all h-full flex flex-col gap-2`}
        >
          <div className="md:mt-[53px] flex flex-col m-2 bg-opacity-75 mb-0 p-2 flex-grow overflow-auto bg-mantle rounded-md gap-1.5">
            {navbarInfo.map((item) => (
              <div className="flex" key={item.key}>
                <Link
                  href={item.path}
                  className={`${
                    currentRoute === item.path ? "bg-surface1" : "bg-base"
                  } w-full transition-all hover:bg-surface0 bg-opacity-75 hover:cursor-pointer text-center rounded-sm p-4 md:p-2`}
                  onClick={isLocked ? CloseNav : undefined}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
          <div className="mx-2 mb-[50px] md:mb-2 bg-mantle rounded-md p-2 flex flex-col gap-2">
            <div className="flex gap-2">
              {socialsInfo.map((social) => (
                <Link
                  href={social.url}
                  className="flex-grow text-center bg-base rounded-sm bg-opacity-75 hover:bg-surface0 transition-all"
                  key={social.key}
                >
                  <i className={`${social.class}`}></i>
                </Link>
              ))}
            </div>
            <Link
              href="#"
              className={`bg-base hover:bg-surface0 transition-all rounded-sm bg-opacity-75 text-center`}
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
