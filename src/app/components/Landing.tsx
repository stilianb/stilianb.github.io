import React from "react";
import Image from "next/image";
import photo from "../images/test(1).jpg";

function Landing(props) {
  return (
    <div className="flex flex-col gap-2 w-full p-2 pb-0 md:pb-2 md:pr-0">
      <div className="bg-mantle rounded-md flex-grow relative flex flex-col min-h-[350px]">
        <div className="bg-crust rounded-full overflow-hidden w-fit absolute z-10 right-0 m-8 ">
          <Image src={photo} width={`300`} /> 
        </div>
        <div className="z-20 absolute bottom-0 left-0 m-3 md:m-8 ">
          <div className="text-subtext0 pl-2">Hi, I'm</div>
          <div className="text-6xl">
            <div className="">Stilian</div>
            <div className="">Balasopoulov</div>
          </div>
          <div className="pl-1 text-subtext1">Frontend Web Developer</div>
        </div>
      </div>
      <div className="bg-mantle flex flex-col gap-4 p-2 rounded-md ">
        <div className="text-subtext1 ">
          Thanks for visiting! I'm a software engineer from Seattle with a
          passion for web development and UX/UI design. Feel free to check out
          my work or get in touch.
        </div>
        <div className="flex gap-2">
          <a
            href="#"
            className="bg-crust hover:bg-surface0 transition-all rounded-md p-1 w-full text-center"
          >
            Get In Touch
          </a>
          <a
            href="#"
            className="bg-crust hover:bg-surface0 transition-all rounded-md p-1 w-full text-center"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Landing;
