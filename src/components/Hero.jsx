import React from "react";
import { IoMdDownload } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <div>
      <section className="relative min-h-screen bg-white dark:bg-black overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={`${process.env.PUBLIC_URL}/background.jpg`} 
            alt="background" 
            className="w-full h-full object-cover blur-[2px] opacity-70 dark:opacity-40 transition-all duration-500" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white/80 dark:from-black/50 dark:to-black/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-8">
          <div className="max-w-4xl text-center space-y-8">
            {/* Name and Title */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Michele Nocchi
              </h1>
              <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full" />
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                Sviluppatore Web Full-Stack
              </h2>
            </div>

            {/* Description */}
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Sono uno <span className="font-semibold text-blue-600 dark:text-blue-400">Sviluppatore Web</span> full-stack.
              Mi occupo sia di <span className="font-semibold text-blue-600 dark:text-blue-400">Frontend</span> che di <span className="font-semibold text-blue-600 dark:text-blue-400">Backend</span>, 
              e adoro affrontare nuove sfide per migliorare continuamente le mie competenze 🚀
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/CV.pdf" 
                download 
                className="group inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105"
              >
                Scarica CV
                <IoMdDownload className="ml-2 w-5 h-5 group-hover:animate-bounce" />
              </a>
              <a 
                href="mailto:nocchimichele13@gmail.com" 
                className="group inline-flex items-center px-6 py-3 text-base font-medium text-gray-700 bg-gray-100 dark:text-gray-200 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105"
              >
                Contattami
                <MdEmail className="ml-2 w-5 h-5 group-hover:animate-pulse" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 pt-4">
              <a 
                href="https://github.com/MicheleNoc" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <FaGithub className="w-8 h-8" />
              </a>
              <a 
                href="https://www.linkedin.com/in/michele-nocchi-287563196/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <FaLinkedin className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;