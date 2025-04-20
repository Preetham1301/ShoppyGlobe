/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import "./styles/ProductList.css"
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AddCartItem } from '../utilities/productSlice'

// ProductItem component receives a single product item as a prop
const ProductItem = ({ item }) => {
  const dispatch = useDispatch(); // Get the Redux dispatch function

  // Handler to dispatch an action to add the item to the cart
  const handleAddToCart = () => {
    dispatch(AddCartItem(item));
  };

  return (
    // Card container for the product item
    <div className='border-2 px-6 py-4 rounded-lg shadow-sm shadow-black hover:scale-95 transition-all duration-200 bg-white flex flex-col justify-between'>
      <div>
        {/* Product image */}
        <img
          src={item.images[0]}
          className='w-full h-44 object-cover rounded-md'
          alt={item.title}
        />
        {/* Product title */}
        <h3 className='text-center text-slate-700 text-xl font-bold mt-2'>{item.title}</h3>
        {/* Product rating */}
        <p className='text-center text-lg text-yellow-500'>{item.rating} ⭐</p>
        {/* Product description, truncated to 3 lines */}
        <p className='text-center text-slate-600 line-clamp-3'>{item.description}</p>
      </div>

      {/* Price and action buttons */}
      <div className='flex justify-between items-center mt-4'>
        {/* Product price */}
        <p className='text-2xl text-yellow-600 font-bold'>${item.price}</p>
        <div className='flex gap-3'>
          {/* Add to Cart button */}
          <button
            onClick={handleAddToCart}
            className='border-none rounded-xl px-4 py-2 bg-green-500 font-bold text-white hover:bg-green-600 shadow-md transition-all duration-200'
          >
            Add to Cart
          </button>
          {/* Details button navigates to product details page */}
          <NavLink to={`/product/${item.id}`}>
            <button className='border-none rounded-xl px-4 py-2 bg-orange-400 font-bold hover:text-white hover:bg-orange-500 shadow-md transition-all duration-200'>
              Details
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProductItem
