import React from "react";
import socials from "./info/socials.json";

function Socials() {
  return (
    <div className="bg-mantle rounded-md">
      <div className="flex p-2 gap-2">
        {socials.map((item) => (
          <a
            href={`${item.url}`}
            target="_blank"
            className="w-full bg-crust rounded-md flex p-1 hover:bg-surface0 transition-all"
          >
            <i className={`fa-brands ${item.icon} text-xl m-auto`}></i>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Socials;
