/* eslint-disable no-unused-vars */
// Import necessary FontAwesome icons
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons/faLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import React and router hooks
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Import custom CSS for header styles
import "./styles/Header.css";

// Functional component for the main body section
const Body = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  return (
    // Main container with responsive flex layout and styling
    <div className="body flex flex-col lg:flex-row justify-between items-center px-8 lg:px-20 py-16 mt-24 bg-white text-slate-800">
      {/* Left section: Text and actions */}
      <div className="w-full lg:w-1/2 space-y-8">
        {/* Main heading */}
        <div>
          <p className="text-orange-400 text-6xl font-extrabold leading-tight">Online</p>
          <p className="text-slate-700 text-6xl font-bold leading-tight">Shopping</p>
        </div>

        {/* Description paragraph */}
        <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
          Discover our vibrant online marketplace, where quality meets convenience. 
          Explore a curated selection of fashion, gadgets, and more – all at your fingertips. 
          Enjoy secure payments and fast shipping for a seamless shopping experience.
        </p>

        {/* Button to navigate to products page */}
        <button
          onClick={() => navigate("/products")}
          className="bg-orange-400 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-md hover:bg-orange-500 transition"
        >
          Start Shopping
        </button>

        {/* Logo and brand name */}
        <div className="flex items-center gap-4 mt-6">
          <img
            className="w-16 h-16 object-contain"
            src="https://cdn.icon-icons.com/icons2/3767/PNG/512/bag_shopping_icon_231414.png"
            alt="Shopping Bag"
          />
          <p className="text-3xl font-bold text-slate-700">ShoppyGlobe</p>
        </div>

        {/* Contact icons list */}
        <ul className="flex items-center gap-6 text-2xl mt-6">
          {/* Phone icon navigates to contact page */}
          <li
            className="hover:text-orange-400 cursor-pointer"
            onClick={() => navigate("/contact")}
          >
            <FontAwesomeIcon icon={faPhone} />
          </li>
          {/* Envelope icon navigates to email page */}
          <li
            className="hover:text-orange-400 cursor-pointer"
            onClick={() => navigate("/email")}
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </li>
          {/* Link icon navigates to links page */}
          <li
            className="hover:text-orange-400 cursor-pointer"
            onClick={() => navigate("/links")}
          >
            <FontAwesomeIcon icon={faLink} />
          </li>
        </ul>
      </div>

      {/* Right section: Main image */}
      <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
        <img
          src="https://traffictail.com/wp-content/uploads/2024/07/Role-of-Search-History-in-Enhancing-User-Experience-on-E-commerce-Platforms-1.webp"
          alt="Ecommerce Visual"
          className="w-[400px] h-[400px] rounded-full object-cover shadow-lg"
        />
      </div>
    </div>
  );
};

export default Body;
