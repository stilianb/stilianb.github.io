import React from "react";
import SocialItem from "./SocialItem";
import socials from "../../../api/socials.json";

function Socials() {
  return (
    <div className="h-full rounded-md bg-mantle p-2">
      <div className="flex h-full grid-cols-2 flex-col gap-2 md:grid">
        {socials.map((social) => (
          <SocialItem
            icon={social.icon}
            name={social.name}
            link={social.link}
            key={social.key}
          />
        ))}
      </div>
    </div>
  );
}

export default Socials;
