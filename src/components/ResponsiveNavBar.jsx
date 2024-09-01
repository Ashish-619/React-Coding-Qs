import React, { useState } from 'react';

const ResponsiveNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          MyWebsite
        </div>

        {/* Hamburger Icon */}
        <button 
          className="text-white block lg:hidden" 
          onClick={toggleMenu}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        </button>

        {/* Menu Items */}
        <div 
          className={`lg:flex lg:items-center lg:space-x-4 ${isOpen ? 'block' : 'hidden'}`}
        >
          <a href="#home" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>
          <a href="#about" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</a>
          <a href="#services" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Services</a>
          <a href="#contact" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default ResponsiveNavBar;
