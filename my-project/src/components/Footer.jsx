import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#efe9d3] py-10">
      <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-start">

 {/* Left Section */}
        <div className="w-1/3">
          <h1 className="text-3xl text-[#de6536]">FEMMEFIT</h1>
          <p className="text-base text-gray-700">Since 2023</p>
          <ul className="mt-4">
            <li><a href="#" className="text-gray-700 hover:text-[#de6536]">Instagram</a></li>
            <li><a href="#" className="text-gray-700 hover:text-[#de6536]">Twitter</a></li>
            <li><a href="#" className="text-gray-700 hover:text-[#de6536]">Pinterest</a></li>
          </ul>
        </div>


 {/* Middle Section */}
        <div className="w-1/3">
          <h3 className="text-xl text-[#de6536]">Navigation</h3>
          <ul className="mt-4">
            <li><a href="#" className="text-gray-700 hover:text-[#de6536]">About</a></li>
            <li><a href="#" className="text-gray-700 hover:text-[#de6536]">Company</a></li>
            <li><a href="#" className="text-gray-700 hover:text-[#de6536]">Collection</a></li>
            <li><a href="#" className="text-gray-700 hover:text-[#de6536]">Blog</a></li>
          </ul>
        </div>


 {/* Right Section */}
        <div className="w-1/3">
          <h3 className="text-xl text-[#de6536]">Navigation</h3>
          <ul className="mt-4">
            <li><a href="#" className="text-gray-700 hover:text-[#de6536]">Help</a></li>
            <li><a href="#" className="text-gray-700 hover:text-[#de6536]">Customer</a></li>
            <li><a href="#" className="text-gray-700 hover:text-[#de6536]">Contact</a></li>
          </ul>
        </div>


{/* Newsletter Section */}
        <div className="w-1/3 mt-6 lg:mt-0">
          <h3 className="text-xl text-gray-700">Subscribe to our newsletter</h3>
          <div className="flex mt-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="p-2 w-3/4 border border-gray-300 rounded-md"
            />
            <button className="ml-2 p-2 bg-[#de6536] text-white rounded-md hover:bg-[#b74e2a]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
    
  );
}

export default Footer;
