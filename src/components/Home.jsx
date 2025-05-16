import React from 'react'; 
import Navbar from './Navbar';
import Footer from './Footer';
import Card from './Card';
import Hero from './Hero';
import Carousel from './Carousel';

function Home() {
    return (
        <div className="min-h-screen bg-[#181f2a] flex flex-col">
            <Navbar />
            <main className="flex-1">
                <Hero />
                <section className="py-8">
                    <Carousel />
                </section>
                <section className="py-8">
                    <Card />
                </section>
            </main>
            <Footer />   
        </div>
    );
}

export default Home;