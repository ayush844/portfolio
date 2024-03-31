import React from 'react'
import { PROJECTS } from '../constants'

import { motion } from "framer-motion"

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2  whileInView={{y: 0, opacity: 1}} initial={{y: -100, opacity: 0}} transition={{duration: 1.5}}  className='my-20 text-center text-5xl'>Projects</motion.h2>
        <div className="">
            {PROJECTS.map((project, index)=>(
                <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
                    <motion.div  whileInView={{x: 0, opacity: 1}} initial={{x: -100, opacity: 0}} transition={{duration: 1}}  className="w-full lg:w-1/4">
                        <img src={project.image} alt="project image" width={180} height={180} className='mb-6 rounded-lg' />
                    </motion.div>
                    <motion.div  whileInView={{x: 0, opacity: 1}} initial={{x: 100, opacity: 0}} transition={{duration: 1}}  className="w-full max-w-xl lg:w-3/4">
                        <h6 className='mb-2 font-semibold'>{project.title}</h6>
                        <p className='mb-4 text-neutral-400'>{project.description}</p>
                        <div className="w-full flex flex-wrap">
                            {project.technologies.map((tech, index)=> (
                                <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>{tech}</span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects