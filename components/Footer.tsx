import React from "react";

const Footer = () => {
  return (


    <footer className="bg-black text-white">
  <div className="container mx-auto px-6 py-10 md:py-12">
  
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
 
      <div>
        <h3 className="text-lg font-semibold mb-4">Get Help</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:underline">Order Status</a></li>
          <li><a href="#" className="hover:underline">Delivery</a></li>
          <li><a href="#" className="hover:underline">Returns</a></li>
          <li><a href="#" className="hover:underline">Payment Options</a></li>
          <li><a href="#" className="hover:underline">Contact Us</a></li>
        </ul>
      </div>
 
      <div>
        <h3 className="text-lg font-semibold mb-4">About Nike</h3>
        <ul className ="space-y-2">
          <li><a href="#" className="hover:underline">News</a></li>
          <li><a href="#" className="hover:underline">Careers</a></li>
          <li><a href="#" className="hover:underline">Investors</a></li>
          <li><a href="#" className="hover:underline">Sustainability</a></li>
        </ul>
      </div>
  
      <div>
        <h3 className="text-lg font-semibold mb-4">Become a Member</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:underline">Sign Up for Email</a></li>
          <li><a href="#" className="hover:underline">Send Us Feedback</a></li>
          <li><a href="#" className="hover:underline">Student Discounts</a></li>
        </ul>
      </div>
   
      <div>
        <h3 className="text-lg font-semibold mb-4">Find a Store</h3>
        <p>India</p>
      </div>
    </div>

    <div className="mt-10 border-t border-gray-600 pt-6 text-center md:text-left">
      <p>&copy; 2023 Nike, Inc. All Rights Reserved.</p>
    </div>
  </div>
</footer>

  );
};

export default Footer;
