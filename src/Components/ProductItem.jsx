/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './styles/ProductList.css';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AddCartItem } from '../utilities/productSlice';

const ProductItem = ({ item }) => {
  const dispatch = useDispatch(); // Get the Redux dispatch function
  const [imageError, setImageError] = useState(false); // State to handle image loading errors

  // Handler to dispatch an action to add the item to the cart
  const handleAddToCart = () => {
    dispatch(AddCartItem(item));
  };

  // Fallback image in case of error
  const handleImageError = () => {
    setImageError(true); // If image fails, set fallback
  };

  return (
    // Card container for the product item with enhanced hover effect
    <div className='product-card relative border-2 bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-200 hover:scale-105 hover:shadow-xl'>
      <div className='product-image-container'>
        {/* Product image with error handling */}
        <img
          src={imageError ? '/path/to/fallback-image.jpg' : item.images[0]} // Fallback image
          onError={handleImageError} // Trigger fallback on error
          className='w-full h-44 object-cover rounded-md transform transition-transform duration-300 hover:scale-110'
          alt={`${item.title} - Product Image`} // More descriptive alt text
        />
      </div>

      <div className='product-details p-4'>
        {/* Product title */}
        <h3 className='text-center text-slate-700 text-xl font-semibold mt-2 hover:text-orange-500'>{item.title}</h3>
        
        {/* Product rating */}
        <p className='text-center text-lg text-yellow-500'>{item.rating} ⭐</p>

        {/* Product description, truncated to 3 lines */}
        <p className='text-center text-slate-600 text-sm mt-2 line-clamp-3'>{item.description}</p>
      </div>

      {/* Price and action buttons */}
      <div className='flex justify-between items-center p-4 border-t'>
        {/* Product price */}
        <p className='text-2xl text-orange-600 font-semibold'>${item.price}</p>
        <div className='flex gap-4'>
          {/* Add to Cart button */}
          <button
            onClick={handleAddToCart}
            className='px-4 py-2 bg-green-500 text-white rounded-xl font-bold shadow-md transition-all duration-300 transform hover:bg-green-600 hover:scale-105'>
            Add to Cart
          </button>
          
          {/* Details button navigates to product details page */}
          <NavLink to={`/product/${item.id}`}>
            <button className='px-4 py-2 bg-orange-400 text-white rounded-xl font-bold shadow-md transition-all duration-300 transform hover:bg-orange-500 hover:scale-105'>
              Details
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
