










"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-gray-100 py-2 px-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Icon on the left */}
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>

          </button>
        </div>
        <div className="flex items-center space-x-6">
          <Link href="/product" className="text-black text-sm hover:underline">
            Find a Store
          </Link>
          <Link href="/productdetail" className="text-blaack text-sm hover:underline">
            product detail
          </Link>
          <Link href="gethelp" className="text-black text-sm hover:underline">
            Help
          </Link>
          <Link href="/joinus" className="text-black text-sm hover:underline">
            Join Us
          </Link>
          <Link href="/signin" className="text-black text-sm hover:underline">
            Sign In
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-800 flex-grow text-center md:text-left">
          Nike
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 justify-center flex-grow">
          <li>
            <Link href="/" className="text-black font-bold hover:text-gray-500 transition">
              New & Featured
            </Link>
          </li>
          <li>
            <Link href="/men" className="text-black font-bold hover:text-gray-500 transition">
              Men
            </Link>
          </li>
          <li>
            <Link href="/women" className="text-black font-bold hover:text-gray-500 transition">
              Women
            </Link>
          </li>
          <li>
            <Link href="/kids" className="text-black font-bold hover:text-gray-500 transition">
              Kids
            </Link>
          </li>
          <li>
            <Link href="/sales" className="text-black font-bold hover:text-gray-500 transition">
              Sales
            </Link>
          </li>
          <li>
            <Link href="/snkrs" className="text-black font-bold hover:text-gray-500 transition">
              SNKRS
            </Link>
          </li>
        </ul>

        {/* Search Bar (Desktop) */}
        <div className="hidden md:flex items-center space-x-2 border p-2 rounded-md">
          <input
            type="text"
            placeholder="Search..."
            className="outline-none border-none text-gray-600 placeholder-gray-400"
          />
          <button className="text-gray-600 hover:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 3a8 8 0 100 16 8 8 0 000-16zm0 0V4m0 16v1M3 11h1m16 0h1M6.5 6.5L7.9 7.9M16.1 16.1l1.4 1.4" />
            </svg>
          </button>
        </div>

        {/* Heart and Cart Icons */}
        <div className="hidden md:flex space-x-6 items-center">
          <button className="text-gray-600 hover:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927C10.664 2.341 9.795 2.344 9.412 2.927l-.633.753-.633-.753C8.205 2.344 7.336 2.341 6.951 2.927A5.582 5.582 0 006 7.199c0 1.443.56 2.842 1.576 3.877L12 15l4.424-4.924C16.44 10.041 17 8.642 17 7.199a5.582 5.582 0 00-.951-4.272C15.664 2.342 14.795 2.344 14.412 2.927l-.633.753-.633-.753z" />
            </svg>
          </button>

          <button className="text-gray-600 hover:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18l-1.75 13H4.75L3 3z" />
            </svg>
          </button>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link href="/" className="text-black font-bold hover:text-gray-800 transition" onClick={() => setIsMenuOpen(false)}>
                New & Featured
              </Link>
            </li>
            <li>
              <Link href="/shop" className="text-black font-bold hover:text-gray-800 transition" onClick={() => setIsMenuOpen(false)}>
                Men
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-black font-bold hover:text-gray-800 transition" onClick={() => setIsMenuOpen(false)}>
                Women
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-black font-bold hover:text-gray-800 transition" onClick={() => setIsMenuOpen(false)}>
                Kids
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-black font-bold hover:text-gray-800 transition" onClick={() => setIsMenuOpen(false)}>
                Sales
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-black font-bold hover:text-gray-800 transition" onClick={() => setIsMenuOpen(false)}>
                SNKRS
              </Link>
            </li>
          </ul>

          {/* Mobile Login Button */}
          <button
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


