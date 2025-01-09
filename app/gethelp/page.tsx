"use client";
import React from "react";
import {
  FaMobileAlt,
  FaCommentDots,
  FaEnvelope,
  FaMapMarkerAlt,
  FaThumbsUp,
  FaThumbsDown,
} from "react-icons/fa";

const HelpSectionWithContact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 md:p-12 bg-white text-gray-800">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">GET HELP</h1>
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="What can we help you with?"
            className="w-full max-w-lg px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-400"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="font-bold text-xl mb-4">
            WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
          </h2>
          <p className="text-sm mb-4">
            We want to make buying your favorite Nike shoes and gear online fast
            and easy. We accept the following payment options:
          </p>
          <ul className="list-disc list-inside mb-4 text-sm">
            <li>Visa, Mastercard, Diners Club, Discover, American Express</li>
            <li>Apple Pay</li>
            <li>PayTM or a local credit or debit card</li>
          </ul>
          <h1 className="font-bold mt-7">Nike Member</h1>
          <p className="mb-4 text-sm">
            Nike Members can store multiple debit or credit cards in their
            profile for faster checkout. If youre not already a member, join
            us today.
          </p>
          <div className="flex gap-4 mb-8">
            <button className="bg-black text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-800">
              Join Us
            </button>
            <button className="bg-black text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-800">
              Shop Nike
            </button>
          </div>

          {/* FAQs */}
          <div>
            <h2 className="text-2xl font-bold mb-6">FAQs</h2>
            <div className="space-y-6">
              <div>
                <p className="font-semibold">
                  Does my card need international purchases enabled?
                </p>
                <p className="text-sm mt-2">
                  Yes, we recommend enabling international purchases on your
                  card.
                </p>
                <p className="text-sm mt-2">
                  Please note, some banks may charge a small transaction fee for
                  international orders.
                </p>
              </div>
              <div>
                <p className="font-semibold">
                  Can I pay for my order with multiple methods?
                </p>
                <p className="text-sm mt-2">
                  No, payment for Nike orders can’t be split between multiple
                  methods.
                </p>
              </div>
              <div>
                <p className="font-semibold">
                  What payment method is accepted for SNKRS orders?
                </p>
                <p className="text-sm mt-2">
                  You can use any accepted credit card to pay for your SNKRS
                  order.
                </p>
              </div>
              <div>
                <p className="font-semibold">Why don’t I see Apple Pay?</p>
                <p className="text-sm mt-2">
                  To see Apple Pay as an option in the Nike App or on Nike.com,
                  you’ll need to use a compatible Apple device running the
                  latest OS.
                </p>
              </div>
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

            {/* "Was this helpful?" Section */}
            <div className="mb-4 mt-6">
              <p className="text-sm font-semibold">Was this answer helpful?</p>
              <div className="flex space-x-4 mt-2">
                <FaThumbsUp className="text-lg cursor-pointer hover:text-blue-500" />
                <FaThumbsDown className="text-lg cursor-pointer hover:text-red-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-center text-xl font-bold mb-8">CONTACT US</h2>
          <div className="flex flex-col items-center space-y-8">
            <div className="text-center">
              <FaMobileAlt className="mx-auto text-6xl mb-2 text-black" />
              <p className="font-semibold">000 800 919 0566</p>
              <p className="text-sm">
                Products & Orders: 24/7 <br />
                Company Info: Mon-Fri, 07:30 - 16:30
              </p>
            </div>
            <div className="text-center">
              <FaCommentDots className="mx-auto text-6xl mb-2 text-black" />
              <p className="font-semibold">24 hours a day</p>
              <p className="text-sm">7 days a week</p>
            </div>
            <div className="text-center">
              <FaEnvelope className="mx-auto text-6xl mb-2 text-black" />
              <p className="font-semibold">We’ll reply within</p>
              <p className="text-sm text-black">five business days</p>
            </div>
            <div className="text-center">
              <FaMapMarkerAlt className="mx-auto text-6xl mb-2 text-black" />
              <p className="font-semibold">STORE LOCATOR</p>
              <p className="text-sm text-black">Find Nike retail stores near you</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSectionWithContact;
