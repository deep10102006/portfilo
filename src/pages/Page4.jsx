import React from 'react'
import me from '../assets/me.jpg'
import bg2 from '../assets/bg2.png'
const Page4 = () => {
    return (
        <div className='flex flex-col justify-center border border-white/15 lg:border-none w-[320px] md:w-[520px] lg:w-[700px]'>
            <img src={bg2} className='absolute md:left-[16%] lg:left-[24%] h-[370px] lg:h-[430px] w-[310px] md:w-[520px] lg:w-[695px]' alt="" />
            <div className="flex justify-center mt-10 ">
                <div className="h-10 w-10 lg:h-28 lg:w-28 border border-white rounded-full ">
                    <img src={me} className='shadow-[0_0_50px_#26262f] object-cover rounded-full' alt="" />
                </div>
            </div>
            <h1 className='font-[font1] text-white mt-4 text-5xl text-center'>Deep Paul</h1>

            <div className="text-center text-white  text-xl p-4">
                <p>Front-end developer </p>
            </div>
            <div className="flex justify-center w-[320px] lg:w-[700px] text-white text-sm ">
                <div className="w-[200px] flex flex-col items-center p-4">
                    <p>Call me on:</p>
                    <p>9564595940</p>
                </div>
                <div className="w-[200px] flex flex-col items-center border-l border-white/15 p-4">
                    <p>Email me at:</p>
                    <p>deep7437@gmail.com</p>
                </div>
            </div>
            <div className="mt-3 p-5 flex justify-center items-center text-white border-t border-white/15 ">
                <p>Designed by Deep</p>
            </div>
        </div>
    )
}

export default Page4