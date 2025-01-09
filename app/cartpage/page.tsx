"use client"; // This ensures the file is treated as a client component.

import { useRouter } from "next/navigation"; // Use the correct router from "next/navigation"
import React from "react";
import { FiHeart, FiTrash2 } from "react-icons/fi";
import Image from "next/image";

const CartPage: React.FC = () => {
  const router = useRouter(); // Initialize the router

  return (
    <div className="bg-gray-50 min-h-full">
      {/* Free Delivery Banner */}
      <div className="container mx-auto px-6 text-left mt-8 text-sm text-gray-800 bg-gray-200 py-5">
        <span className="font-semibold">Free Delivery <br /></span> 
        Applies to orders of over ₹14,000.00 or more.{" "}
        <a href="#" className="text-black font-bold underline">
          View details
        </a>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cart Items Section */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-6">Bag</h2>

            {/* Product Item 1 */}
            <div className="flex items-center justify-between border-b pb-4 mb-6">
              <div className="flex gap-4">
              <Image
  src="/images/cart1.jpg"
  alt="Nike Product"
  width={100}
  height={100}
  className="w-20 h-20 object-contain rounded-md"
/>

                <div>
                  <p className="font-semibold text-gray-800">
                    Nike Dri-FIT ADV TechKnit Ultra
                  </p>
                  <p className="text-gray-500 text-sm mt-3">
                    Mens Short-Sleeve Running Top
                  </p>
                  <p className="text-gray-500 text-sm mt-3">
                    Ashen Slate/Cobalt Bliss
                  </p>
                  <div className="text-sm font-medium mt-4">
                    Size: <span className="font-bold">L</span> &nbsp;&nbsp; 
                    Quantity: <span className="font-bold">1</span>
                  </div>
                </div>
              </div>
              <div className="text-gray-800 font-semibold">MRP: ₹ 3,895.00</div>
            </div>
            {/* Icons Section */}
            <div className="flex gap-4 items-center justify-start ml-24 mb-6">
              <button className="text-gray-500 hover:text-red-500">
                <FiHeart className="w-6 h-6" />
              </button>
              <button className="text-gray-500 hover:text-red-500">
                <FiTrash2 className="w-6 h-6" />
              </button>
            </div>

            {/* Product Item 2 */}
            <div className="flex items-center justify-between border-b pb-4 mb-6">
              <div className="flex gap-4">
              <Image
  src="/images/nike3.png"
  alt="Nike Product"
  width={100}
  height={100}
  className="w-20 h-20 object-contain rounded-md"
/>

                <div>
                  <p className="font-semibold text-gray-800">
                    Nike Air Max 97 SE
                  </p>
                  <p className="text-gray-500 text-sm mt-3">Mens Shoes</p>
                  <p className="text-gray-500 text-sm mt-3">
                    Flat Pewter/Light Bone/Black/White
                  </p>
                  <div className="text-sm font-medium mt-4">
                    Size: <span className="font-bold">L</span> &nbsp;&nbsp; 
                    Quantity: <span className="font-bold">1</span>
                  </div>
                </div>
              </div>
              <div className="text-gray-800 font-semibold">MRP: ₹ 16,995.00</div>
            </div>
            {/* Icons Section */}
            <div className="flex gap-4 items-center justify-start ml-24 mb-6">
              <button className="text-gray-500 hover:text-red-500">
                <FiHeart className="w-6 h-6" />
              </button>
              <button className="text-gray-500 hover:text-red-500">
                <FiTrash2 className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Summary Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Summary</h2>
            <div className="bg-white p-6 rounded shadow-md">
              <div className="flex justify-between mb-4">
                <p className="text-gray-600">Subtotal</p>
                <p className="text-gray-800 font-semibold">₹ 20,890.00</p>
              </div>
              <div className="flex justify-between mb-4">
                <p className="text-gray-600">Estimated Delivery & Handling</p>
                <p className="text-gray-800 font-semibold">Free</p>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between">
                  <p className="text-gray-800 font-semibold">Total</p>
                  <p className="text-gray-800 font-semibold">₹ 20,890.00</p>
                </div>
              </div>
              <button
                onClick={() => router.push("/checkout")}
                className="w-full mt-6 py-2 bg-black text-white font-semibold rounded hover:bg-gray-800"
              >
                Member Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
