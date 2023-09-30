import React from 'react'
import {motion} from 'framer-motion'

const quote = {
    initial: {
        opacity:100 ,
    },
    animate:{
        opacity: 1,
        transition: {
            delay: 1,
            staggerChildren: 0.05,
        }
    }
}

const singleWords = {
    initial: {
        opacity: 0,
        y: 50
    },
    animate:{
        opacity: 1,
        y:0,
        transition: {
            duration: .5

        }
    }
}

const AnimatedTexts = ({text, className=""}) => {
  return (
    <div className='flex items-center justify-center w-full py-2 mx-auto overflow-hidden text-center '>
        <motion.h1 className={`inline-block w-full text-dark font-bold capitalize text-6xl dark:text-light ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
        >
        {
            text.split('').map((word, index) => 
            <motion.span key={word+ "-" +index}
            variants={singleWords}
            >
                {word}&nbsp;
            </motion.span>
        )}
        </motion.h1>
    </div>
  )
}

export default AnimatedTexts
