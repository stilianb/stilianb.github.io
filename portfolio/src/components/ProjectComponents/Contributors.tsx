import React from "react";
import {
  CONTRIBUTORS_A,
  CONTRIBUTORS_B,
  PROJECTA_NAME,
  PROJECTB_NAME,
} from "../../constants/ProjectInfo";

function Contributors(props) {
  let contributors = CONTRIBUTORS_A;

  switch (props.project) {
    case PROJECTA_NAME:
      contributors = CONTRIBUTORS_A;
      break;
    case PROJECTB_NAME:
      contributors = CONTRIBUTORS_B;
      break;
  }

  return (
    <div className="">
      <div className="text-center border-b border-subtext0 mb-1">Contributors</div>
      {contributors.map((c) => {
        return (
          <a href={c.url} key={c.key} className="text-center">
            <div className="">{c.name}</div>
          </a>
        );
      })}
    </div>
  );
}

export default Contributors;
