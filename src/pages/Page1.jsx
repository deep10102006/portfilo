import React from 'react'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const Page1 = () => {
    useEffect(() => {
    gsap.to(".text",{
        opacity:1,
        y:10,
    })
    }, [])
    return (
        <div id='home' className=''>
            <div className="">
                <h1 className='text text-white text-5xl md:text-7xl lg:text-9xl text-center lg:text-start mt-8 lg:my-3 font-bold  opacity-0'>FRONTEND <span className='text-white/55'>DEVELOPER</span></h1>
            </div>
            <div className="text-center lg:text-start text-white mt-10 text-xl p-4">
                <p>Detail-oriented programmer with a strong foundation in HTML, CSS, and JavaScript, React and Tailwind css specializing in building responsive and user-friendly web interfaces. Skilled in maintaining clean architecture to minimize errors and enhance performance. Successfully designed and developed multiple websites, ensuring high-quality code and seamless user experiences. Passionate about front-end engineering and continuously improving technical skills to deliver efficient and scalable solutions.</p>
            </div>
            <div className="">
                <h1 className='text-white text-4xl text-center mt-5 lg:mt-10 font-bold'>SKILL</h1>
                <ul className='flex justify-center gap-4 md:gap-10 lg:gap-15 px-5 mt-7'>
                    <li><i class='bx bxl-html5'></i></li>
                    <li><i class='bx bxl-css3'></i></li>
                    <li><i class='bx bxl-javascript'></i></li>
                    <li><i class='bx bxl-react' ></i></li>
                    <li><i class='bx bxl-tailwind-css'></i></li>
                </ul>
            </div>
        </div>
    )
}

export default Page1