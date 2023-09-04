import Head from "next/head";
import AnimatedTexts from "@/components/AnimatedTexts";
import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/icons";
import beerfinderapp from "/public/images/projects/beerfinderapp.png";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, protitle, summary, img, link, github }) => {
  return (
    
    <article className="relative flex items-center justify-center w-full p-12 border border-b-4 border-r-4 border-solid shadow-2xl rounded-3xl border-dark bg-light">

      <Link
        href={link}
        target="_blank"
        className="flex items-center justify-center w-1/2 overflow-hidden rounded-lg cursor-pointer"
      >
        <FramerImage
          src={img}
          alt={protitle}
          className="w-full h-auto "
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="flex flex-col items-start justify-between w-1/2 pl-6">
        <span className="text-xl font-medium text-primary">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="w-full my-2 text-4xl font-bold text-left ">
            {protitle}
          </h2>
        </Link>
        <p>{summary}</p>
        <div className="flex items-center mt-2">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="p-2 px-6 ml-4 text-lg font-semibold rounded-lg bg-dark text-light"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, protitle, summary, img, link, github }) => {
  return (
    <div>
      <article className="relative flex flex-col items-center justify-center w-full p-6 py-10 border border-b-4 border-r-4 border-solid rounded-2xl border-dark bg-light">
        
        <Link
          href={link}
          target="_blank"
          className="w-1/2 overflow-hidden rounded-lg cursor-pointer "
        >
          <FramerImage
            src={img}
            alt={protitle}
            className="items-center justify-between w-full h-auto mt-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          />
        </Link>
        <div className="flex flex-col items-start justify-between w-1/2 pl-6">
          <span className="text-xl font-medium text-primary">{type}</span>
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="w-full my-2 text-3xl font-bold text-left ">
              {protitle}
            </h2>
          </Link>
          <p>{summary}</p>
          <div className="flex items-center justify-between w-full ">
            <Link href={github} target="_blank" className="w-8">
              <GithubIcon />
            </Link>
            <Link
              href={link}
              target="_blank"
              className="p-1 px-6 text-lg font-semibold rounded-lg bg-dark text-light"
            >
              Visit Project
            </Link>
          </div>
        </div>
      </article>
      ;
    </div>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>AH || Project Page</title>
        <meta name="Portfolio" content="cv portfolio made with react/nextjs" />
      </Head>
      <main className="flex flex-col justify-center w-full px-4 mb-16 item-container ">
        <Layout className="pt-16">
          <AnimatedTexts
            text="“Technology is best when it brings people together”"
            className="mb-16"
          />
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12 ">
              <FeaturedProject
                title="Featured Project"
                img={beerfinderapp}
                protitle="Beer Finder App"
                link="/"
                github="/"
                type="Full Stack Application/Web"
                summary="A web application that allows users to search for breweries by city, state, or name. The application also allows users to filter by brewery type. Stack used React, Next.js, Tailwind CSS, Framer Motion, Open Brewery DB API, Java Spring Boot, PostgreSQL"
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                title="Featured Project"
                img={beerfinderapp}
                protitle="Beer Finder App"
                link="/"
                github="/"
                type="Full Stack Application/Web"
                summary="A web application that allows users to search for breweries by city, state, or name. The application also allows users to filter by brewery type. Stack used React, Next.js, Tailwind CSS, Framer Motion, Open Brewery DB API, Java Spring Boot, PostgreSQL"
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                title="Featured Project"
                img={beerfinderapp}
                protitle="Beer Finder App"
                link="/"
                github="/"
                type="Full Stack Application/Web"
                summary="A web application that allows users to search for breweries by city, state, or name. The application also allows users to filter by brewery type. Stack used React, Next.js, Tailwind CSS, Framer Motion, Open Brewery DB API, Java Spring Boot, PostgreSQL"
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                title="Featured Project"
                img={beerfinderapp}
                protitle="Beer Finder App"
                link="/"
                github="/"
                type="Full Stack Application/Web"
                summary="A web application that allows users to search for breweries by city, state, or name. The application also allows users to filter by brewery type. Stack used React, Next.js, Tailwind CSS, Framer Motion, Open Brewery DB API, Java Spring Boot, PostgreSQL"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Featured Project"
                img={beerfinderapp}
                protitle="Beer Finder App"
                link="/"
                github="/"
                type="Full Stack Application/Web"
                summary="A web application that allows users to search for breweries by city, state, or name. The application also allows users to filter by brewery type. Stack used React, Next.js, Tailwind CSS, Framer Motion, Open Brewery DB API, Java Spring Boot, PostgreSQL"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
