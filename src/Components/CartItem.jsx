/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { AddCartItem } from '../utilities/productSlice';

const ProductDetails = () => {
  // Fetch the complete product list from Redux store
  const Products = useSelector((state) => state.Products.fullItems);

  // Extract product ID from route params
  const { id } = useParams();

  // Find the product that matches the ID
  const product = Products.find((item) => item.id === Number(id));

  // Redux dispatch function
  const dispatch = useDispatch();

  // Router navigation function
  const navigate = useNavigate();

  // Add current product to the cart
  const handleAddItem = (item) => {
    dispatch(AddCartItem(item));
  };

  // Display fallback if product not found
  if (!product) {
    return (
      <div className='flex justify-center items-center h-screen text-3xl font-bold text-red-500'>
        Product not found.
      </div>
    );
  }

  return (
    <>
      {/* Back button to navigate to Products page */}
      <div className='flex justify-center mt-6'>
        <button
          onClick={() => navigate("/products")}
          className='bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white px-6 py-2 rounded-full font-bold shadow-md transition duration-200'
        >
          ← Back to Products
        </button>
      </div>

      {/* Product Details Layout */}
      <div className='max-w-6xl mx-auto mt-10 p-6 bg-white border rounded-2xl shadow-xl'>

        {/* Flex layout: Image on left, details on right */}
        <div className='flex flex-col md:flex-row items-center gap-10'>

          {/* Product Image */}
          <div className='w-full md:w-1/2'>
            <img
              src={product.images[0]}
              alt={product.title}
              className='w-full h-auto border-4 border-gray-100 rounded-2xl object-contain shadow-md'
            />
          </div>

          {/* Product Details Text */}
          <div className='w-full md:w-1/2'>
            <h1 className='text-4xl font-extrabold text-pink-600 text-center md:text-left mb-6'>
              {product.title}
            </h1>

            {/* Detail items */}
            <div className='space-y-3 text-gray-700 text-lg'>
              <p><span className='text-indigo-600 font-bold'>Category:</span> {product.category}</p>
              <p><span className='text-indigo-600 font-bold'>Brand:</span> {product.brand}</p>
              <p><span className='text-indigo-600 font-bold'>Stock:</span> {product.stock}</p>
              <p><span className='text-indigo-600 font-bold'>Price:</span> <span className='text-3xl text-amber-500 font-extrabold'>${product.price}</span></p>
              <p><span className='text-indigo-600 font-bold'>Description:</span> {product.description}</p>
              <p><span className='text-indigo-600 font-bold'>Return Policy:</span> {product.returnPolicy}</p>
              <p><span className='text-indigo-600 font-bold'>Shipping Info:</span> {product.shippingInformation}</p>
              <p><span className='text-indigo-600 font-bold'>Warranty:</span> {product.warrantyInformation}</p>
            </div>

            {/* Add to Cart Button */}
            <div className='mt-6 text-center md:text-left'>
              <button
                onClick={() => handleAddItem(product)}
                className='bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black hover:text-white px-6 py-3 rounded-full font-bold shadow-lg transition-transform duration-200 hover:scale-105'
              >
                🛒 Add to Cart
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ProductDetails;
