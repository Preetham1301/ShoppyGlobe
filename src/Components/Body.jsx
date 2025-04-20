/* eslint-disable no-unused-vars */
// Import FontAwesome icons for use in buttons
import { faEnvelope, faPhone, faLink } from '@fortawesome/free-solid-svg-icons';
// Import FontAwesomeIcon component to render icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import React library
import React from 'react';
// Import useNavigate hook for navigation
import { useNavigate } from 'react-router-dom';
// Import custom CSS for header styles
import './styles/Header.css';

// Define the Body component
const Body = () => {
  // Initialize navigation function from react-router
  const navigate = useNavigate();

  return (
    // Main container with responsive flex layout and styling
    <div className="body flex flex-col lg:flex-row justify-between items-center px-6 lg:px-20 py-16 mt-24 bg-white text-slate-800 gap-12">
      
      {/* LEFT: Text Content */}
      <div className="w-full lg:w-1/2 space-y-8">
        {/* Gradient Heading */}
        <div>
          {/* Main heading with gradient text */}
          <h1 className="text-6xl font-extrabold leading-tight bg-gradient-to-r from-orange-400 to-slate-700 bg-clip-text text-transparent">
            Online Shopping
          </h1>
        </div>

        {/* Description */}
        {/* Short description about the platform */}
        <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
          Discover a world of endless choices—shop the latest trends, must-have gadgets, and everyday essentials, all with seamless checkout and lightning-fast delivery. Your ultimate shopping destination, just a click away.
        </p>

        {/* Call to Action */}
        {/* Button to navigate to products page */}
        <button
          // On click, navigate to the "/products" route
          onClick={() => navigate("/products")}
          className="bg-orange-400 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-md hover:bg-orange-500 hover:scale-105 transition-all duration-200"
        >
          🛍️ Start Shopping
        </button>

        {/* Brand */}
        {/* Brand logo and name */}
        <div className="flex items-center gap-4 mt-6">
          <img
            // Brand logo image
            className="w-16 h-16 object-contain animate-bounce"
            src="https://cdn.icon-icons.com/icons2/3767/PNG/512/bag_shopping_icon_231414.png"
            alt="Shopping Bag"
          />
          {/* Brand name */}
          <p className="text-3xl font-bold text-slate-700">ShoppyGlobe</p>
        </div>

        {/* Icons */}
        {/* Navigation icons for contact, email, and links */}
        <div className="flex items-center gap-6 text-2xl mt-6">
          {[
            // Array of icon and path objects for navigation
            { icon: faPhone, path: "/contact" },
            { icon: faEnvelope, path: "/email" },
            { icon: faLink, path: "/links" }
          ].map(({ icon, path }, index) => (
            // Button for each icon, navigates to respective path
            <button
              key={index}
              // On click, navigate to the specified path
              onClick={() => navigate(path)}
              className="hover:text-orange-400 hover:scale-110 transition-all duration-200"
              aria-label={`Navigate to ${path}`}
            >
              {/* Render the FontAwesome icon */}
              <FontAwesomeIcon icon={icon} />
            </button>
          ))}
        </div>
      </div>

      {/* RIGHT: Hero Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          // Hero image for the landing section
          src="https://ebz-static.s3.ap-south-1.amazonaws.com/easebuzz-static/upi-credit-cards-v1.png"
          alt="Ecommerce Visual"
          className="w-[320px] md:w-[400px] h-[320px] md:h-[400px] rounded-full object-cover shadow-lg hover:scale-105 transition-all duration-300"
        />
      </div>
    </div>
  );
};

// Export the Body component as default
export default Body;
