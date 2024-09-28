import React from "react";

function Card() {
return (
    <div>
<section class="bg-white dark:bg-black dark:bg-dark pt-20 pb-10 lg:pt-[120px] lg:pb-20">
   <div class="container mx-auto">
      <div class="flex flex-wrap justify-center mx-4"> 
         <div class="w-250 px-4 md:w-1/2 xl:w-1/3">
            <div
               class="mb-10 overflow-hidden duration-300 bg-white text-white dark:bg-black rounded-lg dark:bg-dark-2 shadow-lg hover:shadow-2xl dark:shadow-card dark:hover:shadow-3 border border-white border-opacity-50" 
               >
             <img src={`${process.env.PUBLIC_URL}/searchbooks.jpg`} alt="" class="w-full  h-72 object-cover"/>
               <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
               <h3 class="text-dark dark:text-white hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
                     Search Books
                  </h3>
                  <p
                     class="text-base leading-relaxed text-body-color dark:text-dark-6 mb-7"
                     >
                    Progetto realizzato usando HTML, CSS, Javascript, Node.JS, Express.JS, Axios e API "Open Library" per effettuare la ricerca per Autore e Titolo di un libro presente nel catalogo.
                  </p>
                  <a
                     href="https://books-finder-library.vercel.app"
                     class="inline-block py-2 text-base font-medium transition border rounded-full text-body-color hover:border-primary hover:bg-primary border-gray-3 px-7 hover:text-white dark:border-dark-3 dark:text-dark-6"
                     >
                  Link alla demo
                  </a>
                  <a
                     href="https://github.com/MicheleNoc/books-finder.git"
                     class="inline-block ml-2 py-2 text-base font-medium transition border rounded-full text-body-color hover:border-primary hover:bg-primary border-gray-3 px-7 hover:text-white dark:border-dark-3 dark:text-dark-6"
                     >
                  Link Github
                  </a>
               </div>
            </div>
         </div>
         <div class="w-full px-4 md:w-1/2 xl:w-1/3">
            <div
               class="mb-10 overflow-hidden duration-300 bg-white text-white dark:bg-black rounded-lg dark:bg-dark-2 shadow-lg hover:shadow-2xl dark:shadow-card dark:hover:shadow-3 border border-white border-opacity-50"
               >
              <img
                  src={`${process.env.PUBLIC_URL}/weatherapp.png`}
                  alt="" 
                  class="w-full  h-72 object-cover"
                  />
               <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                  <h3 class="text-dark dark:text-white hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
                     React Weather App
                  </h3>
                  <p class="text-base leading-relaxed text-body-color mb-7">
                  WebApp con integrazione API "OpenWeather" per la visualizzazione dei dati meteorologici del luogo cercato.
                  </p>
                  <a
                     href="https://weatherapp-sable-two.vercel.app/"
                     class="inline-block py-2 text-base font-medium transition border rounded-full text-body-color hover:border-primary hover:bg-primary border-gray-3 px-7 hover:text-white dark:border-dark-3 dark:text-dark-6"
                     >
                  Link alla demo
                  </a>
                  <a
                     href="https://github.com/MicheleNoc/weatherapp.git"
                     class="inline-block ml-2 py-2 text-base font-medium transition border rounded-full text-body-color hover:border-primary hover:bg-primary border-gray-3 px-7 hover:text-white dark:border-dark-3 dark:text-dark-6"
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