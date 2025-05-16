import React from 'react'; 
import Navbar from './Navbar';
import Footer from './Footer';

function About() {
    return (
        <div className="min-h-screen bg-[#181f2a] flex flex-col">
            <Navbar />
            <main className="flex-1 relative">
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                    {/* Background con overlay */}
                    <div className="absolute inset-0 z-0">
                        <img src={`${process.env.PUBLIC_URL}/background.jpg`} alt="background" className="w-full h-full object-cover blur-[2px] opacity-60" />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#181f2a]/80 to-[#181f2a]/95" />
                    </div>
                    {/* Contenuto */}
                    <div className="relative z-10 max-w-3xl mx-auto px-6 py-12 text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                            Ciao! Sono Michele, classe '97, e vivo nella splendida Livorno, in Toscana.
                        </h1>
                        <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full mb-8" />
                        <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-4">
                            Dopo essermi diplomato in <span className="font-semibold text-blue-400">Elettronica</span>, ho scelto un percorso universitario che mi ha portato a laurearmi in <span className="font-semibold text-blue-400">Economia e Legislazione dei Sistemi Logistici</span>.<br className="hidden md:block" />
                            Tuttavia, la mia vera passione è sempre stata la <span className="font-semibold text-blue-400">programmazione</span>, una curiosità che ho coltivato nel tempo fino a farla diventare parte integrante della mia vita professionale.
                        </p>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                            Ed è proprio da questa passione che nasce questo sito: un luogo dove condivido le mie competenze, i progetti che sviluppo e il mio continuo viaggio nel mondo della tecnologia.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default About;