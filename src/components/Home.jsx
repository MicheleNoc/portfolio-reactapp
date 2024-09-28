import React from 'react'; 
import Navbar from './Navbar';
import Footer from './Footer';
import Card from './Card';
import Hero from './Hero';
import Carousel from './Carousel';

function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="App bg-black flex items-center justify-center">
                <Carousel />
            </div>
                <Card />  
                <Footer />   
        </div>
    );
}

export default Home;