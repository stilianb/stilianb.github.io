import Link from "next/link";
import React from "react";

function SocialItem(props: any) {
  return (
    <Link
      href={props.link}
      className="flex items-center justify-center rounded-md bg-surface0 p-3 transition-all hover:bg-surface1 md:p-0"
    >
      <div className="flex gap-2 items-center">
        <i className={props.icon}></i>
        <h1 className="">{props.name}</h1>
      </div>
    </Link>
  );
}

export default SocialItem;
