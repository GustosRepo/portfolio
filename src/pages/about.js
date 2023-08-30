import React, { useEffect } from "react";
import Head from "next/head";
import AnimatedTexts from "@/components/AnimatedTexts";
import Layout from "@/components/Layout";
import Image from "next/image";
import aboutpic from "/public/images/profile/silly.png";
import { useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, {once:true});

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>AH || About Page</title>
        <meta name="Portfolio" content="cv portfolio made with react/nextjs" />
      </Head>
      <main className=" flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedTexts
            text="Fueling Innovation with Passionate Tech Solutions"
            className="mb-16"
          />
          <div className=" ml-8 mb-4 grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-center">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="font-medium">
                As a proud veteran with a decade of service in the Air Force and
                Space Force, I've developed a strong foundation in discipline,
                teamwork, and leadership. My expertise in space operations and
                satellite operations has provided me with a unique perspective
                on problem-solving and complex systems.
              </p>
              <p className=" my-4 font-medium">
                My journey took an exciting turn when I discovered my passion
                for coding. The world of development fascinated me, and I took
                on the challenge of becoming a full stack developer. From
                databases (MySQL, PostgreSQL, SQLite) to programming languages
                (Java, JavaScript), and from front-end (React.js) to
                containerization and orchestration (Docker, Kubernetes), I've
                embraced every facet of this dynamic field.
              </p>
              <p className="font-medium">
                I'm a firm believer in continuous improvement and efficiency.
                Implementing CI/CD practices allows me to deliver reliable
                solutions and stay ahead in a rapidly evolving tech landscape.
                With a diverse skill set and an unwavering passion for
                technology, I'm dedicated to creating innovative solutions that
                make a meaningful impact.
              </p>
            </div>
            <div className=" col-span-3 relative h-max rounded-[2rem] border-2 border-solid border-dark bg-light p-8 bottom-2 ">
              <div className=" absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2rem] bg-dark " />
              <Image
                src={aboutpic}
                alt="AH"
                className="w-full h-auto rounded-2xl "
              />
            </div>
            <div className="col-span-2 flex flex-col items-start justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-6xl font-bold">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className="text-xl font-medium capatilze text-dark/75">
                  Satified clients
                </h2>
              </div>
              <div className="flex flex-col items-start justify-center">
                <span className="inline-block text-6xl font-bold">
                  <AnimatedNumbers value={50} />
                  +
                </span>
                <h2 className="text-xl font-medium capatilze text-dark/75">
                  Projects
                </h2>
              </div>
              <div className="flex flex-col items-start justify-center">
                <span className="inline-block text-6xl font-bold">
                  <AnimatedNumbers value={4}/>+
                </span>
                <h2 className="text-xl font-medium capatilze text-dark/75">
                  Years of SW experience
                </h2>
              </div>
            </div>
          </div>
            <Skills />
            <Experience />
            <Education  />
        </Layout>
      </main>
    </>
  );
};

export default about;
