import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-scroll'
import profile from '../assets/me.jpg'
import star from '../assets/star.svg'
import cv from '../assets/deep cv.pdf'
import gsap from 'gsap'
const Hero = () => {
  useEffect(() => {
    gsap.to(".hero", {
      x: 0,
      opacity: 1,
    })
  },)
  return (
    <div className='hero opacity-0 bg-white mt-7 rounded-2xl h-[530px] lg:w-[350px] p-5 m-3 flex flex-col justify-center items-center sticky top-9 -translate-x-40'>
      <div className="hidden lg:block">
        <img src={star} className='absolute -top-4 -right-3 h-12 md: lg:h-24' alt="" />
        <img src={star} className='absolute bottom-52 -left-2 h-12 md: lg:h-24' alt="" />
      </div>

      <div className="h-[300px] md:w-[300px] lg:w-[300px] rounded-2xl overflow-hidden">
        <img src={profile} className='z-10' alt="" />
      </div>
      <h1 className='mt-4 font-bold text-center text-5xl text-black font-[font1]'>Deep Paul</h1>
      <p className='mt-3 text-center text-xl text-black/70 '>'Passionate Frontend Developer Specializing in Modern Web Technologies.'</p>
      <ul className="flex gap-5 mt-5">
        <li className=''>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={70}
            duration={500}
            className="nav-item"
          >
            <button className='px-5 py-3 bg-[#6D34FD] text-white rounded-md cursor-pointer'>Contect</button>
          </Link>
        </li>
        <li><button className='px-5 py-3 bg-[#6D34FD] text-white rounded-md cursor-pointer'>
          <a href={cv}>Resume</a></button></li>
      </ul>
    </div>
  )
}

export default Hero