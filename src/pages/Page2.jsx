
import { Link } from 'react-router-dom'
import pro1 from '../assets/caht.png'
import pro2 from '../assets/images (1).webp'
import pro3 from '../assets/images.webp'
import pro4 from '../assets/medisio.png'
import pro5 from '../assets/codeeditor.png'
import pro6 from '../assets/passsaver.png'
import pro7 from '../assets/collage.png'
const Page2 = () => {
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
    <div id='project' className='p-5 text-white border border-white/15 bg-[#000000]'>
      <div className="mt-10">
        <h1 className='text-white text-4xl text-center mt-8 lg:mt-3 font-bold'>Showcasing my <br /> best work</h1>
      </div>
      {
        projects.map((items) => {
          return (
            <div className='p-5'>
              <div className=' my-2 p-5 text-white border border-white/15 rounded-md bg-linear-to-bl from-[#2B2A2D] via-[#0E1115] to-[#0E1115] flex flex-col lg:flex-row justify-center items-center gap-5'>
                <div className="lg:w-[300px] md:w-[250px] lg:h-[170px] flex justify-center rounded-2xl">
                  <img className='lg:w-[300px] md:w-[210px] lg:h-[170px] h-30 rounded-2xl' src={items.image} alt="" />
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className='font-bold text-3xl'>{items.title}</h1>
                  <p className=''>{items.description}</p>
                  <a href={items.liveDemoLink}><button className='px-5 py-3 mt-3 gap-4 flex justify-center items-center bg-linear-to-r from-[#C0D6EF] to-[#778B9F]  text-black rounded-md cursor-pointer hover:shadow-md shadow-white/20'>Live Demo <i class='de bx bxs-right-top-arrow-circle'></i></button></a>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Page2