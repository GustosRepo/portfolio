import React from 'react';
import Link from 'next/link';
import {motion} from 'framer-motion';

const MotionLink = motion(Link);

const Logo = () => {
    return (
    <div className='flex items-center justify-center mt-2'>
      <MotionLink href="/" className='w-16 h-16 bg-dark text-light flex items-center 
      justify-center rounded-full text-2xl font-bold italic'
      whileHover={{
        color: ["#ffffff", "rgba(26,14,18,1)","rgba(207,200,202,1)","rgba(26,14,18,1)","rgba(89, 75, 75)", "#ffffff"],
        backgroundColor:["#00000", "rgba(137,123,127,1)","rgba(124,110,114,1)","rgba(37,26,29,1)","rgba(48,37,40,1)","rgba(84,72,75,1)", "#000"],
        transition: { duration:.7, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5, ease: "easeInOut"}

    }}>AH</MotionLink>
    </div>
  );
}
export default Logo;