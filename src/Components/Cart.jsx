/* eslint-disable no-unused-vars */  
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  // Get cart items from Redux store
  const cartItems = useSelector((state) => state.Products.items);
  // Hook for navigation
  const navigate = useNavigate();

  // Calculate total price using useMemo for optimization
  const totalPrice = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cartItems]);

  return (
    <div className="min-h-screen py-10 px-6 bg-gray-100">
      {cartItems.length > 0 ? (
        // If cart has items, show cart table and summary
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-700 mb-6">Your Shopping Cart</h2>

          {/* Cart Items Table */}
          <table className="w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200 text-gray-700 text-left">
              <tr>
                <th className="px-4 py-3">No.</th>
                <th className="px-4 py-3">Image</th>
                <th className="px-4 py-3">Product Name</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Operation</th>
              </tr>
            </thead>
            <tbody>
              {/* Render each cart item using CartItem component */}
              {cartItems.map((item, index) => (
                <CartItem key={item.id} CartItems={item} index={index} />
              ))}
            </tbody>
          </table>

          {/* Total Summary Section */}
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg font-semibold text-gray-700">Total Items: {cartItems.length}</p>
            <p className="text-lg font-semibold text-gray-700">Total Amount: ₹{totalPrice.toFixed(2)}</p>
            {/* Button to proceed to checkout */}
            <button
              onClick={() => navigate("/checkout")}
              className="mt-4 md:mt-0 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-bold transition duration-200"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        // If cart is empty, show empty cart state
        <div className="flex flex-col justify-center items-center h-[80vh] text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
            alt="Empty Cart"
            className="w-48 h-48 mb-6 opacity-80"
          />
          <p className="text-4xl font-bold text-gray-600 mb-4">Your cart is empty</p>
          {/* Button to navigate to products page */}
          <button
            onClick={() => navigate("/products")}
            className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-full font-semibold transition duration-200"
          >
            Browse Products
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
