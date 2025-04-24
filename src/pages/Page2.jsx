
import { Link } from 'react-router-dom'
import pro1 from '../assets/caht.png'
import pro2 from '../assets/images (1).webp'
import pro3 from '../assets/images.webp'
const Page2 = () => {
  const project = [
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
    }
  ]
  return (
    <div id='project' className='mt-20'>
      <div className="mt-10">
        <h1 className='text-white text-5xl md:text-7xl lg:text-9xl text-center lg:text-start mt-8 lg:mt-3 font-bold'>RECENT <span className='text-white/55'>PROJECTS</span></h1>
      </div>
      {
        project.map((items) => {
          return (
            <div className='p-5'>
              <div className='flex sticky top-6 border border-white/40  flex-col items-center lg:flex-row text-white gap-10 mt-5 rounded-2xl bg-[#040016] p-5'>
                <div className="lg:w-[300px] md:w-[250px] lg:h-[170px] rounded-2xl">
                  <img className='lg:w-[300px] md:w-[250px] lg:h-[170px] h-30 rounded-2xl' src={items.image} alt="" />
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className='font-bold text-3xl'>{items.title}</h1>
                  <p className=''>{items.description}</p>
                  <a href={items.liveDemoLink}><button className='bg-[#6D34FD] text-white px-5 py-2 rounded mt-3 flex justify-center items-center gap-5'>Live Demo <i class='bx bxs-right-top-arrow-circle'></i></button></a>
                </div>
              </div>
            </div>
          )
        })
      }

      <Link to="/Fullproject">
        <div className="flex justify-center items-center mt-10">
          <button className=' px-4 py-2 bg-[#6D34FD] text-white rounded cursor-pointer'>More Project</button>
        </div>
      </Link>
    </div>
  )
}

export default Page2