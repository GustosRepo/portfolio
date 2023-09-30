import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedTexts from "@/components/AnimatedTexts";
import Link from "next/link";
import { useRouter } from "next/router";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  console.log(router);
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover: w-full, transition-[width] ease duration-300
            ${router.asPath === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const articleOne = () => {
  return (
    <>
      <Head>
        <title>AH || So you want to become a Software Engineer?</title>
        <meta
          name="Article one"
          content="Guide for becoming a Software Engineer"
        />
      </Head>
      <main>
        <Layout>
          <AnimatedTexts
            text="So you want to be a Software Engineer?"
            className="mb-16"
          />
          <article className="dark:text-light/75">
            <h1 className="text-3xl font-bold">
              The First Steps to Become a Software Engineer
            </h1>
            <h3 className="text-xl">
              Becoming a software engineer is an exciting journey that involves
              mastering programming languages, learning problem-solving skills,
              and building a strong foundation in computer science concepts.
              Whether you're just starting out or considering a career switch,
              here are the essential first steps to guide you on your path to
              becoming a successful software engineer.
            </h3>
            <br></br>
            <h2 className="text-3xl font-bold">1. Understand the Role</h2>
            <p className="text-xl">
              Begin by gaining a clear understanding of what a software engineer
              does. Software engineers design, develop, and maintain software
              applications, systems, and solutions. They work across various
              industries, from web development and mobile apps to embedded
              systems and artificial intelligence. Familiarize yourself with the
              responsibilities, challenges, and potential career paths within
              software engineering.
            </p>
            <br></br>
            <h2 className="text-3xl font-bold">
              2. Learn the Basics of Programming
            </h2>
            <p className="text-xl">
              Start by learning the fundamentals of programming. Choose a
              beginner-friendly programming language such as Python, JavaScript,
              or Java. These languages are widely used and provide a solid
              foundation for learning more advanced concepts. Online platforms,
              coding bootcamps, and introductory courses are great resources for
              learning programming basics.
            </p>
            <br></br>
            <h2 className="text-3xl font-bold">
              3. Explore Computer Science Concepts
            </h2>
            <p className="text-xl">
              Develop a strong understanding of core computer science concepts.
              Topics like data structures, algorithms, and object-oriented
              programming are essential for software engineering. Explore
              resources like online courses, textbooks, and tutorials to delve
              deeper into these areas.
            </p>
            <br></br>
            <h2 className="text-3xl font-bold">4. Take Online Courses</h2>
            <p className="text-xl">
              Enroll in online courses and tutorials that cater to beginners.
              Platforms like Coursera, edX, Khan Academy, and Codecademy offer a
              wide range of courses in programming, computer science, and
              software engineering. These courses provide structured learning
              paths and hands-on exercises to help you grasp concepts
              effectively.
            </p>
            <br></br>
            <h2 className="text-3xl font-bold">5. Build Projects</h2>
            <p className="text-xl">
              Apply your knowledge by building projects. Projects not only
              reinforce what you've learned but also demonstrate your skills to
              potential employers. Start with simple projects and gradually work
              your way up to more complex ones. Consider building a personal
              website, a basic mobile app, or a small web application to
              showcase your abilities.
            </p>
            <br></br>
            <h2 className="text-3xl font-bold">6. Practice Problem Solving</h2>
            <p className="text-xl">
              Problem-solving is a critical skill for software engineers.
              Practice coding challenges on platforms like LeetCode, HackerRank,
              and CodeSignal. These platforms present algorithmic puzzles that
              help you improve your logical thinking and coding skills.
            </p>
            <br></br>
            <h2 className="text-3xl font-bold">7. Explore Specializations</h2>
            <p className="text-xl">
              Software engineering has various specializations, such as web
              development, mobile app development, data science, machine
              learning, and more. Explore different areas to discover what
              interests you the most. Specializing can help you focus your
              learning efforts and open up unique career opportunities.
            </p>
            <br></br>
            <h2 className="text-3xl font-bold">8. Continuous Learning</h2>
            <p className="text-xl">
              Technology evolves rapidly, so continuous learning is crucial.
              Stay updated with industry trends, new programming languages, and
              emerging technologies. Online tutorials, blogs, podcasts, and
              online courses can help you keep up-to-date with the latest
              advancements.
            </p>
          </article>
          <br></br>
          <CustomLink
            href="/articles"
            title="Back to Articles"
            className="p-2 px-6 ml-4 text-lg font-semibold rounded-lg bg-dark text-light hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light dark:border-solid dark:border-light dark:border-2"
          />
        </Layout>
      </main>
    </>
  );
};

export default articleOne;
