import Navbar from './Navbar'
import Hero from './Hero'
import Page2 from '../pages/Page2'
import Page1 from '../pages/Page1'
import Page3 from '../pages/Page3'
import Page4 from '../pages/Page4'
const Home = () => {
    return (
        <div className='flex justify-center '>
            <div className=" w-[1000px] flex flex-col items-center ">
                <div className="border-x border-white/15 w-[320px] md:w-[520px] lg:w-[700px] flex flex-col  items-center h-28 mt-15 ">
                    <div className='bg-linear-to-r from-[#181818] via-[#6c6c6c] to-[#181818] w-[320px] lg:w-[800px] h-[1px] '></div>
                    <Navbar />
                </div>
                <div className="border-x border-white/15 w-[320px] md:w-[520px] lg:w-[700px] flex flex-col  items-center">
                    <div className='bg-linear-to-r from-[#181818] via-[#6c6c6c] to-[#181818] lg:w-[800px] h-[1px] '></div>
                    <Hero />
                </div>
                <div className="border-x border-white/15 w-[320px] md:w-[520px] lg:w-[700px] flex flex-col  items-center">
                    <div className='bg-linear-to-r from-[#181818] via-[#6c6c6c] to-[#181818] lg:w-[800px] h-[1px] '></div>
                    <Page1 />
                </div>
                <div className="border-x border-white/15 w-[320px] md:w-[520px] lg:w-[700px] flex flex-col  items-center">
                    <div className='bg-linear-to-r from-[#181818] via-[#6c6c6c] to-[#181818] lg:w-[800px] h-[1px] '></div>
                    <Page2 />
                </div>
                <div className="border-x border-white/15 w-[320px] md:w-[520px] lg:w-[700px] flex flex-col  items-center">
                    <div className='bg-linear-to-r from-[#181818] via-[#6c6c6c] to-[#181818] lg:w-[800px] h-[1px] '></div>
                    <Page3 />
                </div>
                <div className="lg:border-x border-white/15 w-[320px] md:w-[520px] lg:w-[700px] flex flex-col items-center mb-10">
                    <div className='bg-linear-to-r from-[#181818] via-[#6c6c6c] to-[#181818] lg:w-[800px] h-[1px] '></div>
                    <Page4 />
                    <div className='bg-linear-to-r from-[#181818] via-[#6c6c6c] to-[#181818] lg:w-[800px] h-[1px] '></div>
                </div>
            </div>
        </div>
    )
}

export default Home