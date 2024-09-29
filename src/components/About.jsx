import React from 'react'; 
import Navbar from './Navbar';
import Footer from './Footer';

function About() {
    return (
        <div>
            <Navbar />
            <div>
            <section class="bg-white dark:bg-black h-screen relative">
        <div class="absolute inset-0 z-0">
            <img src={`${process.env.PUBLIC_URL}/background.jpg`} alt="background" class="w-full h-full object-cover blur-sm opacity-70 dark:opacity-50" />
        </div>  
        <div class="relative z-10 flex items-center justify-center h-full px-4 py-8">
            <div class="text-center">
        <h1 class="max-w-4xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
        Ciao! Sono Michele, classe '97, e vivo nella splendida Livorno, in Toscana.
        </h1>
        <p class="max-w-4xl mb-6  text-black dark:text-white lg:mb-8 md:text-lg lg:text-xl dark:text-white-400">
        Dopo essermi diplomato in Elettronica, ho scelto un percorso universitario che mi ha portato a laurearmi in Economia e Legislazione dei Sistemi Logistici.
        Tuttavia, la mia vera passione è sempre stata la programmazione, una curiosità che ho coltivato nel tempo fino a farla diventare parte integrante della mia vita professionale.
        Ed è proprio da questa passione che nasce questo sito: un luogo dove condivido le mie competenze, i progetti che sviluppo e il mio continuo viaggio nel mondo della tecnologia.
        </p>
</div>
    </div>
</section>
            </div>
            <Footer />
        </div>
    );
}

export default About;