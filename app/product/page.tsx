"use client";

import React from "react";
import { FaFilter } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import Link from "next/link";
const products = [
  {
    id: 1,
    tag: "Just In",
    name: "Nike Swoosh",
    category: "Women's Medium-support Padded Sports Bra Tank",
    price: "₹13,295.00",
    image: "/images/nike1.png",
  },
  {
    id: 2,
    tag: "Promo Exclusion",
    name: "Nike Court Vision Low Next Nature",
    category: "Men's Shoes",
    price: "₹11,895.00",
    image: "/images/nike2.png",
  },
  {
    id: 3,
    tag: "Just In",
    name: "Nike Standard Issue",
    category: "Women's Basketball Jersey",
    price: "₹2,895.00",
    image: "/images/nike3.png",
  
  },
  {
    id: 4,
    tag: "Just In",
    name: "Nike Standard Issue",
    category: "Women's Basketball Jersey",
    price: "₹2,895.00",
    image: "/images/nike4.png",
  },
  {
    id: 5,
    tag: "Just In",
    name: "Nike Air Force 1 React",
    category: "Men's Shoes",
    price: "₹2,895.00",
    image: "/images/nike5.png",
  },
  {
    id: 6,
    tag: "Just In",
    name: "Air Jordan 1 Elevate Low",
    category: "Women's Shoes",
    price: "₹2,895.00",
    image: "/images/men1.png",
  },
  {
    id: 7,
    tag: "Just In",
    name: "Nike Standard Issue",
    category: "Women's Basketball Jersey",
    price: "₹2,895.00",
    image: "/images/nike6.png",
  },
  {
    id: 8,
    tag: "Just In",
    name: "Nike Standard Issue",
    category: "Women's Basketball Jersey",
    price: "₹2,895.00",
    image: "/images/men2.png",
  },
  {
    id: 9,
    tag: "Just In",
    name: "Nike Dri-FIT Ready",
    category: "Men's Short-Sleeve Fitness Top",
    price: "₹2,895.00",
    image: "/images/nike7.png",
  },
  {
    id: 10,
    tag: "Just In",
    name: "Nike One Leak Protection: Period",
    category: "Women's Mid-Rise 18cm (approx.) Biker Shorts",
    price: "₹2,895.00",
    image: "/images/men3.png",
  },
  {
    id: 11,
    tag: "Just In",
    name: "Nike Air Force 1 LV8 3",
    category: "Older Kids' Shoe",
    price: "₹2,895.00",
    image: "/images/men4.png",
  },
  {
    id: 12,
    tag: "Just In",
    name: "Nike Blazer Low Platform",
    category: "Women's Shoes",
    price: "₹2,895.00",
    image: "/images/nike8.png",
  },
  {
    id: 13,
    tag: "Just In",
    name: "Nike Air Force 1 '07",
    category: "Women's Shoe",
    price: "₹2,895.00",
    image: "/images/nike10.png",
  },
  {
    id: 14,
    tag: "Just In",
    name: "Nike Pro Dri-FIT",
    category: "Men's Tight-Fit Sleeveless Top",
    price: "₹2,895.00",
    image: "/images/nike11.png",
  },
  {
    id: 15,
    tag: "Just In",
    name: "Nike Dunk Low Retro",
    category: "Men's Shoes",
    price: "₹2,895.00",
    image: "/images/men5.png",
  },
  {
    id: 16,
    tag: "Just In",
    name: "Nike Air Max SC",
    category: "Women's Shoes",
    price: "₹2,895.00",
    image: "/images/nike12.png",
  },
  {
    id: 17,
    tag: "Just In",
    name: "Nike Dri-FIT UV Miler",
    category: "Men's Short-Sleeve Running Top",
    price: "₹2,895.00",
    image: "/images/nike13.png",
  },
  {
    id: 18,
    tag: "Just In",
    name: "Nike Air Max SYSTM",
    category: "Older Kids' Shoes",
    price: "₹2,895.00",
    image: "/images/men6.png",
  },
  {
    id: 19,
    tag: "Just In",
    name: "Nike Alate All U",
    category: "Women's Light-Support Lightly  Lined U-Neck Printed Sports Bra",
    price: "₹2,895.00",
    image: "/images/nike14.png",
  },
  {
    id: 20,
    tag: "Just In",
    name: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    price: "₹2,895.00",
    image: "/images/men7.png",
  },
  {
    id: 21,
    tag: "Just In",
    name: "Nike Swoosh",
    category: "Women's Medium-support Padded Sports Bra Tank",
    price: "₹2,895.00",
    image: "/images/nike15.png",
  },
  {
    id: 22,
    tag: "Just In",
    name: "Nike SB Zoom Janoski OG+",
    category: "Shoes",
    price: "₹2,895.00",
    image: "/images/men8.png",
  },
  {
    id: 23,
    tag: "Just In",
    name: "Nike Dri-FIT Run Division Rise 365",
    category: "Men's Running Tank",
    price: "₹2,895.00",
    image: "/images/nike16.png",
  },
  {
    id: 3,
    tag: "Just In",
    name: "Nike Dri-FIT Challenger",
    category: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
    price: "₹2,895.00",
    image: "/images/men9.png",
  },
  {
    id: 3,
    tag: "Just In",
    name: "Jordan Series ES",
    category: "Men's Shoes",
    price: "₹2,895.00",
    image: "/images/men10.png",
  },
  {
    id: 3,
    tag: "Just In",
    name: "Nike Outdoor Play",
    category: "Older Kids' Oversized Woven Jacket",
    price: "₹2,895.00",
    image: "/images/nike17.png",
  },
  {
    id: 3,
    tag: "Just In",
    name: "Nike Sportswear Trend",
    category: "Older Kids' (Girls') High-waisted Woven Shorts",
    price: "₹2,895.00",
    image: "/images/men12.jpeg",
  },
  {
    id: 3,
    tag: "Just In",
    name: "Nike Blazer Low '77 Jumbo",
    category: "Women's Shoes",
    price: "₹2,895.00",
    image: "/images/men11.png",
  },
  {
    id: 3,
    tag: "Just In",
    name: "Nike SB Force 58",
    category: "Skate Shoe",
    price: "₹2,895.00",
    image: "/images/nike18.png",
  },
  {
    id: 3,
    tag: "Just In",
    name: "Nike Standard Issue",
    category: "Women's Basketball Jersey",
    price: "₹2,895.00",
    image: "/images/nike19.png",
  },

];

