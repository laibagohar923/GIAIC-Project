

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getCartItems } from "../actions/action";
import Link from "next/link";
import { product } from "@/types/products";
import { urlFor } from "@/sanity/lib/image";
import { CgChevronRight } from "react-icons/cg";
import { client } from "@/sanity/lib/client";
import Swal from "sweetalert2";

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) setDiscount(Number(appliedDiscount));
  }, []);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.inventory,
    0
  );
  const total = Math.max(subtotal - discount, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    const errors = Object.keys(formValues).reduce((acc, key) => {
      acc[key] = !formValues[key as keyof typeof formValues];
      return acc;
    }, {} as Record<string, boolean>);

    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = async () => {
    if (validateForm()) {
      localStorage.removeItem("appliedDiscount");
      // toast.success("Order placed successfully!");
    } else {
      // toast.error("Please fill in all the fields.");
    }
    Swal.fire({
      title: "processing your order...",
      text: "please wait a moment",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "proceed",
    }).then((result) => {
      if (result.isConfirmed) {
        if (validateForm()) {
          localStorage.removeItem("appliedDiscount");
          Swal.fire(
            "Success!",
            "Your Oder Successfully Processed!",
            "success"
          );
        } else {
          Swal.fire(
            "Error!",
            "Please fill in all the fields before proceeding",
            "error"
          );
        }
      }
    });
    const orderData = {
      _type: 'order',
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      address: formValues.address,
      city: formValues.city,
      zipCode: formValues.zipCode,
      phone: formValues.phone,
      email: formValues.email,

      cartItems: cartItems.map(item => ({
        _type: "reference",
        _ref: item._id
      })),
      total: total,
      discount: discount,
      orderDate: new Date().toISOString(),
    };

    try {
      await client.create(orderData)
      // Swal.fire("Success!", "Your order has been placed!", "success");
      localStorage.removeItem("appliedDiscount")
    } catch (error) {
      console.log("error creating order", error)
      // Swal.fire("Error!", "Failed to place order.", "error");
    }
  };

  return (
    <div>
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6">
        <nav className="flex items-center gap-2 text-sm text-gray-600">
          <Link href="/cart" className="hover:text-black transition">
            Cart
          </Link>
          <CgChevronRight className="w-4 h-4" />
          <span className="font-semibold">Checkout</span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Order Summary */}
        <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
          <h2 className="text-xl font-semibold border-b pb-3">Order Summary</h2>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item._id} className="flex items-center gap-4 border-b pb-3">
                <div className="w-16 h-16 rounded-md overflow-hidden">
                  {item.image && (
                    <Image
                      src={urlFor(item.image).url()}
                      alt={item.productName}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium">{item.productName}</h3>
                  <p className="text-xs text-gray-500">Quantity: {item.inventory}</p>
                </div>
                <p className="text-sm font-semibold">${item.price * item.inventory}</p>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500">Your cart is empty.</p>
          )}
          <div className="text-right pt-4 space-y-1">
            <p className="text-sm">Subtotal: <span className="font-medium">${subtotal}</span></p>
            <p className="text-sm">Discount: <span className="font-medium">-${discount}</span></p>
            <p className="text-lg font-semibold">Total: ${total.toFixed(2)}</p>
          </div>
        </div>

        {/* Billing Form */}
        <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
          <h2 className="text-xl font-semibold border-b pb-3">Billing Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.keys(formValues).map((field) => (
              <div key={field}>
                <label htmlFor={field} className="block text-sm font-medium text-gray-600">
                  {field.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                </label>
                <input
                  id={field}
                  placeholder={`Enter your ${field}`}
                  value={formValues[field as keyof typeof formValues]}
                  onChange={handleInputChange}
                  className={`w-full border px-3 py-2 rounded-lg focus:ring-2 ${formErrors[field] ? "border-red-500 ring-red-300" : "border-gray-300 focus:ring-blue-400"
                    }`}
                />
                {formErrors[field] && (
                  <p className="text-xs text-red-500 mt-1">{field} is required.</p>
                )}
              </div>
            ))}
          </div>
          <button
            className="w-full h-12 bg-black text-white rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
