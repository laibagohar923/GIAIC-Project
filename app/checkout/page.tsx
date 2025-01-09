



"use client";

import React from "react";
import Image from "next/image";

const CheckoutPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section - Delivery and Address */}
        <div className="flex flex-col items-center md:col-span-2">
          <div className="w-full max-w-md text-center">
            <h2 className="text-2xl font-semibold mb-6">How would you like to get your order?</h2>
            <p className="text-sm text-gray-400 mb-4 text-start">
              Customs regulation for India requires a copy of the recipients
              KYC. The address on the KYC needs to match the shipping address.
              Our courier will contact you via SMS/email to obtain a copy of
              your KYC. The KYC will be stored securely and used solely for the
              purpose of clearing customs (including sharing it with customs
              officials) for all orders and returns. If your KYC does not match
              your shipping address, please click the link for more information.{" "}
              <a href="#" className="text-gray-400 underline">
                Learn More
              </a>
            </p>
            {/* Delivery Button */}
            <div className="mb-8">
              <button className="w-full border-2 px-6 py-5 mt-7 border-black hover:bg-gray-100 rounded-lg">
                <p className="font-semibold text-left">Deliver It</p>
              </button>
            </div>
            {/* Address Form */}
            <h3 className="text-lg font-semibold mb-4 text-left">
              Enter your name and address:
            </h3>
            <form className="space-y-4 ">
              <div className="mt-7 ">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-black font-bold"
                />
              </div>
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-black font-bold "
              />
              <input
                type="text"
                placeholder="Address Line 1"
                className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-black font-bold"
              />
              <input
                type="text"
                placeholder="Address Line 2"
                className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-black font-bold"
              />
              <input
                type="text"
                placeholder="Address Line 3"
                className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-black font-bold"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black font-bold"
                />
                <input
                  type="text"
                  placeholder="Locality"
                  className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black font-bold"
                />
                <input
                  type="text"
                  placeholder="State/Territory"
                  className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black font-bold"
                />
                <input
                  type="text"
                  placeholder="Locality"
                  className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black font-bold "
                />
              </div>
            </form>
            <div>
              {/* First Checkbox */}
              <div className="flex items-center mb-4">
                <input
                  id="saveAddress"
                  type="checkbox"
                  className="w-5 h-5 mt-5 text-gray-600 border-gray-300 rounded focus:ring-gray-500 focus:ring-2"
                />
                <p className="text-left font-semibold ml-3 mt-5">
                  Save this address to my profile
                </p>
              </div>
              {/* Second Checkbox */}
              <div className="flex items-center">
                <input
                  id="preferredAddress"
                  type="checkbox"
                  className="w-5 h-5  rounded focus:ring-gray-500 focus:ring-2"
                />
                <p className="text-left font-semibold ml-3 ">
                  Make this my preferred address
                </p>
              </div>
            </div>
            {/* What's your Contact Information? */}
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-4 mt-7">
                Whats your contact information?
              </h3>
            </div>
            <div className="space-y-4">
              <div>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="border border-gray-300 text-black rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-black font-bold"
                />
                <p className="text-sm text-black mt-1 text-left">
                  A confirmation email will be sent after checkout.
                </p>
              </div>
              <div>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone Number"
                  className="border border-gray-300 text-black rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-black font-bold"
                />
                <p className="text-sm text-black mt-1 text-left">
                  A carrier might contact you to confirm delivery.
                </p>
              </div>
            </div>
           

        

            {/* What's your PAN? */}
            <div className="text-left">
              <h3 className="text-2xl font-semibold mb-4 mt-8">Whats your PAN?</h3>
            </div>
            <div>
              <input
                type="text"
                id="pan"
                placeholder="PAN"
                className="border border-gray-300 text-black rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-black font-bold"
              />
              <p className="text-sm text-gray-400 mt-1 text-start">
                Enter your PAN to enable payment with UPI, Net Banking, or local card method
              </p>
            </div>

            {/* Save PAN */}
            <div className="flex items-center gap-3 mt-4">
              <input
                type="checkbox"
                id="save-pan"
                className="h-4 w-4 border-gray-400 rounded"
              />
              <label htmlFor="save-pan" className="text-gray-400 text-sm">
                Save PAN details to Nike Profile
              </label>
            </div>

            {/* Consent */}
            <div className="flex items-start gap-3 mt-12">
              <input
                type="checkbox"
                id="consent"
                className="h-5 w-5 border-gray-300 rounded focus:ring-black"
              />
              <label htmlFor="consent" className="text-gray-400 text-sm text-start">
                I have read and consent to eShopWorld processing my information in accordance with the{" "}
                <a href="#" className="text-gray-400 underline">
                  Privacy Statement
                </a>{" "}
                and{" "}
                <a href="#" className="text-gray-400 underline">
                  Cookie Policy
                </a>
                . eShopWorld is a trusted Nike partner.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gray-200 text-gray-500 py-3 rounded-full font-semibold hover:bg-gray-800 mt-16"
            >
              Continue
            </button>

            {/* Delivery, Shipping, Billing */}
            <div className="mt-9">
              <ul className="text-gray-400 space-y-4 text-left font-medium" style={{ paddingLeft: "1.5rem" }}>
                <li className="text-black font-semibold ">Delivery</li>
                <li className="text-grat-400">Shipping</li>
                <li className="">Billing</li>
                <li>Payment</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Right Section - Order Summary */}
        <div className="md:col-span-1 flex justify-end">
          <div className="w-full max-w-sm bg-white rounded shadow p-6">
            <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
            <div className="flex justify-between mb-4">
              <p className="text-gray-600">Subtotal</p>
              <p className="text-gray-800 font-semibold">₹ 20,890.00</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="text-gray-600">Delivery/Shipping</p>
              <p className="text-gray-800 font-semibold">Free</p>
            </div>
            <div className="border-t pt-4 flex justify-between">
              <p className="text-gray-800 font-semibold">Total</p>
              <p className="text-gray-800 font-semibold">₹ 20,890.00</p>
            </div>

            {/* Delivery Date */}
            <p className="text-gray-500 text-sm mt-4">Arrives Mon, 27 Mar - Wed, 12 Apr</p>

            {/* Product Details */}
            <div className="flex items-start mt-6">
           

<Image
                  src="/images/cart1.jpg"
                  alt="Nike Product"
                  width={80} // w-20 corresponds to 80px
                  height={80} // h-20 corresponds to 80px
                  className="w-20 h-20 object-cover mr-4"
                />

              <div>
                <p className="font-semibold text-gray-800">Nike Dri-FIT ADV TechKnit Ultra</p>
                <p className="text-gray-500 text-sm mt-1">Mens Short-Sleeve Running Top</p>
                <p className="text-gray-500 text-sm mt-1">Qty: 1</p>
                <p className="text-gray-500 text-sm mt-1">₹ 3,895.00</p>
              </div>
            </div>
            <div className="flex items-start mt-6">
            
              <Image
                  src="/images/nike3.png"
                  alt="Nike Product"
                  width={80} // w-20 corresponds to 80px
                  height={80} // h-20 corresponds to 80px
                  className="w-20 h-20 object-cover mr-4"
                />
              
              <div>
                <p className="font-semibold text-gray-800">Nike Air Max 97 SE</p>
                <p className="text-gray-500 text-sm mt-1">Mens Shoes</p>
                <p className="text-gray-500 text-sm mt-1">Qty: 1</p>
                <p className="text-gray-500 text-sm mt-1">₹ 16,995.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
