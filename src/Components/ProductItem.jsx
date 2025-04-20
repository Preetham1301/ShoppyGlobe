/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect ,useState } from 'react'
import "./styles/ProductList.css"
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AddCartItem ,RemoveCartItem } from '../utilities/productSlice'
// Represents a single product including an “Add to Cart” button

const ProductItem = ({ item }) => {
  const dispatch = useDispatch();
  
  const Products = useSelector((state) => state.Products.items);

  
  
  return (
    <>
     
      <div className = ' border-2 px-6 rounded-lg  shadow-sm shadow-black hover:scale-95 transition-all duration-200 '>
        <div>
          <img src={item.images[0]} className=' w-full h-44 object-center' alt="" />
        </div>
        <p className='text-center text-slate-600 text-2xl'>{item.title}</p>
        <p className='text-center text-2xl text-slate-600'>{item.rating} ⭐</p>
        <p className='text-center text-slate-600'>{item.description}</p>

        <div className='flex justify-between '>
          <p className='text-3xl text-yellow-500'>${item.price}</p>
          <div className='flex  gap-5 '>
            {/* <button  className='border-none rounded-xl px-5 py-2 bg-orange-400 font-bold hover:text-white hover:bg-orange-500 shadow-md transition-all duration-200'>Add to cart</button> */}
            <NavLink to={`/product/${item.id}`}><button className='border-none rounded-xl px-5 py-2 bg-orange-400 font-bold hover:text-white hover:bg-orange-500 shadow-md transition-all duration-200'>Details</button>  </NavLink>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductItem