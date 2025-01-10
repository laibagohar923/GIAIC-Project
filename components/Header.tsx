"use client";


import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Toggle for mobile search bar

  const navItems = [
    { name: "New & Featured", url: "/newfeatured" },
    { name: "Men", url: "/men" },
    { name: "Women", url: "/women" },
    { name: "Kids", url: "/kids" },
    { name: "Sales", url: "/sales" },
    { name: "SNKRS", url: "/snkrs" },
  ];

  return (
    <nav className="bg-white shadow-md">
      {/* Top Bar */}
      <div className="text-black py-2 px-4 flex items-center justify-between">
        <button>
          <Image
            src="/images/Air-Jordan-Logo.png"
            alt="Jordan Logo"
            width={40}
            height={40}
            priority
          />
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex text-sm items-center space-x-6">
          <Link href="/findstore" className="hover:underline text-black">
            Find a Store &nbsp; |
          </Link>
          <Link href="/gethelp" className="hover:underline text-black">
            Help &nbsp; |
          </Link>
          <Link href="/joinus" className="hover:underline text-black">
            Join Us &nbsp; |
          </Link>
          <Link href="/signin" className="hover:underline text-black">
            Sign In
          </Link>
        </div>

        {/* Mobile Links */}
        <div className="flex md:hidden text-sm items-center space-x-4">
          <Link href="/findstore" className="hover:underline text-black">
            Store
          </Link>
          <Link href="/gethelp" className="hover:underline text-black">
            Help
          </Link>
          <Link href="/joinus" className="hover:underline text-black">
            Join
          </Link>
          <Link href="/signin" className="hover:underline text-black">
            Sign In
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Nike Logo with Link to Home */}
        <Link href="/">
          <Image
            src="/images/logonike.jpg"
            alt="Nike Logo"
            width={48}
            height={48}
            priority
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 flex-grow justify-center">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.url} className="hover:text-gray-500 text-black">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Search and Icons */}
        <div className="flex items-center space-x-4">
          {/* Mobile Search Button */}
          <button
            className="md:hidden text-black"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            🔍
          </button>

          {/* Desktop Search Bar */}
          <div className={`relative w-64 hidden md:block`}>
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-gray-100 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none text-black"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              🔍
            </span>
          </div>

          {/* Icons */}
          <button className="text-black hover:text-red-400">
            <HeartIcon className="w-6 h-6" />
          </button>

          {/* Shopping Cart Icon with Link */}
          <Link href="/cartpage">
            <button className="text-black hover:text-gray-800">
              <ShoppingCartIcon className="w-6 h-6" />
            </button>
          </Link>
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <div className="md:hidden px-4 py-2">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search"
              className="w-full text-black rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black">
              🔍
            </span>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.url} className="hover:text-gray-800 text-black">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
