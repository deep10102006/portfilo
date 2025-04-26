import React from 'react'
import me from '../assets/me.jpg'
import home from '../assets/home.svg'
import about from '../assets/about.svg'
import pro from '../assets/project.svg'
import call from '../assets/call.svg'
import bg from '../assets/bg.png'
import { Link } from 'react-scroll'
const Navbar = () => {
    return (
        <>
            <div className='bg-gradient-to-b from-[#27292D] to-[black] w-full  text-white p-3'>
                <img src={bg} className='absolute right-0 md:left-40 lg:left-[35%] top-15 ' alt="" />
                <div className="z-10 flex items-center justify-between h-20">
                    <div className="flex gap-3">
                        <div className="h-10 w-10 lg:h-20 lg:w-20 border border-white rounded-full">
                            <img src={me} className=' object-cover rounded-full' alt="" />
                        </div>
                        <div className="ml-3 hidden lg:flex flex-col justify-center w-44 h-20 ">
                            <h1>Deep Paul</h1>
                            <div className="flex items-center gap-2">
                                <div className="h-3 w-3  rounded-full bg-[#28893D]"></div>
                                <p>Available for work</p>
                            </div>
                        </div>
                    </div>
                    <ul className='flex gap-10 md:gap-2 z-30'>
                        <li className='box'>
                            <Link
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="nav-item"
                            >
                                <img className='h-4 lg:h-6' src={home} alt="" />
                            </Link>
                        </li>
                        <li className='box'>
                            <Link
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="nav-item"
                            >
                                <img className='h-4 lg:h-6' src={about} alt="" />
                            </Link>
                        </li>
                        <li className='box'>
                            <Link
                                to="project"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="nav-item"
                            >
                                <img className='h-4 lg:h-6' src={pro} alt="" />
                            </Link>
                        </li>
                        <li className='box'>
                            <Link
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="nav-item"
                            >
                                <img className='h-4 lg:h-6' src={call} alt="" />
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </>

    )
}

export default Navbar