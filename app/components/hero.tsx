import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Navbar from './navbar';

const images = [
  '/image_1_carousel.jpg',
  '/image_2_carousel.jpg',
  '/image_3_carousel.jpg',
  // Add more images as needed
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState('prev');

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('prev');
      setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }, 15000); // Change image every 15 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setDirection('next');
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection('prev');
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleScrollDown = () => {
    const restaurantCardsSection = document.getElementById('restaurant-cards-section');
    if (restaurantCardsSection) {
      window.scrollTo({
        top: restaurantCardsSection.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative w-screen h-screen">
      <motion.img
        key={images[currentImage]}
        src={images[currentImage]}
        alt="Hero Image"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ opacity: 0, x: direction === 'next' ? '-100%' : '100%' }}
        animate={{ opacity: 1, x: '0' }}
        exit={{ opacity: 0, x: direction === 'next' ? '100%' : '-100%' }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      />

      <Navbar />

      <div className='absolute top-1/2 left-4 transform -translate-y-1/2 text-white'>
        <button
          className="rounded-full p-2 bg-white text-gray-900 hover:bg-gray-900 hover:text-white"
          onClick={handlePrev}
        >
          <FaChevronLeft />
        </button>
      </div>

      <div className='absolute top-1/2 right-4 transform -translate-y-1/2 text-white'>
        <button
          className="rounded-full p-2 bg-white text-gray-900 hover:bg-gray-900 hover:text-white"
          onClick={handleNext}
        >
          <FaChevronRight />
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center ">
        <button 
          className="flex items-center justify-center bg-white text-gray-900 rounded-full p-2 hover:bg-gray-900 hover:text-white"
          onClick={handleScrollDown}
        >
          <div className="flex items-center justify-center  rounded-full p-2">
            <FaArrowDown style={{ marginRight: '5px' }} />
            <span>Find our Restaurants</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Hero;
