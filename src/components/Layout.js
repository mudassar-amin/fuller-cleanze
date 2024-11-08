// src/components/Layout.js
import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow">
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src="/img/Fuller Cleanze-TM.png" alt="Fuller Cleanze Logo" className="h-12" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="text-gray-600 hover:text-blue-600">
              Home
            </Link>
            <Link to="/aboutus" className="text-gray-600 hover:text-blue-600">
              About Us
            </Link>
            <Link to="/products" className="text-gray-600 hover:text-blue-600">
              Products
            </Link>
            <Link to="/contactus" className="text-gray-600 hover:text-blue-600">
              Contact Us
            </Link>
          </div>

          {/* Hamburger Icon for Mobile */}
          <button
            className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-lg`}>
          <Link
            to="/"
            className="block px-4 py-2 text-gray-600 hover:bg-blue-100 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/aboutus"
            className="block px-4 py-2 text-gray-600 hover:bg-blue-100 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/products"
            className="block px-4 py-2 text-gray-600 hover:bg-blue-100 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/contactus"
            className="block px-4 py-2 text-gray-600 hover:bg-blue-100 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
