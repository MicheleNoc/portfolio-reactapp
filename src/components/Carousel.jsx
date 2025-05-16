// src/Carousel.js

import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaDatabase } from 'react-icons/fa';
import { SiFlutter, SiDart } from 'react-icons/si';

const skills = [
  { id: 1, icon: <FaHtml5 className="w-12 h-12 text-orange-600" />, label: 'HTML' },
  { id: 2, icon: <FaCss3Alt className="w-12 h-12 text-blue-600" />, label: 'CSS' },
  { id: 3, icon: <FaJs className="w-12 h-12 text-yellow-400" />, label: 'JavaScript' },
  { id: 4, icon: <FaNodeJs className="w-12 h-12 text-green-500" />, label: 'Node.js' },
  { id: 5, icon: <FaNodeJs className="w-12 h-12 text-green-500" />, label: 'Express.js' }, 
  { id: 6, icon: <FaReact className="w-12 h-12 text-blue-400" />, label: 'React' },
  { id: 7, icon: <FaDatabase className="w-12 h-12 text-green-700" />, label: 'PostgreSQL' },
  { id: 8, icon: <FaDatabase className="w-12 h-12 text-green-700" />, label: 'MySQL' },
  { id: 9, icon: <SiFlutter className="w-12 h-12 text-[#02569b]" />, label: 'Flutter' },
  { id: 10, icon: <SiDart className="w-12 h-12 text-[#00b4ab]" />, label: 'Dart' },
];

const Carousel = () => {
  return (
    <div className="mx-auto bg-white dark:bg-[#222831] mb-5">
      <div className="flex items-center justify-center mt-10 mb-5 text-xl font-extrabold tracking-tight leading-none md:text-xl xl:text-3xl text-black dark:text-white">
        <h1>Le mie competenze</h1>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col items-center justify-center p-4 bg-white dark:bg-[#1a1f2b] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="mb-2">{skill.icon}</div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
              {skill.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
