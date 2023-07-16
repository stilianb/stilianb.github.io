import Link from "next/link";
import Transition from "./components/Transition";

export default function Home() {
  return (
    <div className="bg-base bg-opacity-50 w-full flex flex-col">
      <div className="p-8 text-xl flex flex-col gap-4 h-2/3 md:h-3/4 m-auto max-w-lg md:max-w-[75%]">
        <div className="flex flex-col ">
          <h2 className="ml-1 text-subtext0 ">Hi, I'm</h2>
          <h1 className="text-5xl">Stilian Balasopoulov</h1>
          <h3 className="ml-1 text-subtext0">A webdev based in Colorado.</h3>
        </div>
        <p className="ml-1 text-subtext1 md:text-sm">
          Thanks for visiting! I'm a software engineer from Seattle with a
          passion for web development and UX/UI design. Feel free to check out
          my work or get in touch.
        </p>
      </div>
    </div>
  );
}
