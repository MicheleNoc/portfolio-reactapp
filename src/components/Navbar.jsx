import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            
<nav class="border-gray-200 dark:border-gray-700 fixed top-0 w-full z-50">
    <div class="mr-5 ml-5 flex items-center justify-between mx-auto p-4">
        <li class="flex items-center space-x-3 rtl:space-x-reverse self-start text-2xl font-semibold whitespace-nowrap dark:text-white">
            <Link to="/"> 
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"> Michele Nocchi</span>
            </Link>
        </li>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-row space-x-8 rtl:space-x-reverse mt-0 border-0">
                <li class="ml-auto"> 
                    <Link class="block py-2 px-3 text-black rounded hover:bg-gray-100/30 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-transparent dark:hover:text-white" to="/about">About</Link>
                </li>
                <li>
                    <Link class="block py-2 px-3 text-black rounded hover:bg-gray-100/30 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-transparent dark:hover:text-white" to="/contact">Contatti</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>


        </div>
    )
}

export default Navbar;
