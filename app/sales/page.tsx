
import Link from "next/link";
import React from "react";

const ProductDetail = () => {
  return (

    <div className="bg-white">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="flex justify-center">
            <img
              src="/images/nike3.png" // Replace with the actual path
              alt="Nike Air Force 1"
              className="max-w-full h-auto"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Nike Air Force 1 <br></br> PLT.AF.ORM</h1>
            <p className="text-gray-500">
              Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.
            </p>
            <p className="text-gray-800 font-bold text-xl ">₹ 8,695.00</p>
            <button className="bg-black  text-white px-6 py-3 rounded-full bg-black-500 shadow-lg shadow-cyan-500/50">
              Add To card
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
