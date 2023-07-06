import "./App.css";
import React, { useLayoutEffect, useState, useRef, useEffect } from "react";
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
import cliqebaitIMG from "./assets/CliquebaitIMG.png";
import ProjectButton from "./components/ProjectComponents/ProjectButton";

function App(props) {
  let [activeCard, setActiveCard] = useState(props.card);
  let [isActive, setActive] = useState("false");
  let [lightMode, setLightMode] = useState("false");

  const ToggleMode = () => {
    setLightMode(!lightMode);
  };

  React.useEffect(() => {
    lightMode
      ? (document.body.style.backgroundColor = "#1e1e2e")
      : (document.body.style.backgroundColor = "#eff1f5");
  });

  const ToggleProjects = () => {
    setActive(!isActive);
  };

  function ToggleCard(card) {
    activeCard === card ? setActiveCard("default") : setActiveCard(`${card}`);
  }

  return (
    <>
      <div className={`${lightMode ? "mocha" : "latte"} text-text relative `}>
        <div className={`h-screen flex max-w-[1080px] mx-auto gap-2 p-2`}>
          <div className="flex-grow w-full relative flex max-h-[800px] md:max-h-screen ">
            <div
              className={`${isActive ? "opacity-100" : "opacity-50"
                } translate-all duration-200 h-full absolute bg-crust z-20 rounded-md w-full overflow-auto `}
              onClick={isActive ? undefined : ToggleProjects}
            >
              <DefaultCard card={activeCard} />
              <ProjectCard
                card={activeCard}
                name={PROJECTA_NAME}
                teas={TEASER_A}
                desc={DESCRIPTION_A}
                more={
                  "https://docs.google.com/presentation/d/1TvB-P4ES_shrCvMDLLGPOsVl7jnPb_X3fgrkiGYLBXE/edit?usp=sharing"
                }
                url={"https://github.com/CliqBait/main"}
                image={cliqebaitIMG}
              />
              <ProjectCard
                card={activeCard}
                name={PROJECTB_NAME}
                teas={TEASER_B}
                desc={DESCRIPTION_B}
              />
              <AltCard card={activeCard} name={PROJECTC_NAME} />
              <MiscCard card={activeCard} name={PROJECTD_NAME} />
            </div>
            <div
              className={`${isActive
                ? "max-w-[45px] max-h-[45px] overflow-hidden"
                : "max-w-[335px] max-h-[300px] "
                } bg-crust rounded-md fixed md:hidden overflow-auto w-full h-full drop-shadow-lg z-30 bottom-8 right-8 translate-all duration-[200ms]`}
              onMouseEnter={isActive ? ToggleProjects : undefined}
              onMouseLeave={isActive ? undefined : ToggleProjects}
            >
              <div
                className={`${isActive ? "top-5 opacity-0" : "-top-0 delay-[400ms]"
                  } absolute translate-all duration-200 overflow-hidden h-full max-h-[40px] left-6 bg-mantle px-2 pt-1 rounded-t-md`}
              >
                Projects
              </div>
              <div
                className={`${isActive
                  ? "opacity-0 delay-0 duration-0"
                  : "opacity-100 delay-200"
                  } translate-all duration-200 h-full flex flex-col absolute`}
              >
                <div className="p-2 bg-mantle z-50 flex-grow rounded-md mt-10 mx-4 ">
                  <div className="border max-h-[100px] overflow-auto">
                    <div className="" onClick={() => ToggleCard(PROJECTA_NAME)}>
                      <ProjectButton
                        card={activeCard}
                        project={PROJECTA_NAME}
                      />
                    </div>
                    <div className="" onClick={() => ToggleCard(PROJECTB_NAME)}>
                      <ProjectButton
                        card={activeCard}
                        project={PROJECTB_NAME}
                      />
                    </div>
                    <div className="" onClick={() => ToggleCard(PROJECTC_NAME)}>
                      <ProjectButton
                        card={activeCard}
                        project={PROJECTC_NAME}
                      />
                    </div>
                    <div className="" onClick={() => ToggleCard(PROJECTD_NAME)}>
                      <ProjectButton
                        card={activeCard}
                        project={PROJECTD_NAME}
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-mantle flex p-2 gap-2 rounded-md min-w-[300px] max-w-[300px] mx-auto mb-4">
                  <a
                    href="#"
                    className="bg-surface0 hover:bg-surface1 rounded-sm flex-grow text-center"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a
                    href="#"
                    className="bg-surface0 hover:bg-surface1 rounded-sm flex-grow text-center"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a
                    href="#"
                    className="bg-surface0 hover:bg-surface1 rounded-sm flex-grow text-center"
                  >
                    <i className="fa-solid fa-envelope"></i>
                  </a>
                </div>
                <div className="flex ml-3 gap-2 bg-mantle w-fit p-1 rounded-md -mt-3">
                  <div
                    className="w-fit bg-surface0 hover:bg-surface1 hover:cursor-pointer px-2 py-1 rounded-md"
                    onClick={ToggleMode}
                  >
                    <i className="fa-solid fa-moon"></i>
                  </div>
                  <div
                    className="w-fit bg-surface0 hover:bg-surface1 hover:cursor-pointer px-2 py-1 rounded-md"
                    onClick={() => ToggleCard("default")}
                  >
                    <i className="fa-solid fa-house"></i>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${isActive ? "max-w-[50px] bg-mantle" : "max-w-[400px] bg-crust"
                } translate-all duration-[400ms] hidden md:absolute z-50 -right-[60px] w-full h-full md:flex flex-col rounded-md`}
              onMouseEnter={isActive ? ToggleProjects : undefined}
              onMouseLeave={isActive ? undefined : ToggleProjects}
            >
              <div className="overflow-auto relative flex-grow text-xl">
                <div
                  className={`${isActive ? "opacity-0 delay-50" : "opacity-100 delay-200"
                    } w-full translate-all duration-100 flex flex-col absolute text-3xl md:text-xl whitespace-nowrap text-center px-2 pt-2 `}
                >
                  <div className="">Stilian Balasopoulov</div>
                  <div
                    className={`${isActive ? "max-w-0" : "max-w-[1000px] delay-[400ms]"
                      } translate-all duration-[600ms] w-full border-t border-subtext0 mx-auto`}
                  ></div>
                </div>
                <div
                  className={`${isActive
                    ? "opacity-100 duration-200 delay-[300ms]"
                    : "opacity-0 duration-100"
                    } translate-all absolute w-full text-center py-2`}
                >
                  SB
                </div>
                <div className="flex flex-col h-full">
                  <div
                    className={` ${isActive
                      ? "opacity-0 duration-100 hidden lg:flex"
                      : "opacity-100 duration-200 delay-300"
                      } translate-all flex-grow mt-14 flex flex-col whitespace-nowrap`}
                  >
                    <div className="my-auto">
                      <div className="text-sm w-fit bg-mantle rounded-t-md p-1 ml-6">
                        Stuff I've worked on
                      </div>
                      <div
                        className={`bg-mantle h-fit mx-2 mb-2 rounded-md overflow-auto`}
                      >
                        <div
                          className=""
                          onClick={() => ToggleCard(PROJECTA_NAME)}
                        >
                          <ProjectButton
                            card={activeCard}
                            project={PROJECTA_NAME}
                          />
                        </div>
                        <div
                          className=""
                          onClick={() => ToggleCard(PROJECTB_NAME)}
                        >
                          <ProjectButton
                            card={activeCard}
                            project={PROJECTB_NAME}
                          />
                        </div>
                        <div
                          className=""
                          onClick={() => ToggleCard(PROJECTC_NAME)}
                        >
                          <ProjectButton
                            card={activeCard}
                            project={PROJECTC_NAME}
                          />
                        </div>
                        <div
                          className=""
                          onClick={() => ToggleCard(PROJECTD_NAME)}
                        >
                          <ProjectButton
                            card={activeCard}
                            project={PROJECTD_NAME}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${isActive
                      ? "opacity-0 duration-100"
                      : "opacity-100 duration-200 delay-300"
                      } translate-all flex-grow`}
                  >
                    <div className="bg-mantle rounded-md relative p-2 m-2 flex flex-col gap-2">
                      <div className="absolute bg-mantle -top-5 rounded-t-md px-2 text-sm">
                        Get in touch
                      </div>
                      <div className="flex gap-2">
                        <a
                          href="#"
                          className="bg-surface0 hover:bg-surface1 transition-all rounded-sm flex-grow text-center"
                        >
                          <i className="fa-brands fa-github"></i>
                        </a>
                        <a
                          href="#"
                          className="bg-surface0 hover:bg-surface1 transition-all rounded-sm flex-grow text-center"
                        >
                          <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a
                          href="#"
                          className="bg-surface0 hover:bg-surface1 transition-all rounded-sm flex-grow text-center"
                        >
                          <i className="fa-solid fa-envelope"></i>
                        </a>
                      </div>
                      <a
                        href="#"
                        className="bg-surface0 hover:bg-surface1 transition-all rounded-sm text-center text-md"
                      >
                        Resume PDF
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col text-center mb-2 gap-2">
                    <i
                      className={`${isActive ? "" : "bg-surface0 mx-2"
                        } fa-solid fa-house hover:bg-surface1 py-1 rounded-sm transition-all hover:cursor-pointer`}
                      onClick={() => ToggleCard("default")}
                    ></i>
                    <i
                      className={`${isActive ? "" : "bg-surface0 mx-2"
                        } fa-solid fa-moon hover:bg-surface1 py-1 rounded-sm transition-all hover:cursor-pointer`}
                      onClick={ToggleMode}
                    ></i>
                    <div className={`${isActive ? "opacity-100 delay-200" : "opacity-0"} pointer-events-none transition-all absolute h-full w-full top-0 flex flex-col `}>
                      <i className="fa-solid fa-angle-left my-auto animate-xbounce opacity-75"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:p-2 md:w-[50px]"></div>
        </div>
      </div>
    </>
  );
}

export default App;
