
// "use client";

// import { useRouter } from "next/navigation";
// import { client } from "@/sanity/lib/client";
// import { groq } from "next-sanity";
// import { product } from "@/types/products";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";

// interface ProductPageProps {
//   params: { slug: string };
// }

// async function getProduct(slug: string): Promise<product> {
//   return client.fetch(
//     groq`*[_type == "product" && slug.current == $slug][0]{
//       _id,
//       productName,
//       _type,
//       image,
//       price,
//       description
//     }`,
//     { slug }
//   );
// }

// export default async function ProductPage({ params }: ProductPageProps) {
//   const router = useRouter();
//   const product = await getProduct(params.slug);

//   const handleAddToCart = () => {
//     const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
//     cartItems.push(product);
//     localStorage.setItem("cart", JSON.stringify(cartItems));
//     router.push("/cart");
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-6 py-12">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//         {/* Product Image */}
//         <div className="relative">
//           {product.image && (
//             <Image
//               src={urlFor(product.image).url()}
//               alt={product.productName}
//               width={500}
//               height={500}
//               className="rounded-xl shadow-lg transition-transform transform hover:scale-105 duration-300"
//             />
//           )}
//         </div>

//         {/* Product Details */}
//         <div className="flex flex-col gap-6">
//           <h1 className="text-4xl font-bold text-gray-900">{product.productName}</h1>
//           <p className="text-2xl font-semibold text-gray-700">${product.price}</p>
//           <p className="text-gray-600 leading-relaxed">
//             {product.descripition ||
//               "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside-out inspired construction, unique layering, and exposed foam accents elevate this timeless Jordan silhouette."}
//           </p>

//           {/* Add to Cart Button */}
//           <button
//             onClick={handleAddToCart}
//             className="bg-black text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-800 hover:scale-105 transition-all"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }




"use client";

import { useRouter } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { product } from "@/types/products";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useEffect, useState } from "react";

interface ProductPageProps {
  params: { slug: string };
}

async function getProduct(slug: string): Promise<product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      productName,
      _type,
      image,
      price,
      description
    }`,
    { slug }
  );
}

export default function ProductPage({ params }: ProductPageProps) {
  const router = useRouter();
  const [product, setProduct] = useState<product | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      const data = await getProduct(params.slug);
      setProduct(data);
    }
    fetchProduct();
  }, [params.slug]);

  const handleAddToCart = () => {
    if (!product) return;
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    cartItems.push(product);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    router.push("/cart");
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Product Image */}
        <div className="relative">
          {product?.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.productName}
              width={500}
              height={500}
              className="rounded-xl shadow-lg transition-transform transform hover:scale-105 duration-300"
            />
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold text-gray-900">{product?.productName}</h1>
          <p className="text-2xl font-semibold text-gray-700">${product?.price}</p>
          <p className="text-gray-600 leading-relaxed">
            {product?.descripition ||
              "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside-out inspired construction, unique layering, and exposed foam accents elevate this timeless Jordan silhouette."}
          </p>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="bg-black text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-800 hover:scale-105 transition-all"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
