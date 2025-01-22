"use client";



import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client"
import { allproducts } from "@/sanity/lib/queries"
import { useEffect, useState } from "react"
import { product } from "@/types/porducts"
// import from "next/image"


const HomePage = () => {

 
  const [products, setProducts] = useState<product[]>([]);

useEffect(() => {
  async function fetchProducts() {
    try {
      const fetchedProducts: product[] = await client.fetch(allproducts);
      setProducts(fetchedProducts);
      console.log("Fetched products:", fetchedProducts); // For debugging
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  fetchProducts();
}, []);

<section>
  <div className="max-w-6xl mx-auto px-4 py-8">
    {products.map((product) => (
      <div key={product._id}>
        {product.productName}
      </div>
    ))}
  </div>
</section>

  return (
    <div>
      {/* Hero Section */}
      <section>
        <h1 className="text-center font-bold">Hello Nike App</h1>
        <p className="text-center text-sm">
          Download the app to access everything Nike.
          <span className="relative">
            Get Your Great
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black"></span>
          </span>
        </p>

        <Image
          src="/images/shoes-image.png"
          alt="Nike Product"
          width={10000} // w-20 corresponds to 80px
          height={10000} // h-20 corresponds to 80px
          className="object-cover"
        />

      </section>
      <div>
        <h1 className="text-center text-lg font-bold mt-6 ">First Look</h1>
        <p className="text-center font-bold  text-5xl mt-6">NIKE AIR MAX PULES</p>
        <p className="text-center mt-6">Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse <br></br>
          —designed to push you past your limits and help you go to the max.</p>
        <div className="flex justify-center mt-6">
          <button className="bg-black mr-6  text-white px-6 py-3 rounded-full bg-black-500 shadow-lg shadow-cyan-500/50">
            Notify Me
          </button>
          <button className="bg-black  text-white px-6 py-3 rounded-full bg-black-500 shadow-lg shadow-cyan-500/50">
            Shop Air Max
          </button>
        </div>

      </div>













      {/* 
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl  font-bold mb-8 text-black ">
            Best of Air Max
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> */}
      {/* Product Card 1 */}
      {/* <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="relative w-full h-48">
                <Image
                  src="/images/shoes2.png"
                  alt="Nike Air Max Pulse"
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-black">Nike Air Max Pulse</h3>
                <p className="text-gray-600">€180</p>
                <p className="text-black">Mens Shoes</p>
              </div>
            </div> */}
      {/* Product Card 2 */}
      {/* <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="relative w-full h-48">
                <Image
                  src="/images/shoes3.png"
                  alt="Nike Air Max 97"
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-black">Nike Air Max 97</h3>
                <p className="text-gray-600">€170</p>
                <p className="text-black">Mens Shoes</p>
              </div>
            </div> */}
      {/* Product Card 3 */}
      {/* <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="relative w-full h-48">
                <Image
                  src="/images/shoes4.png"
                  alt="Nike Air Max 270"
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-black">Nike Air Max 270</h3>
                <p className="text-gray-600">€160</p>
                <p className="text-black">Mens Shoes</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}









      {/* Featured Section */}

      <div>
        <Image
          src="/images/featured.jpeg"
          alt="Featured"
          layout="responsive"
          width={500} // Ratio set karne ke liye
          height={300}
          className="rounded-lg"
        />

        <h2 className="text-center font-bold  text-5xl mt-9">STEP INTO WHAT FEELS GOOD</h2>
        <p className="mt-4 text-gray-600 text-center">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse <br></br>
          —designed to push you past your limits and help you go to the max.
        </p>
        <div className="flex justify-center mt-6">
          <button className="bg-black  text-white px-6 py-3 rounded-full bg-black-500 shadow-lg shadow-cyan-500/50">
            Find Your Shoes
          </button>
        </div>
      </div>
      <div>

        <h1 className="text-3xl md:text-4xl font-bold mt-8">Gear Up</h1>
        {/* Product Slider */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Product 1 */}
              <div className="shadow-md rounded-md overflow-hidden">

                <Image
                  src="/images/pic2.png"
                  alt="Featured"
                  layout="responsive"
                  width={100} // Ratio set karne ke liye
                  height={64}
                  className="object-cover"
                />

                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-left">Nike Dri-FIT ADV Techknit </h3>
                  <p className="text-left">Mens Short-Sleeve Running Top</p>
                  <p className="text-black font-bold ">₹ 2,995</p>
                </div>
              </div>

              {/* Product 2 */}
              <div className="shadow-md rounded-md overflow-hidden">
                <Image
                  src="/images/pic1.png"
                  alt="Featured"
                  layout="responsive"
                  width={100} // Ratio set karne ke liye
                  height={64}
                  className="object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">Nike Dri-FIT Challenger</h3>
                  <p className="text-left">Mens Short-Sleeve Running Top</p>
                  <p className="text-black font-bold ">₹ 2,492</p>
                </div>
              </div>

              {/* Product 3 */}
              <div className="shadow-md rounded-md overflow-hidden">
                <Image
                  src="/images/pic3.png"
                  alt="Featured"
                  layout="responsive"
                  width={100} // Ratio set karne ke liye
                  height={64}
                  className="object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">Nike Dri-FIT ADV Division</h3>
                  <p className="text-left">Mens Short-Sleeve Running Top</p>
                  <p className="text-black font-bold ">₹ 5295</p>
                </div>
              </div>

              {/* Product 4 */}
              <div className="shadow-md rounded-md overflow-hidden">
                <Image
                  src="/images/pic4.png"
                  alt="Featured"
                  layout="responsive"
                  width={100} // Ratio set karne ke liye
                  height={64}
                  className="object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">Nike Fast</h3>
                  <p className="text-left">Mens Short-Sleeve Running Top</p>
                  <p className="text-black font-bold ">₹ 3795</p>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Essentials Section */}

        <h2 className="text-3xl font-bold text-left mt-20">Dont Miss</h2>
        <section>

          <Image
            src="/images/long.png"
            alt="Featured"
            layout="responsive"
            width={1000} // Image ki original width ko set karen
            height={500} // Image ki original height ko set karen
            className="object-cover"
          />

        </section>
        <div>
          <h2 className="text-center font-bold  text-5xl mt-9">
            FLIGHT ESSENTIALS
          </h2>
          <p className="text-black   mb-6 text-center">
            Your built-to-last, all-week wears – but with style only Jordan Brand can deliver.
          </p>
          <div className="flex justify-center mt-6">
            <button className="bg-black  text-white px-6 py-3 rounded-full bg-black-500 shadow-lg shadow-cyan-500/50">
              Find Your Shoes
            </button>
          </div>
        </div>

        {/* Essentials Grid */}
        <section className="py-12">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mt-9">The Essentials</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Men's */}
              <div className="relative overflow-hidden rounded-lg shadow-md">
                <Image
                  src="/images/essentials-men.png"
                  alt="Featured"
                  layout="responsive"
                  width={100} // Ratio set karne ke liye
                  height={90}
                  className="object-cover"
                />
                <button className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 rounded-lg shadow-md">
                  Mens
                </button>
              </div>

              {/* Women's */}
              <div className="relative overflow-hidden rounded-lg shadow-md">


                <Image
                  src="/images/essentials-women.png"
                  alt="Featured"
                  layout="responsive"
                  width={100} // Ratio set karne ke liye
                  height={90}
                  className="object-cover"
                />
                <button className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 rounded-lg shadow-md">
                  Womens
                </button>
              </div>

              {/* Kids' */}
              <div className="relative overflow-hidden rounded-lg shadow-md">
                <Image
                  src="/images/essentials-kids.png"
                  alt="Featured"
                  layout="responsive"
                  width={100} // Ratio set karne ke liye
                  height={90}
                  className="object-cover"
                />
                <button className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 rounded-lg shadow-md">
                  Kids
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* icons */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Icons */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Icons</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Air Force 1</li>
                <li>Huarache</li>
                <li>Air Max 90</li>
                <li>Air Max 95</li>
              </ul>
            </div>
            {/* Shoes */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Shoes</h3>
              <ul className="text-gray-600 space-y-2">
                <li>All Shoes</li>
                <li>Custom Shoes</li>
                <li>Jordan Shoes</li>
                <li>Running Shoes</li>
              </ul>
            </div>
            {/* Clothing */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Clothing</h3>
              <ul className="text-gray-600 space-y-2">
                <li>All Clothing</li>
                <li>Modest Wear</li>
                <li>Hoodies & Pullovers</li>
                <li>Shirts & Tops</li>
              </ul>
            </div>
            {/* Kids */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Kids</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Infant & Toddler Shoes</li>
                <li>Kids Shoes</li>
                <li>Kids Jordan Shoes</li>
                <li>Kids Basketball Shoes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;