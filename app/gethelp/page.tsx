


import React from "react";
import { FaMobileAlt, FaCommentDots, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

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
            className="w-80 max-w-lg mx-auto px-2 py-2 border border-gray-300 rounded-md "
          />

        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="font-bold text-xl mb-4  ">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ODERS?</h2>
          <p className="text-gray-700 text-sm mb-4 mt-6">
            We want to make buying your favorite Nike shoes and gear online fast and easy, and we accept the following payment options:
          </p>
          <ul className="list-disc list-inside mb-4 text-sm text-gray-700 mt-6">
            <li className="mt-3">Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
            <li className="mt-3">Apple Pay</li>
            <li className="mt-3">PayTM or a local credit or debit card</li>
          </ul>
          <h1 className="font-bold mt-7">Nike Member</h1>
          <p className="text-gray-700 mb-4">
            can store multiple debit or credit cards in their profile for faster checkout. If you're not already a Member, join us today.
          </p>
          <div className="flex gap-4 mb-8">
            <button className="bg-black  text-white px-6 py-3 rounded-full bg-black-500 shadow-lg shadow-cyan-500/50">
              Join Us
            </button>
            <button className="bg-black  text-white px-6 py-3 rounded-full bg-black-500 shadow-lg shadow-cyan-500/50">
              Shop Nike
            </button>
          </div>
          {/* FAQs */}

          <div>
            <h2 className="text-2xl font-bold mb-6 ">FAQs</h2>
            <div className="space-y-4">
              {/* FAQ 1 */}
              <div>
                <p className="font-semibold text-gray-800">
                  Does my card need international purchases enabled?
                </p>
                <p className="text-gray-700 text-sm mt-3">
                  Yes, we recommend asking your bank to enable international purchases on your card.<br></br> You will be notified at checkout if international purchases need to be enabled.
                </p>
                <br></br>
                <p className="text-gray-700 text-sm">
                  Please note, some banks may charge a small transaction fee for international orders.
                </p>
              </div>

              {/* FAQ 2 */}
              <div>
                <p className="font-semibold text-gray-800">
                  Can I pay for my order with multiple methods?
                </p>
                <p className="text-gray-700 text-sm">
                  No, payment for Nike orders can’t be split between multiple payment methods.
                </p>
              </div>

              {/* FAQ 3 */}
              <div>
                <p className="font-semibold text-gray-800 mt-7" >
                  What payment method is accepted for SNKRS orders?
                </p>
                <p className="text-gray-700 text-sm">
                  You can use any accepted credit card to pay for your SNKRS order.
                </p>
              </div>

              {/* FAQ 4 */}
              <div>
                <p className="font-semibold text-gray-800 mt-7">
                  Why don’t I see Apple Pay as an option?
                </p>
                <p className="text-gray-700 text-sm">
                  To see Apple Pay as an option in the Nike App or on Nike.com, you’ll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account, and have a supported card in your Wallet. Additionally, you’ll need to use Safari to use Apple Pay on Nike.com.
                </p>
              </div>
            </div>

            {/* "Was this helpful?" Section */}
            <div>
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
                    WHAT ARE NIKE'S DELIVERY OPTIONS?
                  </li>
                  <li className="text-black underline font-bold cursor-pointer hover:text-blue-700">
                    HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Right Section: Contact Information */}
        <div>
          <h2 className="text-center text-xl font-bold mb-8">CONTACT US</h2>
          <div className="flex flex-col items-center space-y-8">
            {/* Mobile Icon */}
            <div className="text-center">
              <FaMobileAlt className="mx-auto text-5xl mb-2" />
              <p className="font-semibold">000 800 919 0566</p>
              <p>Products & Orders: 24 hours a day,<br></br> 7 days a week</p>
              <p>Company Info & Enquiries: 07:30 - 16:30, <br></br> Monday - Friday</p>
            </div>

            {/* Chat */}
            <div className="text-center">
              <FaCommentDots className="mx-auto text-5xl mb-2 mt-7" />
              <p className="font-bold mt-5">24 hours a day</p>
              <p>7 days a week</p>
            </div>

            {/* Email */}
            <div className="text-center">
              <FaEnvelope className="mx-auto text-5xl mb-2 mt-7" />
              <p className="font-bold mt-5">We’ll reply within</p>
              <p>five business days</p>
            </div>

            {/* Store Locator */}
            <div className="text-center">
              <FaMapMarkerAlt className="mx-auto text-5xl mb-2 mt-7" />
              <p className="font-bold mt-5">STORE LOCATOR</p>
              <p>Find Nike retail stores near you</p>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
};

export default HelpSectionWithContact;
