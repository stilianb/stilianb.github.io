import "./App.css";
import React, { useState } from "react";
import Projects from "./components/ProjectComponents/Projects";

function App() {
  return (
    <>
      <div className="p-2 h-screen flex">
        <div className="text-text rounded-md max-h-full w-full mx-auto max-w-5xl p-2 ">
          <Projects />
        </div>
      </div>
    </>
  );
}

export default App;
