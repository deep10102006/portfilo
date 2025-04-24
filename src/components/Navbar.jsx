import React from 'react'
import hole from '../assets/blackhole.webm'
import { Link } from 'react-scroll'
const Navbar = () => {
    return (
        <div className='w-full h-42 flex justify-center items-center relative'>
            <video
                autoPlay
                muted
                loop
                className="rotate-180 absolute top-[-350px] h-[700px] w-full left-0 z-[1] object-cover "
            >
                <source src={hole} type="video/webm" />
            </video>
            <div className="z-10 border border-white/45 rounded-xl p-2 backdrop-blur-md w-[300px] mt-10">
                <ul className='flex justify-around items-center h-full '>
                    <li className='box'> <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="nav-item"
                    >
                        <i class='de bx bx-home-alt'></i>
                    </Link></li>

                    <li className='box'> <Link
                        to="project"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="nav-item"
                    >
                        <i class='de bx bx-paint'></i>
                    </Link></li>
                    <li className='box'>
                        <Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={70}
                            duration={500}
                            className="nav-item"
                        >
                            <i class='de bx bx-user-circle'></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar