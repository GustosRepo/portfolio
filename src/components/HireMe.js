import React from "react";
import { CircularText } from "./icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed flex items-center justify-center overflow-hidden right-4 bottom-16">
      <div className="relative flex items-center justify-center w-48 h-auto">
        <CircularText
          className={"fill-black animate-spin-slow dark:border:fill-white  "}
        />
        <Link
          href="mailto:aa.hernandez7602@gmail.com"
          target={"_blank"}
          className="absolute flex items-center justify-center w-20 h-20 font-semibold -translate-x-1/2 -translate-y-1/2 border border-solid rounded-full shadow-md left-1/2 top-1/2 bg-dark text-light border-dark hover:bg-light hover:text-dark hover:border-light dark:bg-light dark:text-dark hover:dar:bg-light hover:dark:text-light hover:dark:border-light hover:dark:bg-dark"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
