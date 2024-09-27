import React from 'react'; 
import Navbar from './Navbar';

function Home() {
    return (
        <div>
            <Navbar />
            <div className='flex justify-center justify-items-center' widht="100%">
                <h1>Hello World, mi chiamo Michele!</h1>
                
            </div>
        </div>
    );
}

export default Home;