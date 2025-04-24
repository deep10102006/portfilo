import React from 'react'
import { Link } from 'react-router-dom'
import pro1 from '../assets/caht.png'
import pro2 from '../assets/images (1).webp'
import pro3 from '../assets/images.webp'
import pro4 from '../assets/medisio.png'
import pro5 from '../assets/codeeditor.png'
import pro6 from '../assets/passsaver.png'
import pro7 from '../assets/collage.png'
import Page3 from '../pages/Page3'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
const Fullproject = () => {

    const projects = [
        {
            "image": pro1,
            "title": "Chat app",
            "description": "Realtime Chat app with React & Firebase",
            "liveDemoLink": "https://chatapp-phi-gilt.vercel.app/"
        },
        {
            "image": pro2,
            "title": "Ecommerce Website",
            "description": "Responsive E-commerce (React & Tailwind)",
            "liveDemoLink": "https://deeppcommerce.netlify.app/"
        },
        {
            "image": pro3,
            "title": "Landing Page",
            "description": "Responsive React Landing Page",
            "liveDemoLink": "https://deeplanding.netlify.app/"
        },
        {
            "image": pro4,
            "title": "Mediso Landing Page",
            "description": "Mediso: A Healthcare Landing Page Design",
            "liveDemoLink": "https://helath-landing-page.vercel.app/"
        },
        {
            "image": pro5,
            "title": "Code Editor",
            "description": "Building a Web-Based Code Editor",
            "liveDemoLink": "https://code-editor-nine-steel.vercel.app/"
        },
        {
            "image": pro6,
            "title": "Password Saver",
            "description": "Secure Your Digital Life: Password Saver",
            "liveDemoLink": "https://deep-alpha-eight.vercel.app/"
        },
        {
            "image": pro7,
            "title": "Collage Landing Page",
            "description": "Crafting Engaging Visual Stories: The Collage Landing Page",
            "liveDemoLink": "https://collage-bay-one.vercel.app/"
        }
    ]

    return (
        <div id='project' className='p-5'>
            <div className="w-full flex flex-col lg:flex-row ">
                <div className="flex justify-center lg:px-20 ">
                    <Hero />
                </div>
                <div className=''>
                    <div className="">
                        <h1 className='text-white text-5xl md:text-7xl lg:text-9xl text-center font-bold'>RECENT <span className='text-white/55'>PROJECTS</span></h1>
                    </div>
                    {
                        projects.map((items) => {
                            return (
                                <div className='p-5'>
                                    <div className='flex sticky top-6 border border-white/40  flex-col items-center lg:flex-row text-white gap-10 mt-5 rounded-2xl bg-[#040016] p-5'>
                                        <div className="lg:w-[300px] md:w-[250px] lg:h-[170px] rounded-2xl">
                                            <img className='lg:w-[300px] md:w-[250px] lg:h-[170px] h-30 rounded-2xl' src={items.image} alt="" />
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <h1 className='font-bold text-3xl'>{items.title}</h1>
                                            <p className=''>{items.description}</p>
                                            <a href={items.liveDemoLink}><button className=' bg-[#6D34FD] text-white px-5 py-2 rounded mt-3 flex justify-center items-center gap-5'>Live Demo <i class=' bx bxs-right-top-arrow-circle'></i></button></a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                    <Link to="/">
                        <div className="flex justify-center items-center mt-10">
                            <button className=' px-4 py-2 bg-[#6D34FD] text-white rounded cursor-pointer'>Go back</button>
                        </div>
                    </Link>
                    <Page3 />
                </div>
            </div>
        </div>
    )
}

export default Fullproject