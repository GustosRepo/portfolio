import React from "react";
import Head from "next/head";
import AnimatedTexts from "@/components/AnimatedTexts";
import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/icons";
import beerfinderapp from "/public/images/projects/beerfinderapp.png";

const FeaturedProject = ({ type, protitle, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl">
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg "
      >
        <Image
          src={img}
          alt={protitle}
          className="w-1/3 h-1/3 items-center justify-between"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className=" text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold ">
            {protitle}
          </h2>
        </Link>
        <p>{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
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
      <article className="w-full py-10 flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative">
        <Link
          href={link}
          target="_blank"
          className="w-1/2 cursor-pointer overflow-hidden rounded-lg "
        >
          <Image
            src={img}
            alt={protitle}
            className="w-full h-auto items-center justify-between mt-4"
          />
        </Link>
        <div className="w-1/2 flex flex-col items-start justify-between pl-6">
          <span className=" text-primary font-medium text-xl">{type}</span>
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left text-3xl font-bold ">
              {protitle}
            </h2>
          </Link>
          <p>{summary}</p>
          <div className="mt-2 flex items-center">
            <Link href={github} target="_blank" className="w-10">
              <GithubIcon />
            </Link>
            <Link
              href={link}
              target="_blank"
              className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
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
      <main className="w-full mb-16 px-4 flex flex-col item-container justify-center">
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
