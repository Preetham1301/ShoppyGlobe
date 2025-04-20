/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { AddCartItem, RemoveCartItem } from '../utilities/productSlice'
import { NavLink } from 'react-router-dom'



//  Show detailed information about a selected product.
const ProductDetails = () => {

  const Products = useSelector((state) => state.Products.fullItems)
  const { id } = useParams()
  const filterProduct = Products.filter((item) => item.id === Number(id))
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleAddItem(item) {
    dispatch(AddCartItem(item))
  }

  return (
    <>
      <div className=' flex justify-center mt-5'>
        <button onClick={() => navigate("/products")} className=' border-none rounded-xl px-5 py-2 bg-orange-400 font-bold hover:text-white hover:bg-orange-500 shadow-md transition-all duration-200' >Go back</button>
      </div>
      
      <div>
        <div className='details-container scale-75 border shadow-2xl rounded-xl'>

          <div className='flex justify-evenly items-center scale-90 details-container-1 '>
            <div className='w-3/4 '>
              <img className='p-10 border-2 flex justify-center items-center' src={filterProduct[0].images[0]} alt="" />
            </div>
              <div className='flex-col items-center text-container' >
                <h1 className='text-center text-pink-700 text-7xl font-extrabold product-details-heading '>Product details</h1>
                <p className=' tile-details-container  text-center font-bold  '><span className='text-orange-400 text-3xl'>Title</span> : {filterProduct[0].title}</p>
                <p className='text-center text-3xl '> <span className='text-orange-400 font-bold text-3xl'>Category</span> : {filterProduct[0].category} </p>
                <p className='text-center text-3xl text-slate-500'><span className='text-orange-400 font-bold text-3xl' >Description</span> :{filterProduct[0].description}</p>
                <p className='text-center text-3xl'><span className='text-orange-400 font-bold text-3xl'>Return Policy</span> : {filterProduct[0].returnPolicy} </p>
                <p className='text-center text-3xl'><span className='text-orange-400 font-bold text-3xl'>Shipping info</span> : {filterProduct[0].shippingInformation} </p>
                <p className='text-center text-3xl'><span className='text-orange-400 font-bold text-3xl'>Stock</span> : {filterProduct[0].stock}</p>
                <p className='text-center text-3xl'><span className='text-orange-400 font-bold text-3xl'>Warranty</span> : {filterProduct[0].warrantyInformation} </p>
                <p className='text-center text-3xl'><span className='text-orange-400 font-bold text-3xl'>Brand</span> : {filterProduct[0].brand} </p>
                <p className='text-3xl text-center   text-amber-400'>$ {filterProduct[0].price}</p>
                <button onClick={() => handleAddItem(filterProduct[0])} className='px-5 py-5 ml-5 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-s-xl rounded-e-lg text-black font-bold  hover:scale-95 hover:font-extrabold transition-all duration-200 hover:text-white  mx-auto  mt-2 addtocart'>Add to Cart</button>
              </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default ProductDetails