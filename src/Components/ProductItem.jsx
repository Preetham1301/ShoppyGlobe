/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AddCartItem } from '../utilities/productSlice';

// Fallback image in case the product image fails to load
const fallbackImg = "https://via.placeholder.com/300x200?text=Image+Not+Available";

const ProductItem = ({ item }) => {
  const dispatch = useDispatch(); // Access the Redux dispatch function
  const [imageError, setImageError] = useState(false); // State for image load error handling

  // Dispatch action to add item to cart
  const handleAddToCart = () => {
    dispatch(AddCartItem(item));
  };

  return (
    // Card container for individual product
    <div className="product-card relative bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 hover:scale-[1.02] flex flex-col justify-between">
      
      {/* Optional badge, could represent "New", "Sale", etc. */}
      <span className="absolute top-3 left-3 bg-orange-400 text-white text-xs font-bold px-2 py-1 rounded shadow-sm z-10">
        {item.category || "New"}
      </span>

      {/* Clickable image linking to product details page */}
      <NavLink to={`/product/${item.id}`} className="relative overflow-hidden rounded-t-2xl h-48 block">
        <img
          src={imageError ? fallbackImg : item.images[0]} // Load fallback if image fails
          onError={() => setImageError(true)} // Handle image error
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" // Smooth zoom on hover
        />
        {/* Optional dark overlay on hover for style */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </NavLink>

      {/* Product info section: title, rating, description */}
      <div className="flex-grow px-4 py-3 flex flex-col justify-between gap-2">
        {/* Product title */}
        <h3 className="text-lg font-semibold text-center text-gray-800 hover:text-orange-500 transition-colors duration-200">
          {item.title}
        </h3>

        {/* Rating with star emoji */}
        <p className="text-center text-yellow-500 text-base">{item.rating} ⭐</p>

        {/* Truncated description */}
        <p className="text-center text-gray-600 text-sm line-clamp-3">
          {item.description}
        </p>
      </div>

      {/* Footer section with price and action buttons */}
      <div className="px-4 pt-2 pb-4 border-t mt-auto flex flex-col gap-3">
        {/* Product price */}
        <div className="text-center text-xl font-bold text-orange-600">${item.price}</div>

        {/* Buttons: Add to Cart and Details */}
        <div className="flex justify-center gap-3">
          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-all duration-300 hover:scale-105"
          >
            Add to Cart
          </button>

          {/* Details button — in case user prefers clicking a button instead of the image */}
          <NavLink to={`/product/${item.id}`}>
            <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-all duration-300 hover:scale-105">
              Details
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;