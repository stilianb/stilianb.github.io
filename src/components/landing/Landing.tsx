import React from "react";
import LandingImage from "./LandingImage";
import LandingInfo from "./LandingInfo";
import LandingDesc from "./Landingdesc";

function Landing() {
  return (
    <div className="flex flex-col flex-grow gap-2 rounded-md bg-crust p-2">
      <div className="flex bg-mantle rounded-md p-2">
        <LandingImage />
        <LandingInfo />
      </div>
      <LandingDesc />
    </div>
  );
}

export default Landing;
