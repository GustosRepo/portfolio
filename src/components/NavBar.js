import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { LinkedInIcon, GithubIcon} from "./icons";
import SdsLogo from "./SdsLogo";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { SunIcon } from "./icons";
import {MoonIcon} from "./icons";


const CustomLink = ({href, title, className = ""}) => {
    const router = useRouter();
    console.log(router);
    return (
        <Link href ={href} className={`${className} relative group`}>
            {title}
            <span className={` dark:bg-light h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover: w-full, transition-[width] ease duration-300
            ${router.asPath === href? 'w-full' : 'w-0' }` }>&nbsp;</span>
        </Link>
    )
}

const NavBar = () => {

  const [mode, setmode] = useThemeSwitcher();
  return (
    <header className="flex items-center justify-between w-full px-32 py-8 font-medium dark:text-light">
      <nav>
        <CustomLink href="/" title="Home" className = "mr-4 underline underline-offset-4 hover:underline-offset-8 " />
        <CustomLink href="/about" title="About" className = "mx-4 underline underline-offset-4 hover:underline-offset-8" />
        <CustomLink href="/projects" title="Projects" className = "mx-4 underline underline-offset-4 hover:underline-offset-8" />
        <CustomLink href="/articles" title="Articles" className = "ml-4 underline underline-offset-4 hover:underline-offset-8"/>
      </nav>
      <nav className="flex flex-wrap items-center justify-center">
        <motion.a href="https://www.linkedin.com/in/sto-hernandez/" target={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className="w-6 ml-3"
        >
            <LinkedInIcon />
          </motion.a>
        <motion.a href="https://www.stosdigital.com/" target={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className="w-6 mr-3"
        >
          <SdsLogo />
        </motion.a>
        <motion.a href="https://github.com/GustosRepo" target={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className="w-6 ml-3">
          <GithubIcon className="flex"/>
        </motion.a>

        <button
        onClick={() => setmode(mode === "light" ? "dark" : "light")}
        className={`flex items-center justify-center  rounded-full ${mode === "light" ? "bg-dark text-light": "bg-light : text-dark"}`}
        >
          { 
            mode === "dark" ?
            <SunIcon className={"w-6 mr-2 fill-dark" }/> : <MoonIcon className={"fill-dark"} />
          }
        </button>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-%50]">
        <Logo/>
      </div>

    </header>
  );
};

export default NavBar;
