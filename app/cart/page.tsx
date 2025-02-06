
"use client";

import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { product } from "@/types/products";
import { getCartItems } from "../actions/action";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire("Removed!", "Item has been removed.", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) handleQuantityChange(id, product.inventory + 1);
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1) handleQuantityChange(id, product.inventory - 1);
  };

  const calculatedTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
  };

  const router = useRouter();

  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to checkout?",
      text: "Please review your cart before checkout.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success", "Your order has been processed!", "success");
        router.push("/check");
        setCartItems([])
      }
    });
  };

  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center text-lg">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div key={item._id} className="flex items-center bg-white shadow-md rounded-lg p-5">
                {item.image && (
                  <Image
                    src={urlFor(item.image).url()}
                    className="w-20 h-20 object-cover rounded-lg"
                    alt={item.productName}
                    width={80}
                    height={80}
                  />
                )}
                <div className="flex-1 ml-4">
                  <h2 className="text-lg font-semibold text-gray-800">{item.productName}</h2>
                  <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
                  <div className="flex items-center space-x-2 mt-3">
                    <button
                      onClick={() => handleDecrement(item._id)}
                      className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-md text-lg"
                    >
                      -
                    </button>
                    <span className="text-lg font-semibold">{item.inventory}</span>
                    <button
                      onClick={() => handleIncrement(item._id)}
                      className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-md text-lg"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(item._id)}
                  className="ml-6 text-red-600 hover:text-red-800 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Cart Summary</h2>
            <div className="flex justify-between mb-3">
              <span className="text-gray-600 text-lg">Subtotal:</span>
              <span className="text-lg font-semibold">${calculatedTotal().toFixed(2)}</span>
            </div>
            <button
              onClick={handleProceed}
              className="w-full bg-black text-white font-semibold py-3 mt-5 rounded-lg shadow-md hover:bg-gray-700 hover:scale-105 transition-transform duration-300"
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;

// Functions for handling cart updates
function removeFromCart(id: string) {
  const cart = getCartItems().filter((item) => item._id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartQuantity(id: string, quantity: number) {
  const cart = getCartItems().map((item) =>
    item._id === id ? { ...item, inventory: quantity } : item
  );
  localStorage.setItem("cart", JSON.stringify(cart));
}
