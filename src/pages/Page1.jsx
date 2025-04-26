import React from 'react'
import cv from '../assets/deep cv.pdf'
import me from '../assets/me.jpg'
import re from '../assets/re.svg'
import bg from '../assets/bg.png'
import { Link } from 'react-scroll'
const Page1 = () => {

    return (
        <>
            <div id='about' className='flex flex-col items-center '>
                <img src={bg} className='absolute' alt="" />
                <div className="flex justify-center mt-10 ">
                    <div className="h-10 w-10 lg:h-40 lg:w-40 ">
                        <img src={me} className='shadow-[0_0_100px_#26262f] object-cover rounded-full' alt="" />
                    </div>
                </div>
                <h1 className='font-[font1] text-white mt-4 text-5xl '>Deep Paul</h1>

                <div className="text-center text-white mt-4 text-xl p-4">
                    <p>Front-end developer skilled in HTML, CSS, JavaScript, React, and Tailwind CSS. Focused on building responsive, user-friendly interfaces with clean, efficient code. Experienced in developing high-quality websites and passionate about creating scalable, performant solutions.</p>
                </div>
                <div className='flex justify-center items-center p-4 gap-5'>
                    <button className='px-8 py-6 md:px-5 md:py-3 lg:px-5 lg:py-3 bg-linear-to-r from-[#C0D6EF] to-[#778B9F]  text-black rounded-md cursor-pointer hover:shadow-md shadow-white/20'>
                        <a className='flex gap-3' href={cv}>Resume <img src={re} className='h-6' alt="" /></a>
                    </button>
                    <Link
                        to="project"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="nav-item"
                    >
                        <button className='px-5 py-3 bg-[black] border border-white/30 text-white rounded-md cursor-pointer '>
                            Browser my work
                        </button>
                    </Link>
                </div>
                <div className="my-9 p-5 text-white h-[270px] w-[285px] border border-white/15 rounded-md bg-linear-to-br from-[#2B2A2D] via-[#0E1115] to-[#0E1115]">
                    <h1 className='text-3xl'>Front-end development</h1>
                    <p className='mt-3'>Expert in HTML, CSS, React, and Vue, JavaScript, crafting responsive, high-performance websites.</p>
                    <ul className='flex justify-center gap-5 mt-3'>
                        <li><i class='bx bxl-html5'></i></li>
                        <li><i class='bx bxl-css3' ></i></li>
                        <li><i class='bx bxl-javascript' ></i></li>
                        <li><i class='bx bxl-react' ></i></li>
                        <li><i class='bx bxl-tailwind-css' ></i></li>
                    </ul>
                </div>
                <img src={bg} alt="" className='rotate-180 ' />
            </div>
        </>
    )
}

export default Page1