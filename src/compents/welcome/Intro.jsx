import React, { useEffect } from 'react'
import { colors } from '../../constant/color'
import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { FaStarOfLife } from 'react-icons/fa'
import { useRef } from 'react'
import { useState } from 'react'
const text = `designed to simplify the way you spend, save, and grow. With real-time insights, automated tracking, managing money is no longer a chore it’s a habit of success.`
const Intro = () => {
    const scrollTarget = useRef(null)
    const {scrollYProgress} = useScroll({target: scrollTarget, offset: ["start end", "end end"]})
    useMotionValueEvent(scrollYProgress,"change",(latest) => {
        console.log("latest position",latest);
    }
    )

  const words = text.split(" ");
  const [currWord,setCurrWord] = useState(0)
  const wordIndex =  useTransform(scrollYProgress,[0,1],[0,words.length])

   useEffect(() => {
       wordIndex.on("change", (lat) => {
         setCurrWord(lat);
       })
   },[wordIndex])


  return (
    <section className='py-5 lg:py-24 px-7 md:px-2'>
        <div className='container mx-auto flex flex-col items-center justify-center'>
        <div className='sticky top-28 '>
              <button className='uppercase text-md flex mx-auto items-center py-1 px-3 rounded-full gap-2' style={{color: colors.primary, fontFamily: "poppins", fontWeight: 600, border: `1px solid ${colors.primary}`}}> <FaStarOfLife/>introducing finSight </button>

        <div>
            <h1 style={{fontFamily: 'poppins', fontWeight: 700}} className='text-white text-2xl lg:text-7xl text-center mt-5 lg:mt-10'>
            FinSight is your intelligent money companion,
            <span className='text-white/15'>
             {
                words.map((words,i) => (
                     <span className={`${i < currWord && 'text-white'} transition duration-500`} key={i}>{`${words} `}</span>
                )) 
             }
            </span>
            </h1>
            <h1 style={{fontFamily: 'poppins', fontWeight: 700, color: colors.primary}} className='text-2xl lg:text-7xl text-center ' >That's why we built FinSight</h1>
        </div>
        </div>
         <div className='h-[150vh]' ref={scrollTarget}></div>
        </div>
    </section>
  )
}

export default Intro