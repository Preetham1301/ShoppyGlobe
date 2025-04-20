import React, { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import { useNavigate } from 'react-router-dom'


// Displays the items added to the cart with options to modify quantities or
// remove items

const Cart = () => {
  let [price, setPrice] = useState(0)
  const cartItems = useSelector((state) => state.Products.items)
  const navigate = useNavigate()

  const TotalPrice = cartItems.reduce((accumalotor, currentItem) => {
    return accumalotor + currentItem.price * currentItem.quantity
  }, 0)


  useEffect(() => {
    setPrice(TotalPrice)
  }, [TotalPrice])



  return (
    <>
      <div className='grid grid-cols-1 w-auto mx-auto grid-container'>
        <table className='table-container'>
          {cartItems.length > 0 ? (
            <thead className='thead-contaier'>
              <tr>
                <th className=' px-4 py-2'>No.</th>
                <th className=' px-4 py-2'>Image</th>
                <th className='px-4 py-2'>Product Name</th>
                <th className=' px-4 py-2'>Price</th>
                <th className=' px-4 py-2'>Operation</th>
              </tr>
            </thead>

          ) : ""}
          <tbody className='tbody-container'>
            {cartItems.length > 0 ? (
              <>

                {cartItems.map((item, index) => <CartItem key={item.id} CartItems={item} index={index} />)}
                <div className='border-none border-black min-h-[100px] w-auto  mt-5 flex justify-around items-center rounded-xl shadow-sm shadow-slate-500 mx-auto '>
                  <p>Total Items: {cartItems.length} </p>
                  <p>Total Amount : {price} </p>
                  <button onClick={() => navigate("/checkout")} className='rounded-xl  bg-green-600  shadow-slate-600 px-5 py-2 font-extrabold border border-green-950 text-white hover:bg-green-800 transition-all duration-150'>Checkout</button>
                </div>
              </>
            ) : (
              <div className='products-cart h-screen w-screen flex justify-center items-center overflow-x-hidden , overflow-y-auto'>
                <div className='flex-col mt-4 mr-10 products-cart-inside'>
                  <p className='text-7xl text-inside-cart'>No Products in Cart</p>
                  <button onClick={() => navigate("/products")} className='button-cart ml-56 mt-5 text-white border-none rounded-xl px-5 py-2 bg-orange-400 font-bold hover:text-slate-600 hover:bg-orange-500 shadow-md transition-all duration-200'>Browse Products</button>
                </div>
              </div>
            )}
          </tbody>
        </table>
      </div>


    </>
  )
}

export default Cart
