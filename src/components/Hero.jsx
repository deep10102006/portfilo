import React from 'react'
import { Link } from 'react-scroll'
import bg2 from '../assets/bg2.png'
const Hero = () => {

  return (
    <div id='home' className=' p-5 flex flex-col justify-center items-center lg:border-none md:border border-white/15  border '>
      <img src={bg2} className='absolute h-[330px] w-[320px] lg:w-[698px] lg:h-[310px] z-10' alt="" />
      <div className="text-white">
        <p>🖐️ Hello I am,</p>
      </div>
      <div className="text-center">
        <h1 className='mt-4 font-bold text-5xl text-white font-[font2]'> Front end <br /> Developer</h1>
        <p className='mt-3 text-white text-xl'>'Passionate Frontend Developer Specializing in Modern Web Technologies.'</p>
      </div>
      <Link
        to="contactus"
        spy={true}
        smooth={true}
        offset={70}
        duration={500}
        className="nav-item z-50"
      >
        <button className='px-5 py-3 bg-linear-to-r from-[#C0D6EF] to-[#778B9F] my-5 text-black rounded-md cursor-pointer hover:shadow-md shadow-white/20'>Hire me</button>
      </Link>
      
    </div>
  )
}

export default Hero