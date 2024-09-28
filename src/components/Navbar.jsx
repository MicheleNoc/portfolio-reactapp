import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent">
      <div className="mr-5 ml-5 flex items-center justify-between mx-auto p-4">
        {/* Logo */}
        <li className="flex items-center space-x-3 rtl:space-x-reverse self-start text-2xl font-semibold whitespace-nowrap text-black dark:text-white">
          <Link to="/">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-white">
              Michele Nocchi
            </span>
          </Link>
        </li>

        {/* Hamburger menu button (visible on mobile) */}
        <button
          className="inline-flex items-center p-2 ml-3 text-sm text-black dark:text-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Navbar menu (visible on large screens and toggled on mobile) */}
        <div
          className={`w-full md:flex md:items-center md:w-auto ${
            menuOpen ? 'block' : 'hidden'
          }`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 border-0 p-4 md:p-0 bg-transparent dark:bg-transparent">
            <li>
              <Link
                className="block py-2 px-3 text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="block py-2 px-3 text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
                to="/contact"
              >
                Contatti
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
