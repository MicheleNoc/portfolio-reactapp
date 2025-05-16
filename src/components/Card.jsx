import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';

function Card() {
  return (
    <div>
      <section className="bg-[#181f2a] pt-10 pb-10 lg:pt-[40px] lg:pb-20 animate-fade-in">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-11 text-xl font-extrabold tracking-tight leading-none md:text-xl xl:text-3xl text-white">
            <h1>I Miei Progetti</h1>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mx-4">
            {/* CARD 1 */}
            <div className="w-full px-4 md:w-1/2 xl:w-1/3">
              <div className="group relative mb-10 overflow-hidden rounded-2xl bg-[#22283a] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_24px_0_#3b82f6] border border-white/10 flex flex-col min-h-[540px]">
                <div className="relative w-full aspect-[4/3] flex-shrink-0 bg-[#181f2a] overflow-hidden rounded-t-2xl">
                  <img 
                    src={`${process.env.PUBLIC_URL}/searchbooks.jpg`} 
                    alt="Search Books" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-t-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" />
                </div>
                {/* CHIP LINGUAGGI */}
                <div className="flex flex-wrap justify-center gap-2 mt-4 mb-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#181f2a] text-white text-xs font-medium gap-1 border border-white/10">
                    <FaHtml5 className="text-[#E34F26] w-4 h-4" /> HTML
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#181f2a] text-white text-xs font-medium gap-1 border border-white/10">
                    <FaCss3Alt className="text-[#1572B6] w-4 h-4" /> CSS
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#181f2a] text-white text-xs font-medium gap-1 border border-white/10">
                    <FaJs className="text-[#F7DF1E] w-4 h-4" /> JavaScript
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#181f2a] text-white text-xs font-medium gap-1 border border-white/10">
                    <FaNodeJs className="text-[#339933] w-4 h-4" /> Node.js
                  </span>
                </div>
                <div className="flex-1 flex flex-col justify-between p-8 text-center">
                  <div>
                    <h3 className="mb-4 text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      Search Books
                    </h3>
                    <p className="mb-6 text-base leading-relaxed text-gray-300">
                      Web App per la ricerca per Autore e Titolo di un libro presente nel catalogo con API "Open Library".
                    </p>
                  </div>
                  <div className="flex justify-center gap-4 mt-auto">
                    <a
                      href="https://books-finder-library.vercel.app"
                      className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300"
                    >
                      Demo
                    </a>
                    <a
                      href="https://github.com/MicheleNoc/books-finder.git"
                      className="inline-flex items-center px-6 py-3 text-sm font-medium text-gray-200 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors duration-300"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* CARD 2 */}
            <div className="w-full px-4 md:w-1/2 xl:w-1/3">
              <div className="group relative mb-10 overflow-hidden rounded-2xl bg-[#22283a] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_24px_0_#3b82f6] border border-white/10 flex flex-col min-h-[540px]">
                <div className="relative w-full aspect-[4/3] flex-shrink-0 bg-[#181f2a] overflow-hidden rounded-t-2xl">
                  <img
                    src={`${process.env.PUBLIC_URL}/weatherapp.png`}
                    alt="React Weather App" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-t-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" />
                </div>
                {/* CHIP LINGUAGGI */}
                <div className="flex flex-wrap justify-center gap-2 mt-4 mb-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#181f2a] text-white text-xs font-medium gap-1 border border-white/10">
                    <FaReact className="text-[#61DAFB] w-4 h-4" /> React
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#181f2a] text-white text-xs font-medium gap-1 border border-white/10">
                    <FaJs className="text-[#F7DF1E] w-4 h-4" /> JavaScript
                  </span>
                </div>
                <div className="flex-1 flex flex-col justify-between p-8 text-center">
                  <div>
                    <h3 className="mb-4 text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      React Weather App
                    </h3>
                    <p className="mb-6 text-base leading-relaxed text-gray-300">
                      WebApp con integrazione API "OpenWeather" per la visualizzazione dei dati meteorologici del luogo cercato.
                    </p>
                  </div>
                  <div className="flex justify-center gap-4 mt-auto">
                    <a
                      href="https://weatherapp-sable-two.vercel.app/"
                      className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300"
                    >
                      Demo
                    </a>
                    <a
                      href="https://github.com/MicheleNoc/weatherapp.git"
                      className="inline-flex items-center px-6 py-3 text-sm font-medium text-gray-200 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors duration-300"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Card;