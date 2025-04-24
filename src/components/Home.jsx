import Navbar from './Navbar'
import Hero from './Hero'
import Page2 from '../pages/Page2'
import Page1 from '../pages/Page1'
import Page3 from '../pages/Page3'
const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="w-full flex flex-col lg:flex-row mt-40">
                <div className="flex justify-center lg:px-20 ">
                    <Hero />
                </div>
                <div className=''>
                    <Page1 />
                    <Page2 />
                    <Page3 />
                </div>
            </div>
        </div>
    )
}

export default Home