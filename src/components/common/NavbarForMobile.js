import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

function NavbarForMobile(){
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-4">
            <button
              className="text-white focus:outline-none lg:hidden"
              onClick={() => toggleNavbar()} // Ensure onClick is set to a function
            >
              <FaBars className="h-6 w-6" /> {/* Using FaBars from react-icons */}
            </button>
          </div>
          <div className="hidden lg:flex space-x-4">
            <a href="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Catalog</a>
            <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About Us</a>
            <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact Us</a>
          </div>
        </div>
        <div className="hidden lg:flex items-center">
          <button className="bg-white text-gray-800 px-4 py-2 rounded-md text-sm font-medium">Log In</button>
          <button className="bg-white text-gray-800 px-4 py-2 rounded-md text-sm font-medium">Sign Up</button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="#" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Catalog</a>
          <a href="#" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">About Us</a>
          <a href="#" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Contact Us</a>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-700">
          <div className="flex items-center px-5">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-md text-sm font-medium">Log In</button>
            <button className="ml-3 bg-white text-gray-800 px-4 py-2 rounded-md text-sm font-medium">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarForMobile;