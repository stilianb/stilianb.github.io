import "./App.css";
import React, { useState } from "react";
import DefaultCard from "./components/ProjectComponents/Cards/DefaultCard";
import ProjectCard from "./components/ProjectComponents/Cards/ProjectCard";
import AltCard from "./components/ProjectComponents/Cards/AltCard";
import MiscCard from "./components/ProjectComponents/Cards/MiscCard";
import {
  DESCRIPTION_A,
  DESCRIPTION_B,
  PROJECTA_NAME,
  PROJECTB_NAME,
  PROJECTC_NAME,
  PROJECTD_NAME,
  TEASER_A,
  TEASER_B,
} from "./constants/ProjectInfo";

function App() {
  let [activeCard, setActiveCard] = useState("default");
  let [isActive, setActive] = useState("false");
  let [lightMode, setLightMode] = useState("false");

  const ToggleMode = () => {
    setLightMode(!lightMode);
  };

  const ToggleProjects = () => {
    setActive(!isActive);
  };

  function ToggleCard(card) {
    activeCard === card ? setActiveCard("default") : setActiveCard(`${card}`);
    if (card !== "default") {
      setActive(!isActive);
    }
  }

  return (
    <>
      <div
        className={`${lightMode ? "mocha" : "latte"
          } bg-black h-screen w-full text-text overflow-auto`}
      >
        <div className="h-full w-full flex flex-col md:flex-row p-4 gap-4 md:justify-center ">
          <div className="flex-grow relative max-w-3xl h-full md:my-auto ">
            <DefaultCard name={activeCard} />
            <ProjectCard
              card={activeCard}
              name={PROJECTA_NAME}
              teas={TEASER_A}
              desc={DESCRIPTION_A}
            />
            <ProjectCard
              card={activeCard}
              name={PROJECTB_NAME}
              teas={TEASER_B}
              desc={DESCRIPTION_B}
            />
            <AltCard card={activeCard} name={PROJECTC_NAME} />
            <AltCard card={activeCard} name={PROJECTD_NAME} />
          </div>
          <div className="fixed bottom-4 right-4 md:relative h-fit my-auto flex flex-col">
            <div className={`${isActive ? "opacity-100" : "opacity-0 md:opacity-100"} ml-11 md:ml-6 px-2 bg-mantle w-fit rounded-t-md`}>
              Projects
            </div>
            <div className="md:bg-mantle md:ml-4 md:p-2 md:rounded-md relative">
              <div
                className={`${isActive
                    ? "opacity-100"
                    : "hidden md:block opacity-0 md:opacity-100"
                  } translate-all duration-100 hover:cursor-pointer hover:text-blue overflow-hidden absolute text-3xl md:text-lg right-4 -top-8 md:-top-4 bg-crust rounded-t-md px-3`}
                onClick={ToggleMode}
              >
                <i className="fa-solid fa-moon"></i>
              </div>
              <div className="flex ">
                <div className=" my-auto md:hidden ml-auto">
                  <div
                    className="bg-pink text-base p-4 rounded-l-md flex gap-2"
                    onClick={ToggleProjects}
                  >
                    <i
                      className={`${isActive ? "fa-solid fa-x" : "fa-solid fa-bars"
                        } my-auto `}
                    ></i>
                  </div>
                </div>
                <div
                  className={`${isActive
                      ? "max-w-[500px] p-2"
                      : "max-w-0 md:max-w-[500px] w-full px-0"
                    } bg-crust py-2 md:p-2  lg:max-h-fit whitespace-nowrap rounded-l-md overflow-auto flex gap-2 flex-col translate-all duration-200`}
                >
                  <button
                    className={`${activeCard === PROJECTA_NAME
                        ? "bg-surface2"
                        : "bg-surface0"
                      } hover:bg-surface1 border-surface1`}
                    onClick={() => ToggleCard(`${PROJECTA_NAME}`)}
                  >
                    {PROJECTA_NAME}
                  </button>
                  <button
                    className={`${activeCard === PROJECTB_NAME
                        ? "bg-surface2"
                        : "bg-surface0"
                      } hover:bg-surface1 border-surface1`}
                    onClick={() => ToggleCard(`${PROJECTB_NAME}`)}
                  >
                    {PROJECTB_NAME}
                  </button>
                  <button
                    className={`${activeCard === PROJECTC_NAME
                        ? "bg-surface2"
                        : "bg-surface0"
                      } hover:bg-surface1 border-surface1`}
                    onClick={() => ToggleCard(`${PROJECTC_NAME}`)}
                  >
                    {PROJECTC_NAME}
                  </button>
                  <button
                    className={`${activeCard === PROJECTD_NAME
                        ? "bg-surface2"
                        : "bg-surface0"
                      } hover:bg-surface1 border-surface1`}
                    onClick={() => ToggleCard(`${PROJECTD_NAME}`)}
                  >
                    {PROJECTD_NAME}
                  </button>
                </div>
              </div>
              <div className="hidden md:flex gap-1 justify-evenly text-2xl mt-2 bg-crust rounded-md p-2">
                <a href="#" className="">
                  <i className="fa-brands fa-github my-auto"></i>
                </a>
                <a href="#" className="">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="#" className="">
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
