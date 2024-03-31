import React from 'react'

import logo from "../assets/logo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaHashnode } from "react-icons/fa6";


const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="logo" className='w-16 h-auto'/>
        </div>
        <div className='flex m-8 items-center content-center gap-4 text-3xl'>
            <a href=""><FaLinkedin /></a>
            <a href=""><FaGithub /></a>
            <a href=""><FaHashnode /></a>
            <a href=""><FaXTwitter/></a>
        </div>
    </nav>
  )
}

export default Navbar