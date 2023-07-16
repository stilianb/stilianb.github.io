"use client";
import React, { useState } from "react";
import Navbar from "./navbar/Navbar";
import Transition from "./Transition";

function NightMode({ children }) {
  const [darkMode, setDarkMode] = useState("false");
  const ToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`${darkMode ? "mocha " : "latte"
        } w-full relative transition-all text-text max-w-[1680px] mx-auto`}
    >
      <style jsx global>{`
        body {
          background: linear-gradient(
            -45deg,
            ${darkMode ? "#11111b" : "#bcc0cc"},
            ${darkMode ? "#181825" : "#9ca0b0"}
          );
          background-size: 400% 400%;
          animation: gradient 10s ease infinite;
        }
        html {
          background-color: ${darkMode ? "#11111b" : "#bcc0cc"};
        }
      `}</style>
        {children}
      <div className="">
        <Navbar mode={ToggleDarkMode} />
      </div>
    </div>
  );
}

export default NightMode;
