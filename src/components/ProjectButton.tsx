import Link from "next/link";
import React from "react";

function ProjectButton(props: any) {
  return (
    <Link href={props.link} target="_blank" className="flex flex-col rounded-md bg-surface0 p-2 transition-all hover:bg-surface1">
      <div className="flex justify-between">
        <div className="text-lg">{props.name}</div>
        <div className="flex gap-2">
          {props.tags.map((i) => (
            <div
              className=
              {`
            ${i === "Kotlin" ? "bg-peach" : "bg-blue"}
            ${i === "Auth0" ? "bg-mauve" : ""}
            ${i === "Swift" ? "bg-sky" : ""}
            ${i === "Python" ? "bg-green" : ""}
            ${i === "Open-Source" ? "bg-lavender" : ""}
            ${i === "NextJS" ? "bg-yellow" : ""}
            ${i === "Prisma" ? "bg-sapphire" : ""}
            rounded-md p-1 text-crust text-sm`}
              key={`${props.name}key${i}`}>
              {i}
            </div>
          ))}
        </div>
      </div>
      <p className="text-subtext0 p-2">{props.desc}</p>
    </Link>
  );
}

export default ProjectButton;
