"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import navbarInfo from "./navbarInfo.json";
import { usePathname } from "next/navigation";

function Navbar() {
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
          ? "max-w-[300px] max-h-[500px] bg-crust"
          : "max-h-[40px] max-w-[40px]"
      } fixed lg:absolute right-0 bottom-0 md:top-0 transition-all h-full w-full m-8 rounded-md overflow-hidden`}
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
        <div className="min-w-[300px] min-h-fit absolute right-0 flex flex-col px-2 py-1">
          <Link
            href="/"
            className="hover:opacity-80 transition-all text-subtext1 w-fit"
          >
            Stilian Balasopoulov
          </Link>
          <div className="max-h-fit py-2">
            <div className="flex flex-col gap-1 ">
              {navbarInfo.map((item) => (
                <Link
                  href={item.path}
                  key={item.key}
                  className={`${
                    currentRoute === item.path ? "text-text" : ""
                  } transition-all text-sm group text-subtext0 hover:text-subtext1`}
                >
                  {item.name}
                  <div
                    className={`${
                      currentRoute === item.path ? "w-full" : "w-0"
                    } group-hover:w-full border-b border-subtext0 transition-all`}
                  ></div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 md:top-0 right-0 h-[40px] w-[40px] flex">
          <div
            className="w-full flex m-1 rounded-md bg-crust hover:bg-surface0 hover:cursor-pointer transition-all"
            onClick={ToggleLock}
          >
            <i
              className={`${
                isLocked ? "" : "rotate-45"
              } fa-solid fa-plus h-fit transition-all m-auto`}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
