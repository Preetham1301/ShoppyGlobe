/* eslint-disable no-unused-vars */
import { faEnvelope, faPhone, faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Header.css';

const Body = () => {
  const navigate = useNavigate();

  return (
    <div className="body flex flex-col lg:flex-row justify-between items-center px-6 lg:px-20 py-16 mt-24 bg-white text-slate-800 gap-12">
      
      {/* LEFT: Text Content */}
      <div className="w-full lg:w-1/2 space-y-8">
        {/* Gradient Heading */}
        <div>
          <h1 className="text-6xl font-extrabold leading-tight bg-gradient-to-r from-orange-400 to-slate-700 bg-clip-text text-transparent">
            Online Shopping
          </h1>
        </div>

        {/* Description */}
        <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
          Dive into a vibrant digital bazaar where fashion, tech, and essentials meet fast shipping and secure payments. All-in-one shopping, one click away.
        </p>

        {/* Call to Action */}
        <button
          onClick={() => navigate("/products")}
          className="bg-orange-400 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-md hover:bg-orange-500 hover:scale-105 transition-all duration-200"
        >
          🛍️ Start Shopping
        </button>

        {/* Brand */}
        <div className="flex items-center gap-4 mt-6">
          <img
            className="w-16 h-16 object-contain animate-bounce"
            src="https://cdn.icon-icons.com/icons2/3767/PNG/512/bag_shopping_icon_231414.png"
            alt="Shopping Bag"
          />
          <p className="text-3xl font-bold text-slate-700">ShoppyGlobe</p>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6 text-2xl mt-6">
          {[
            { icon: faPhone, path: "/contact" },
            { icon: faEnvelope, path: "/email" },
            { icon: faLink, path: "/links" }
          ].map(({ icon, path }, index) => (
            <button
              key={index}
              onClick={() => navigate(path)}
              className="hover:text-orange-400 hover:scale-110 transition-all duration-200"
              aria-label={`Navigate to ${path}`}
            >
              <FontAwesomeIcon icon={icon} />
            </button>
          ))}
        </div>
      </div>

      {/* RIGHT: Hero Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="https://traffictail.com/wp-content/uploads/2024/07/Role-of-Search-History-in-Enhancing-User-Experience-on-E-commerce-Platforms-1.webp"
          alt="Ecommerce Visual"
          className="w-[320px] md:w-[400px] h-[320px] md:h-[400px] rounded-full object-cover shadow-lg hover:scale-105 transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default Body;
