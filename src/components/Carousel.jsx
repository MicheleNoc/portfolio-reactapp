// src/Carousel.js

import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaDatabase } from 'react-icons/fa';
import { SiFlutter, SiDart } from 'react-icons/si';

const skills = [
  { id: 1, icon: <FaHtml5 className="w-12 h-12 text-[#E34F26]" />, label: 'HTML' },
  { id: 2, icon: <FaCss3Alt className="w-12 h-12 text-[#1572B6]" />, label: 'CSS' },
  { id: 3, icon: <FaJs className="w-12 h-12 text-[#F7DF1E]" />, label: 'JavaScript' },
  { id: 4, icon: <FaNodeJs className="w-12 h-12 text-[#339933]" />, label: 'Node.js' },
  { id: 5, icon: <FaNodeJs className="w-12 h-12 text-[#339933]" />, label: 'Express.js' }, 
  { id: 6, icon: <FaReact className="w-12 h-12 text-[#61DAFB]" />, label: 'React' },
  { id: 7, icon: <FaDatabase className="w-12 h-12 text-[#336791]" />, label: 'PostgreSQL' },
  { id: 8, icon: <FaDatabase className="w-12 h-12 text-[#4479A1]" />, label: 'MySQL' },
  { id: 9, icon: <SiFlutter className="w-12 h-12 text-[#02569b]" />, label: 'Flutter' },
  { id: 10, icon: <SiDart className="w-12 h-12 text-[#00b4ab]" />, label: 'Dart' },
];

const Carousel = () => {
  return (
    <section className="py-16 bg-[#181f2a]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">Le mie competenze</h2>
          <div className="h-1 w-24 bg-[#3b82f6] mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-[#1e2533]/80 rounded-2xl p-7 shadow-lg border border-white/10 hover:shadow-[0_0_16px_2px_#3b82f6] transition-all duration-300 group hover:scale-105"
            >
              <div className="flex flex-col items-center justify-center">
                <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <span className="text-white font-semibold tracking-wide text-base mt-1">
                  {skill.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
