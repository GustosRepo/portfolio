import { useScroll } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./liIcon";

const Details = ({ type, time, information, place }) => {
    const ref = useRef(null);
    return (
      <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col item-center justify-between">
        <LiIcon reference={ref} />
        <motion.div 
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:1, type:"spring", bounce:.5}}
        >
        <h3 className="text-2xl font-bold capitalize">
          {type}
        </h3>
        <span className="capitalize ">{place} <br></br>{time}</span>
        <p>{information}</p>
        </motion.div>
      </li>
  );
};

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target : ref,
            offset: ["start end", "center start"],
        }
    );
  return (
    <div className="my-64">
      <h2 className="w-full mb-32 font-bold text-center text-8xl">
        Education and Training
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div 
        style={{scaleY:scrollYProgress}}
        className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light/75"/>
        <ul className="flex flex-col items-start justify-between w-full ml-4">
          <Details
            type="Associate of Applied Science in Space Systems Operations"
            time="2015"
            place="Community College of the Air Force"
            information="A program that focuses on the principles, technology and maintenance of systems and equipment used in aerospace operations. Includes instruction in astronomy and astronautics, solid state theory, air and space operations, electronics, computer science, aviation and space flight safety, life support systems, flight operations management systems, programming, propulsion systems, weaponry, maintenance management and applications to specific systems and operations."
          />
            <Details
            type="Full Stack Software Engineering bootcamp"
            time="2021"
            place="Merit America "
            information="Merit America's Java Development program is a 21-week, fully online program that trains students in Java fundamentals like algorithms, SQL, data structures, REST APIs, and design patterns"
          />

        </ul>
      </div>
    </div>
  );
};

export default Education;
