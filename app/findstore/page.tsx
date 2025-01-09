"use client";

import { useState } from "react";

const stores = [
  {
    name: "Nike NYC - House of Innovation 000",
    address: "650 5th Ave, ",
    status: "Closed",
    opensAt: "11:00 AM",
  },
  {
    name: "Nike By Upper East Side",
    address: "1131 3rd Ave,",
    status: "Closed",
    opensAt: "11:00 AM",
  },
  {
    name: "Nike By Flatiron",
    address: "156 5th Ave,",
    status: "Closed",
    opensAt: "11:00 AM",
  },
];

export default function FindStorePage() {
  const [query, setQuery] = useState("");

  const filteredStores = stores.filter((store) =>
    store.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 p-6  overflow-y-auto border-r border-gray-300">
        <h1 className="text-2xl font-bold mb-6 text-black">Find a Nike Store</h1>
        <input
          type="text"
          placeholder="Search Location"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-6"
        />
        <p className="text-sm">3 stores near you</p>
        <hr></hr>
        <ul>
          {filteredStores.map((store, index) => (
            <li
              key={index}
              className="mb-6 pb-4 border-b border-gray-200 last:border-none"
            >
              <h2 className="font-semibold text-lg text-sm text-gray-900 mt-7">{store.name}</h2>
              <p className="text-sm text-gray-600 mt-1 ">{store.address}</p>
              <p className="text-sm text-gray-600 mt-1">New York, NY, 10065, US</p>
              <p className="text-sm text-red-500 mt-1">
                Closed
                <span className="relative text-gray-600">
                  • Opens at 11:00 am
                  <span className=" bg-black"></span>
                </span>
              </p>
            </li>
          ))}
        </ul>
        <button className="text-black-600 hover:underline mt-6 font-bold">
          View all stores
        </button>
      </div>

      {/* Map Section */}
      <div className="w-full lg:w-3/4 h-[50vh] lg:h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24176.703417313783!2d-73.989643!3d40.758895!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18e2bc2d%3A0xdd4e88b167c36879!2sNike%20NYC%20-%20House%20of%20Innovation!5e0!3m2!1sen!2sus!4v1675390569957!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
  );
}






















