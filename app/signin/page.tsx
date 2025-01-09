"use client";

import React from "react";
import Image from "next/image";

const LoginForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        {/* Logo Section */}
        <Image
          src="/images/logonike.jpg"
          alt="Nike Product"
          width={90}
          height={90}
          className="mx-auto"
        />
        <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          YOUR ACCOUNT FOR <br /> EVERYTHING <br /> NIKE
        </h2>

        {/* Form Section */}
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >

            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >

            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-sm text-gray-400">
              <input type="checkbox" className="mr-2" />
              Keep me signed in
            </label>
            <a href="#" className="text-sm text-gray-400 hover:underline">
              Forgot your password?
            </a>
          </div>
          <p className="text-gray-400 text-sm text-center mt-6">
            By logging in, you agree to Nikes Privacy Policy <br />
            and Terms of Use
          </p>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-black text-white rounded-md hover:bg-gray-400 transition duration-200 mt-6"
          >
            SIGN IN
          </button>
        </form>
        <p className="text-sm text-center text-gray-500 mt-4">
          Not a Member?{" "}
          <a href="#" className="text-black hover:underline">
            Join Us
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
