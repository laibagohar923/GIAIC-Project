








// components/GetHelp.tsx
import React from "react";

const GetHelp: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 md:p-12 bg-white">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">GET HELP</h1>
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="What can we help you with?"
            className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button className="absolute right-2 top-2 text-gray-500 hover:text-black">
            🔍
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="font-bold text-xl mb-4">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ODERS?</h2>
          <p className="text-gray-700 text-sm mb-4">
            We want to make buying your favorite Nike shoes and gear online fast and easy, and we accept the following payment options:
          </p>
          <ul className="list-disc list-inside mb-4 text-sm text-gray-700">
            <li>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
            <li>Apple Pay</li>
            <li>PayTM or a local credit or debit card</li>
          </ul>
          <h1 className="font-bold">Nike Member</h1>
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

          <div className="max-w-4xl mx-auto px-6 md:px-12 py-8 ">
            <h2 className="text-2xl font-bold mb-6">FAQs</h2>
            <div className="space-y-4">
              {/* FAQ 1 */}
              <div>
                <p className="font-semibold text-gray-800">
                  Does my card need international purchases enabled?
                </p>
                <p className="text-gray-700 text-sm">
                  Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.
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
                <p className="font-semibold text-gray-800">
                  What payment method is accepted for SNKRS orders?
                </p>
                <p className="text-gray-700 text-sm">
                  You can use any accepted credit card to pay for your SNKRS order.
                </p>
              </div>

              {/* FAQ 4 */}
              <div>
                <p className="font-semibold text-gray-800">
                  Why don’t I see Apple Pay as an option?
                </p>
                <p className="text-gray-700 text-sm">
                  To see Apple Pay as an option in the Nike App or on Nike.com, you’ll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account, and have a supported card in your Wallet. Additionally, you’ll need to use Safari to use Apple Pay on Nike.com.
                </p>
              </div>
            </div>

            {/* "Was this helpful?" Section */}
            <div className="mt-8 border-t pt-6">
              <p className="text-gray-800 font-semibold mb-4">Was this answer helpful?</p>
              <div className="flex items-center gap-4">
                <button className="text-gray-600 hover:text-black flex items-center gap-2">
                  👍 <span>Yes</span>
                </button>
                <button className="text-gray-600 hover:text-black flex items-center gap-2">
                  👎 <span>No</span>
                </button>
              </div>
            </div>

            {/* Related Links */}
            <div className="mt-8">
              <h3 className="text-lg text-gray-400 font-semibold mb-4">RELATED</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-black hover:underline"
                  >
                    WHAT ARE NIKE’S DELIVERY OPTIONS?
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black hover:underline"
                  >
                    HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetHelp;
