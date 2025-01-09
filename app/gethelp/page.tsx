"use client";

import React from "react";
import { FaMobileAlt, FaCommentDots, FaEnvelope, FaMapMarkerAlt, FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const HelpSectionWithContact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 md:p-12 bg-white">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">GET HELP</h1>
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="What can we help you with?"
            className="w-80 max-w-lg mx-auto px-2 py-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="font-bold text-xl mb-4">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h2>
          <p className=" text-sm mb-4">
            we went to make buyingyour favorite Nike shoesand gear online fast and easy and we accept the following payments options
          </p>
          <ul className="list-disc list-inside mb-4 text-sm ">
            <li>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
            <li>Apple Pay</li>
            <li>PayTM or a local credit or debit card</li>
          </ul>
          <h1 className="font-bold mt-7 ">Nike Member</h1>
          <p className="mb-4 text-sm">
            can store multiple debit or cradit cardin their profile for faster checkout, if your not allowed alreadya member joinus today
          </p>
          <div className="flex gap-4 mb-8">
            <button className="bg-black text-white px-6 py-3 rounded-full shadow-lg">
              Join Us
            </button>
            <button className="bg-black text-white px-6 py-3 rounded-full shadow-lg">
              Shop Nike
            </button>
          </div>

          {/* FAQs */}
          <div>
            <h2 className="text-2xl font-bold mb-6">FAQs</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Does my card need international purchases enabled?
                </p>
                <p className=" text-sm mt-3">
                  Yes, we recommend enabling international purchases on your card.
                  yes you will be notified at checkouta small transaction purshase need to be enabled
                </p>
                <p className=" text-sm mt-6"> please note, some banks may charge a small transtion fees for international order</p>
              </div>
              <div>
                <p className="font-semibold mt-6">Can I pay for my order with multiple methods?</p>
                <p className=" text-sm">No, payment for Nike orders can’t be split between multiple methods.</p>
              </div>
              <div>
                <p className="font-semibold mt-6">What payment method is accepted for SNKRS orders?</p>
                <p className="text-sm">You can use any accepted credit card to pay for your SNKRS order.</p>
              </div>
              <div>
                <p className="font-semibold mt-6">Why dont I see Apple Pay as an option?</p>
                <p className="text-sm">To see Apple Pay as an option in the Nike App or on Nike.com, youll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, youll need to use Safari to use Apple Pay on Nike.com.</p>
              </div>

            </div>

            {/* "Was this helpful?" Section */}
            <div className="mb-4 mt-6">
              <p className="text-sm font-semibold">Was this answer helpful?</p>
              <div className="flex space-x-4 mt-2">
                <FaThumbsUp className="text-lg cursor-pointer hover:text-blue-500" />
                <FaThumbsDown className="text-lg cursor-pointer hover:text-red-500" />
              </div>
            </div>
            {/* Related Links */}
            <div className="mt-4">
              <p className="text-sm font-bold mb-2 text-gray-500">RELATED</p>
              <ul className="space-y-1">
                <li className="text-black font-bold underline cursor-pointer hover:text-blue-700">
                  WHAT ARE NIKES DELIVERY OPTIONS?
                </li>
                <li className="text-black underline font-bold cursor-pointer hover:text-blue-700">
                  HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-center text-xl font-bold mb-8">CONTACT US</h2>
          <div className="flex flex-col items-center space-y-8">
            <div className="text-center">
              <FaMobileAlt className="mx-auto text-5xl mb-2" />
              <p className="font-semibold">000 800 919 0566</p>
              <p className="font-bold">Products & Orders: 24 hours a day, <br></br> 7 days a week <br></br>
                Company Info & Enquiries:<br></br> 07:30 - 16:30, Monday - Friday</p>

            </div>
            <div className="text-center">
              <FaCommentDots className="mx-auto text-5xl mb-2 mt-7" />
              <p className="font-bold mt-5">24 hours a day</p>
              <p className="font-bold">7 days a week</p>
            </div>
            <div className="text-center">
              <FaEnvelope className="mx-auto text-5xl mb-2 mt-7" />
              <p className="font-bold mt-5">We’ll reply within <br></br>five business days</p>
            </div>
            <div className="text-center">
              <FaMapMarkerAlt className="mx-auto text-5xl mb-2 mt-7" />
              <p className="font-bold mt-5">STORE LOCATOR</p>
              <p className="font-bold">Find Nike retail stores near you</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSectionWithContact;
