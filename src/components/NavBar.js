import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { LinkedInIcon, GithubIcon} from "./icons";
import SdsLogo from "./SdsLogo";
import { motion } from "framer-motion";


const CustomLink = ({href, title, className = ""}) => {
    const router = useRouter();
    console.log(router);
    return (
        <Link href ={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover: w-full, transition-[width] ease duration-300
            ${router.asPath === href? 'w-full' : 'w-0' }`}>&nbsp;</span>
        </Link>
    )
}

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className = "mr-4 underline underline-offset-4 hover:underline-offset-8 " />
        <CustomLink href="/about" title="About" className = "mx-4 underline underline-offset-4 hover:underline-offset-8" />
        <CustomLink href="/projects" title="Projects" className = "mx-4 underline underline-offset-4 hover:underline-offset-8" />
        <CustomLink href="/articles" title="Articles" className = "ml-4 underline underline-offset-4 hover:underline-offset-8"/>
      </nav>
      <nav className="flex items-center justify-center flex-wrap">
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
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-%50]">
        <Logo/>
      </div>

    </header>
  );
};

export default NavBar;
