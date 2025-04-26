import React, { useState } from 'react';
import left from '../assets/left.svg'
import bg2 from '../assets/bg2.png'
const Client = () => {
  const testimonialsData = [
    {
      id: 1,
      name: 'Aarav Mehra',
      quote:
      'Deep brought our vision to life with clean code, stunning design, and a flawless user experience. A true professional—on time, communicative, and reliable.',
    },
    {
      id: 2,
      name: 'Isha Kapoor',
      quote:
        'Couldn’t be happier with the website Deep built for us! Super easy to work with, quick turnaround, and the final result looks amazing on every device.',
    },
    {
      id: 3,
      name: 'Vivaan Sharma',
      quote:
        'I had no idea where to start with a website, but Deep made it easy. They explained everything clearly and built a site that totally fits my brand.',
    },
    {
      id: 4,
      name: 'Anaya Mondal',
      quote:
        'Impressive front-end skills. Semantic HTML, scalable CSS, and seamless React components— Deep builds with both users and developers in mind.',
    },
    {
      id: 5,
      name: 'Rohan Paul',
      quote:
      'As a startup, we needed a developer who could move fast and think creatively— Deep delivered exactly that. Our product now looks and feels top-tier.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full  bg-gradient-to-r from-[#222326] to-[black]">
      <img src={bg2} className='absolute h-[200px] w-full' alt="" />
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="min-w-full p-6 text-center text-white "
            >
              <p className="mb-4 p-5">"{item.quote}"</p>
              <h1 className="font-bold">{item.name}</h1>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <button
          onClick={handlePrev}
          className="p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600"
        >
          <img src={left} alt="" className='h-5' />
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <button
          onClick={handleNext}
          className="p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600"
        >
          <img src={left} alt="" className='h-5 rotate-180' />
        </button>
      </div>
    </div>
  );
};

export default Client;