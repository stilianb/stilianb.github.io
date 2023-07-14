"use client";
import React, { useState } from "react";

function NightMode({ children }) {
  const [darkMode, setDarkMode] = useState("false");

  const ToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div
      className={`${darkMode ? "mocha " : "latte"
        } w-full relative transition-all text-text `}
    >
      <style jsx global>{`
        html {
          background: linear-gradient(
            -45deg,
            ${darkMode ? "#11111b" : "#bcc0cc"},
            ${darkMode ? "#181825" : "#9ca0b0"}
          );
          background-size: 400% 400%;
          animation: gradient 40s ease infinite;
        }
      `}</style>
      {children}
      <div className=" hidden absolute top-0 right-0 h-[40px] w-[40px] m-4 rounded-md flex z-50"
        onClick={ToggleDarkMode}
      >
        <i
          className="fa-solid fa-moon m-auto"
        ></i>
      </div>
    </div>
  );
}

export default NightMode;