<section>
  <div className="bg-white min-h-screen">
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-lg shadow hover:shadow-md transition-shadow"
          >
            {/* Image Section */}
            <div className="h-[520px] w-full overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-120 object-cover rounded-t-lg"
              />
            </div>
            {/* Content Section */}
            <div className="p-4">
              <span className="text-orange-500 text-sm font-semibold">
                {product.tag}
              </span>
              <h3 className="font-bold text-lg text-gray-900 mt-2">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600">{product.category}</p>
              <p className="text-gray-900 font-semibold mt-3">
                MRP: {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


const ProductPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap md:flex-nowrap">
          {/* Sidebar Filters */}
          <aside className="w-full md:w-64  overflow-y-auto border-r p-4">
            {/* Filter Header */}
            <div className="flex items-center justify-between border-b pb-2">
              <h2 className="text-xl font-bold">Filters</h2>
              <FaFilter size={20} />
            </div>

            {/* Categories Section */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold">New (500)</h3>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li>Shoes</li>
                <li>Sports Bras</li>
                <li>Tops & T-Shirts</li>
                <li>Hoodies & Sweatshirts</li>
                <li>Jackets</li>
                <li>Trousers & Tights</li>
                <li>Shorts</li>
                <li>Tracksuits</li>
                <li>Jumpsuits & Rompers</li>
                <li>Skirts & Dresses</li>
                <li>Socks</li>
                <li>Accessories & Equipment</li>
              </ul>
            </div>

            {/* Gender Section */}
            <div className="mt-6">
              <h3 className="flex items-center justify-between text-lg font-semibold">
                Gender <AiOutlineDown />
              </h3>
              <div className="mt-2 space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Men</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Women</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Unisex</span>
                </label>
              </div>
            </div>

            {/* Kids Section */}
            <div className="mt-6">
              <h3 className="flex items-center justify-between text-lg font-semibold">
                Kids <AiOutlineDown />
              </h3>
              <div className="mt-2 space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Boys</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Girls</span>
                </label>
              </div>
            </div>

            {/* Shop by Price Section */}
            <div className="mt-6">
              <h3 className="flex items-center justify-between text-lg font-semibold">
                Shop by Price <AiOutlineDown />
              </h3>
              <div className="mt-2 space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Under ₹2,500.00</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>₹2,501.00 - ₹5,000.00</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Product Cards */}
          <main className="flex-1 bg-white p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border rounded-lg shadow hover:shadow-md transition-shadow"
                >
                  {/* Image Section */}
                  <div className="w-full h-64 flex items-center justify-center overflow-hidden rounded-t-lg bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full object-contain"
                    />
                  </div>
                  {/* Content Section */}
                  <div className="p-4">
                    <span className="text-orange-500 text-sm font-semibold">
                      {product.tag}
                    </span>
                    <h3 className="font-bold text-lg text-gray-900 mt-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600">{product.category}</p>
                    <p className="text-gray-900 font-semibold mt-3">
                      MRP: {product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>

  );
};

export default ProductPage;




