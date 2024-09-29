import React from "react";

function Card() {
return (
    <div>
<section className="bg-white dark:bg-[#31363F] pt-10 pb-10 lg:pt-[40px] lg:pb-20">
  <div className="container mx-auto">
  <div className="flex items-center justify-center mb-11 text-xl font-extrabold tracking-tight leading-none md:text-xl xl:text-3xl text-black dark:text-white">
      <h1 > 
        My Projects
      </h1>
    </div>
    <div className="flex flex-wrap justify-center mx-4"> 
      
      <div className="w-250 px-4 md:w-1/2 xl:w-1/3">
        <div
           className="mb-10 overflow-hidden duration-300 bg-white text-black dark:bg-[#222831] dark:text-white rounded-lg shadow-lg hover:shadow-2xl dark:shadow-card dark:hover:shadow-3 dark:shadow-[0_0_10px_#FFFFFF]" 
        >
          <img src={`${process.env.PUBLIC_URL}/searchbooks.jpg`} alt="Search Books" className="w-full h-72 object-cover"/>
          <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
            <h3 className="hover:text-primary mb-4 block text-xl font-semibold text-dark dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
              Search Books
            </h3>
            <p className="text-base leading-relaxed text-body-color dark:text-dark-6 mb-7">
              Progetto realizzato usando HTML, CSS, Javascript, Node.JS, Express.JS, Axios e API "Open Library" per effettuare la ricerca per Autore e Titolo di un libro presente nel catalogo.
            </p>
            <a
              href="https://books-finder-library.vercel.app"
              className="inline-block py-2 text-base font-medium transition border rounded-full text-body-color border-gray-3 px-7 dark:border-dark-3 dark:text-dark-6"
            >
              Link alla demo
            </a>
            <a
              href="https://github.com/MicheleNoc/books-finder.git"
              className="inline-block ml-2 py-2 text-base font-medium transition border rounded-full text-body-color border-gray-3 px-7 dark:border-dark-3 dark:text-dark-6"
            >
              Link Github
            </a>
          </div>
        </div>
      </div>

      <div className="w-full px-4 md:w-1/2 xl:w-1/3">
        <div
                    className="mb-10 overflow-hidden duration-300 bg-white text-black dark:bg-[#222831] dark:text-white rounded-lg shadow-lg hover:shadow-2xl dark:shadow-card dark:hover:shadow-2xl dark:shadow-[0_0_10px_#FFFFFF]" 
        >
          <img
            src={`${process.env.PUBLIC_URL}/weatherapp.png`}
            alt="React Weather App" 
            className="w-full h-72 object-cover"
          />
          <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
            <h3 className="hover:text-primary mb-4 block text-xl font-semibold text-dark dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
              React Weather App
            </h3>
            <p className="text-base leading-relaxed text-body-color dark:text-dark-6 mb-7">
              WebApp con integrazione API "OpenWeather" per la visualizzazione dei dati meteorologici del luogo cercato.
            </p>
            <a
              href="https://weatherapp-sable-two.vercel.app/"
              className="inline-block py-2 text-base font-medium transition border rounded-full text-body-color border-gray-3 px-7 dark:border-dark-3 dark:text-dark-6"
            >
              Link alla demo
            </a>
            <a
              href="https://github.com/MicheleNoc/weatherapp.git"
              className="inline-block ml-2 py-2 text-base font-medium transition border rounded-full text-body-color border-gray-3 px-7 dark:border-dark-3 dark:text-dark-6"
            >
              Link Github
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




    </div>



)}

export default Card;