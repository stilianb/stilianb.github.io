import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import React, { useState } from "react";

function App() {
  const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
    setActive(!isActive);
  };
  return (
    <>
      <div className={isActive ? "mocha" : "latte"}>
        <div className="bg-base rounded-md max-w-5xl mx-auto my-2 py-2">
          <Hero />
          <Navbar mode={ToggleClass} />
          <Projects />
          <About />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
