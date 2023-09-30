import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full text-lg font-medium border-t-2 border-solid border-dark dark:text-light dark:border-light">
      <layout className="flex items-center justify-between py-4 mx-10 ">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div>
          Built with <span className="text-xl text-pink-700">&#9825;</span>{" "}
          by&nbsp;
          <Link
            href="https://www.linkedin.com/in/sto-hernandez/"
            className="underline underline-offset-2"
          >
            AH
          </Link>
        </div>
        <Link
          href="https://www.linkedin.com/in/sto-hernandez/"
          className="underline underline-offset-2"
        >
          Say Hello
        </Link>
      </layout>
    </footer>
  );
};

export default Footer;
