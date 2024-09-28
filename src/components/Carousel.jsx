// src/Carousel.js

import React, { useState, useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaDatabase } from 'react-icons/fa';

const icons = [
  { id: 1, icon: <FaHtml5 className="w-24 h-24 text-orange-600" />, label: 'HTML' },
  { id: 2, icon: <FaCss3Alt className="w-24 h-24 text-blue-600" />, label: 'CSS' },
  { id: 3, icon: <FaJs className="w-24 h-24 text-yellow-400" />, label: 'JavaScript' },
  { id: 4, icon: <FaNodeJs className="w-24 h-24 text-green-500" />, label: 'Node.js' },
  { id: 5, icon: <FaNodeJs className="w-24 h-24 text-green-500" />, label: 'Express.js' }, 
  { id: 6, icon: <FaReact className="w-24 h-24 text-blue-400" />, label: 'React' },
  { id: 7, icon: <FaDatabase className="w-24 h-24 text-green-700" />, label: 'PostgreSQL' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === icons.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto-scroll every 2 seconds (2000 ms)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
  <div className="mx-auto bg-white dark:bg-black">
    <div className="flex items-center justify-center mt-10 mb-5 text-xl font-extrabold tracking-tight leading-none md:text-xl xl:text-3xl text-black dark:text-white">
      <h1 > 
        Le mie competenze
      </h1>
    </div>
    
    {/* Carosello di icone */}
    <div className="overflow-hidden rounded-lg dark:bg-black flex justify-center items-center h-60">
      {icons[currentIndex].icon}
    </div>
  
    {/* Indicatori di navigazione */}
    <div className="flex justify-center mt-4">
      {icons.map((_, index) => (
        <button
          key={index}
          className={`w-3 h-3 mx-1 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-400 dark:bg-gray-600'}`}
          onClick={() => setCurrentIndex(index)}
        />
      ))}
    </div>
  
    {/* Etichetta dell'icona attiva */}
    <div className="text-center mt-2">
      <span className="text-lg font-semibold text-black dark:text-white">
        {icons[currentIndex].label}
      </span>
    </div>
  </div>
  
  );
};

export default Carousel;
