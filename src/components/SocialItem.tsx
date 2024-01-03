import Link from "next/link";
import React from "react";

function SocialItem() {
  return (
    <Link
      href="#"
      className="flex items-center justify-center rounded-md bg-surface0 p-3 hover:bg-surface1 md:p-0 transition-all"
    >
      <div className="">@</div>
      <h1 className="">Name</h1>
    </Link>
  );
}

export default SocialItem;
