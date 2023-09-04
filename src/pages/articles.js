import Layout from "@/components/Layout";
import React from "react";
import Head from "next/head";
import AnimatedTexts from "@/components/AnimatedTexts";
import Link from "next/link";
import Image from "next/image";
import article1 from "/public/images/articles/article1.png";
import article2 from "/public/images/articles/article2.png";
import article3 from "/public/images/articles/article3.png";
import article4 from "/public/images/articles/article4.png"
import { useMotionValue } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

const FramerImage = motion(Image);
const MovingImg = ({title, img, link}) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);
    
    function handleMouse(event){
        imgRef.current.style.display = "inline-block";
        x.set(event.pageX)
        y.set(-350)
    }
    function handleMouseLeave(event){
        imgRef.current.style.display = "none";
        x.set(0)
        y.set(10)

    }
    return (
        <Link href={link} target="_blank"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        >
            <h2 className="text-xl font-semibold capitilize hover:underline">{title}</h2>
            <FramerImage
            style={{x:x, y:y}}
            initial={{opacity:0}}
            whileInView={{opacity:1, transition:{duration:0.5}}}
            ref={imgRef} src={img} alt={title} className="absolute z-10 hidden h-auto rounded-lg w-96" />
        </Link>
    )
    
}

const Article = ({img, title , date , link}) => {
    return (
    <li className="relative w-full p-4 py-6 my-4 rounded=xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4">
        <MovingImg img={img} title={title} link={link} />
        <span className="pl-4 font-semibold text-primary">{date}</span>
    </li>

    
        )
    
}

const FeaturedArticle = ({ artTitle, summary, img, link, time }) => {
  return (
    <li className="w-full col-span-1 p-8 border border-b-4 border-r-4 border-solid bg-light border-dark rounded-2xl">
      <Link
        href={link}
        target="_blank"
        className="inline-block w-full overflow-hidden rounded-lg cursor-pointer "
      >
        <FramerImage src={img} alt={artTitle} className="w-full h-auto"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        />
      </Link>
      <Link href={link} target="_blank" className="hover:underline">
        <h2 className="my-2 text-2xl font-bold capitalize hover:underline">
          {artTitle}
        </h2>
      </Link>
      <p className="mb-2 text-sm">{summary}</p>
      <span className="font-semibold text-primary ">{time}</span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>AH || Articles Page</title>
        <meta name="Portfolio" content="cv portfolio made with react/nextjs" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full mb-16 overflow-hidden">
        <Layout className="pt-16">
          <AnimatedTexts
            text="“Thanks to Tech, we can now learn anything anywhere.”"
            className="mb-16"
          />
          <ul className="grid grid-cols-2 gap-16">
            <FeaturedArticle
              artTitle="So you want to be a Software Engineer?"
              summary="Whether you're just starting out or considering a career switch, here are the essential first steps to guide you on your path to becoming a successful software engineer."
              time="10 minutes"
              link="/articleOne"
              img={article1}
            />
            <FeaturedArticle
              artTitle="Front-end, Back-end, and Databases Explained"
              summary="This article serves as your guide to comprehending the roles, technologies, and skills associated with front-end, back-end, and databases, helping you make an informed decision about your specialization path."
              time="15 minutes"
              link="/articleTwo"
              img={article2}
            />
          </ul>
          <h2 className="w-full my-16 mt-32 text-4xl font-bold text-center">All Articles</h2>
          <ul>
            <Article
            title="HTML, CSS, JavaScript, and React for Beginners"
            date="15 minutes"
            link="/articleThree"
            img={article3}            
            />
                        <Article
            title="Mastering the Web Trinity: Advanced Techniques in HTML, CSS, and JavaScript"
            date="15 minutes"
            link="/articleFour"
            img={article4}            
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
