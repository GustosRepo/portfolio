import React from 'react'
import {motion} from 'framer-motion'
import {useScroll} from 'framer-motion'
import {useRef} from 'react'

const liIcon = ({reference}) => {
    const {scrollYProgress} = useScroll(
    {
        target : reference,
        offset: ["start end", "center start"],
    }
        )
  return (
    <figure className="absolute left-0 stroke-dark dark:stroke-light">
        <svg className='-rotate-90' width="75" height="75" viewBox="0 0 100 100">
            <circle cx="75" cy="50" r="20" className='stroke-1 stroke-primary fill-none dark:stroke-primaryDark'/>
            <motion.circle cx="75" cy="50" r="20" className=' stroke-[5px] fill-light dark:fill-dark' 
            style={{pathLength:scrollYProgress,}}
            />
            <circle cx="75" cy="50" r="10" className='stroke-1 animate-pulse fill-primary dark:fill-primaryDark' />
        </svg>
        </figure>
  )
}

export default liIcon


