import React from 'react'

import { HERO_CONTENT } from '../constants/index.js'
import profilePic from '../assets/newprofilepic.png'

import { motion } from "framer-motion"

const Hero = () => {

    const container = (delay)=>({
        hidden: {x: -100, opacity: 0},
        visible: {x: 0, opacity: 1, transition: {duration: 0.5, delay: delay}}
    })

  return (
    <div className='border-neutral-900 border-b pb-4 lg:mb-35'>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 variants={container(0)} initial="hidden" animate="visible" className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-slate-400'>Ayush Sharma</motion.h1>
                    <motion.span variants={container(0.5)} initial="hidden" animate="visible" className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-5xl tracking-tight text-transparent'>Full Stack Developer</motion.span>
                    <motion.p variants={container(1)} initial="hidden" animate="visible" className='my-2 max-w-xl py-6 font-light tracking-tighter text-2xl'>{HERO_CONTENT}</motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8 ">
                <div className="flex justify-center w-140 h-140 rounded-lg">
                    <motion.img initial={{x: 100, opacity: 0}} animate={{x:0, opacity: 1}} transition={{duration: 1, delay: 1.2}} src={profilePic} alt="profile" className='object-cover rounded-lg' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero