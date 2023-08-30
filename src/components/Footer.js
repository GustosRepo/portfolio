import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <layout className=" py-4 mx-10 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div>
          Built with <span className="text-pink-700 text-xl">&#9825;</span>{" "}
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
