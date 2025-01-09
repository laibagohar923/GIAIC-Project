"use client";

import React from "react";
import Image from "next/image";

const RegisterForm: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg border border-gray-200">
        <div className="text-center mb-8">
       

          <Image
            src="/images/logonike.jpg"
            alt="Nike Product"
            width={90} 
            height={90} 
            className="mx-auto w-17"
          />
          <h1 className="text-2xl font-bold mt-4 text-black">BECOME A NIKE MEMBER</h1>
          <p className=" text-sm text-gray-400 mb-8 mt-6 text-balance">
            Create your Nike Member profile and get first <br></br> access to the very best of Nike products, inspiration <br></br> and community.
          </p>
        </div>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
          <input
            type="date"
            placeholder="Date of Birth"
            className="w-full px-4 py-2 border text-gray-400 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />

          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 text-gray-400 focus:ring-black focus:border-transparent"
          >
            <option value="India">India</option>
            {/* Add other countries as needed */}
          </select>

          <div className="flex items-center justify-between">
            <label className="flex items-center text-gray-400">
              <input
                type="radio"
                name="gender"
                value="Male"
                className="mr-2"
              />
              Male
            </label>
            <label className="flex items-center text-gray-400">
              <input
                type="radio"
                name="gender"
                value="Female"
                className="mr-2"
              />
              Female
            </label>
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              className="mr-2"
            />
            <p className="text-sm ml-2 text-gray-400">
              Sign up for emails to get updates from Nike on <br></br>products, offers,
              and Member benefits.
            </p>
          </div>

          <p className="text-xs mt-2 text-center  text-gray-400 ">
            By creating an account, you agree to <br></br>{" "}
            <a href="#" className="text-gray-400 underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-gray-400 underline">
              Terms of Use
            </a>
            .
          </p>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-black text-white font-bold rounded-md hover:bg-gray-800"
          >
            JOIN US
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already a Member?{" "}
          <a href="#" className="text-black font-bold underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
