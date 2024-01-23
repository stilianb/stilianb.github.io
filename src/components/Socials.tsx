import Link from "next/link";
import React from "react";

function Socials(props: any) {
  return (
    <Link
      href={props.link}
      className="rounded-md p-1 flex flex-grow items-center justify-center gap-2 bg-surface0 transition-all hover:bg-surface1"
    >
      <i className={`${props.icon}`}></i>
      <p className="">{props.name}</p>
    </Link>
  );
}

export default Socials;
