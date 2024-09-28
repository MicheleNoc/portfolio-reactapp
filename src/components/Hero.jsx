import React from "react";
import { IoMdDownload } from "react-icons/io";

function Hero() {
    
return(
<div>
<section class="bg-white dark:bg-black h-screen relative">

    <div class="absolute inset-0 z-0">
        <img src={`${process.env.PUBLIC_URL}/background.jpg`} alt="background" class="w-full h-full object-cover blur-sm opacity-50" />
    </div>
    <div class="relative z-10 flex items-center justify-center h-full px-4 py-8">
        <div class="text-center">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Michele Nocchi
            </h1>
            <p class="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-white-400">
            Sono uno <strong>Sviluppatore Web</strong> full-stack.
            Mi occupo sia di <strong>Frontend</strong> che di <strong>Backend</strong>, e adoro affrontare nuove sfide per migliorare continuamente le mie competenze 🚀
            </p>
            <a href="/CV.pdf" download class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Scarica CV
                <IoMdDownload className="ml-2"/>
            </a>
            <div class="flex mt-4 sm:justify-center sm:mt-0">
    <a href="https://github.com/MicheleNoc" target="_blank" rel="noopener noreferrer" class="text-white hover:text-gray-900 dark:hover:text-white">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.304 3.438 9.8 8.205 11.387.6.111.82-.26.82-.577 0-.285-.011-1.237-.017-2.25-3.338.724-4.042-1.607-4.042-1.607-.546-1.384-1.333-1.754-1.333-1.754-1.089-.743.083-.728.083-.728 1.205.085 1.838 1.236 1.838 1.236 1.07 1.83 2.807 1.301 3.49.995.108-.775.419-1.301.762-1.601-2.665-.303-5.467-1.333-5.467-5.933 0-1.313.469-2.386 1.236-3.227-.124-.303-.536-1.53.117-3.176 0 0 1.008-.322 3.303 1.227.96-.267 1.993-.4 3.015-.404 1.022.004 2.055.137 3.015.404 2.295-1.549 3.303-1.227 3.303-1.227.653 1.646.241 2.873.118 3.176.77.841 1.236 1.914 1.236 3.227 0 4.61-2.805 5.63-5.475 5.925.43.37.815 1.1.815 2.22 0 1.604-.014 2.898-.014 3.287 0 .319.218.693.825.577C20.563 21.8 24 17.304 24 12c0-6.627-5.373-12-12-12z"/></svg>
    </a>
    <a href="https://www.linkedin.com/in/michele-nocchi-287563196/" target="_blank" rel="noopener noreferrer" class="ml-4 text-white hover:text-gray-900 dark:hover:text-white">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.5 0h-15C2.016 0 0 2.016 0 4.5v15C0 21.984 2.016 24 4.5 24h15c2.484 0 4.5-2.016 4.5-4.5v-15C24 2.016 21.984 0 19.5 0zM7.5 20h-3v-10h3v10zm-1.5-11.5c-.966 0-1.5-.634-1.5-1.5 0-.866.534-1.5 1.5-1.5s1.5.634 1.5 1.5c0 .866-.534 1.5-1.5 1.5zm15 11.5h-3v-5.5c0-1.25-.025-2.875-1.75-2.875-1.75 0-2 1.25-2 2.875v5.5h-3v-10h3v1.375c1.5-2.875 5.5-2.875 5.5 1.125V20z"/></svg>
    </a>
</div>
        </div>
    </div>
</section>

  


</div>
)}

export default Hero;