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

function App() {
  let [activeCard, setActiveCard] = useState("default");
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
      <div className={`${lightMode ? "mocha" : "latte"} text-text relative`}>
        <div className={`h-screen flex max-w-[1080px] mx-auto gap-2 p-2`}>
          <div className="flex-grow w-full relative flex">
            <div
              className={`${isActive ? "opacity-100" : "opacity-50"
                } translate-all duration-200 h-full absolute bg-mantle rounded-md w-full overflow-auto `}
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
            </div>
            <div
              className={`${isActive
                ? "max-w-[45px] md:max-w-[60px] max-h-[45px] md:max-h-[60px] overflow-hidden"
                : "max-w-[335px] md:max-w-[600px] max-h-[450px]"
                } bg-crust rounded-md absolute w-full h-full drop-shadow-lg bottom-16 right-10 md:right-14 translate-all duration-[200ms]`}
              onMouseEnter={isActive ? ToggleProjects : undefined}
              onMouseLeave={isActive ? undefined : ToggleProjects}
            >
              <div
                className={`${isActive ? "top-3 opacity-0" : "-top-3 delay-[400ms]"
                  } absolute translate-all duration-200 overflow-hidden h-full max-h-[40px] left-6 bg-mantle px-2 pt-1 rounded-t-md`}
              >
                Projects
              </div>
              <div
                className={`${isActive
                  ? "opacity-0 delay-0 duration-0"
                  : "opacity-100 delay-200"
                  } translate-all duration-200 h-full flex flex-col`}
              >
                <div className="p-2 bg-mantle z-50 rounded-md m-4 ">
                  <div className="md:max-h-[312px] overflow-auto ">
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
                <div className="h-full flex">
                  <div className="m-auto flex gap-2">
                    <div className="h-fit my-auto">Get in Touch:</div>
                    <div className="flex gap-2 text-xl">
                      <a href="#" className=""><i className="fa-brands fa-github"></i></a>
                      <a href="#" className=""><i className="fa-brands fa-linkedin"></i></a>
                      <a href="#" className=""><i className="fa-solid fa-envelope"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`${isActive ? "" : ""
                  } w-fit absolute bottom-1.5 right-3`}
                onClick={ToggleProjects}
              >
                <i
                  className={`${isActive ? "" : "rotate-45 "
                    } hover:cursor-pointer translate-all duration-200 fa-solid fa-plus text-2xl`}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
