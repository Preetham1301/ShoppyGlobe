/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { AddCartItem } from '../utilities/productSlice'

const ProductDetails = () => {
  // Get the list of all products from Redux store
  const Products = useSelector((state) => state.Products.fullItems)
  // Get the product id from the URL parameters
  const { id } = useParams()
  // Find the product with the matching id
  const product = Products.find((item) => item.id === Number(id))
  // Get the dispatch function from Redux
  const dispatch = useDispatch()
  // Get the navigate function from React Router
  const navigate = useNavigate()

  // Handler to add the product to the cart
  const handleAddItem = (item) => {
    dispatch(AddCartItem(item))
  }

  // If product is not found, show an error message
  if (!product) {
    return (
      <div className='flex justify-center items-center h-screen text-3xl font-bold text-red-400'>
        Product not found.
      </div>
    )
  }

  return (
    <>
      {/* Go back button */}
      <div className='flex justify-center mt-5'>
        <button
          onClick={() => navigate("/products")}
          className='border-none rounded-xl px-5 py-2 bg-orange-400 font-bold hover:text-white hover:bg-orange-500 shadow-md transition-all duration-200'
        >
          Go back
        </button>
      </div>

      {/* Product details container */}
      <div className='details-container scale-90 border shadow-2xl rounded-xl mt-5 p-4'>
        <div className='flex flex-col md:flex-row justify-evenly items-center gap-8'>
          {/* Product image */}
          <div className='w-full md:w-1/2 p-4'>
            <img className='w-full border-2 rounded-xl object-contain' src={product.images[0]} alt={product.title} />
          </div>

          {/* Product information */}
          <div className='w-full md:w-1/2 text-container'>
            <h1 className='text-center text-pink-700 text-5xl font-extrabold mb-4'>Product Details</h1>
            <div className='space-y-2 text-2xl text-gray-700'>
              <p><span className='text-orange-400 font-bold'>Title</span>: {product.title}</p>
              <p><span className='text-orange-400 font-bold'>Category</span>: {product.category}</p>
              <p><span className='text-orange-400 font-bold'>Description</span>: {product.description}</p>
              <p><span className='text-orange-400 font-bold'>Return Policy</span>: {product.returnPolicy}</p>
              <p><span className='text-orange-400 font-bold'>Shipping Info</span>: {product.shippingInformation}</p>
              <p><span className='text-orange-400 font-bold'>Stock</span>: {product.stock}</p>
              <p><span className='text-orange-400 font-bold'>Warranty</span>: {product.warrantyInformation}</p>
              <p><span className='text-orange-400 font-bold'>Brand</span>: {product.brand}</p>
              <p className='text-3xl text-amber-500 font-bold'>$ {product.price}</p>
            </div>
            {/* Add to Cart button */}
            <button
              onClick={() => handleAddItem(product)}
              className='mt-4 px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full text-black font-bold hover:scale-95 hover:text-white transition-all duration-200'
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails
