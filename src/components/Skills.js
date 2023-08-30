import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.2 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className=" flex items-center justify-center rounded-full font-semibold
     bg-dark text-light p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.2 }}
        >
        Stack
        </motion.div>
        <Skill name="SQL" x="-28vw" y="-12vw"  />
        <Skill name="MySQL" x="-25vw" y="-1vw" />
        <Skill name="PostgreSQL" x="-20vw" y="-20vw" />
        <Skill name="SQLite" x="-30vw" y="10vw" />
        <Skill name="MongoDB" x="-17vw" y="18vw" />
        <Skill name="HTML" x="-3vw" y="-20vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="JAVA" x="-8vw" y="-2vw" />
        <Skill name="Javascript" x="-5vw" y="10vw" />
        <Skill name="React.JS" x="12vw" y="-15vw" />
        <Skill name="Next.JS" x="16vw" y="-4vw" />
        <Skill name="Figma" x="28vw" y="-18vw" />
        <Skill name="Docker" x="28vw" y="12vw" />
        <Skill name="Kubernetes" x="28vw" y="-5vw" />
        <Skill name="Bootstrap" x="15vw" y="8vw" />
        <Skill name="Tailwind" x="10vw" y="18vw" />
      </div>
    </>
  );
};

export default Skills;
