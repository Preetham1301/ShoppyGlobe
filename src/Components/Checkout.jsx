/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCartItem } from '../utilities/productSlice';
import { toast } from 'react-toastify';
import './styles/ProductList.css';

const Checkout = () => {
    // State for total price
    const [TotalPrice, SetTotalPrice] = useState(0);

    // Get cart items from Redux store
    const cartitems = useSelector((state) => state.Products.items);

    // Get dispatch function from Redux
    const dispatch = useDispatch();

    // Controlled form fields for user input
    const [formData, setFormData] = useState({
        DeliveryCountry: 'India',
        Email: '',
        address: '',
        City: '',
        state: '',
        zipCode: '',
        CardDetails: 'Card',
    });

    // Calculate total price from cart items
    const prices = cartitems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    // Update total price whenever cart items change
    useEffect(() => {
        SetTotalPrice(prices);
    }, [prices]);

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmitButton = (e) => {
        e.preventDefault();

        // Validate form fields
        const { Email, address, City, state, zipCode } = formData;
        if (!Email || !address || !City || !state || !zipCode || zipCode.length !== 6) {
            toast.error('Please fill all fields correctly. ZIP code must be 6 digits.');
            return;
        }

        if (cartitems.length === 0) {
            toast.error('Your cart is empty. Please add items to your cart first.');
            return;
        }

        // Show success message
        toast.success('Order placed successfully 🎉');
        // Clear cart items in Redux store
        dispatch(clearCartItem());

        // Reset form fields
        setFormData({
            DeliveryCountry: 'India',
            Email: '',
            address: '',
            City: '',
            state: '',
            zipCode: '',
            CardDetails: 'Card',
        });
    };

    return (
        <div className="w-full flex min-h-64 justify-center scale-90">
            <form
                onSubmit={handleSubmitButton}
                className="checkoutContainer shadow-xl rounded-2xl w-1/2 flex-col justify-start p-6 bg-gradient-to-b from-white via-slate-100 to-slate-200"
            >
                {/* Checkout title */}
                <p className="text-5xl font-extrabold text-gray-800">
                    Check <span className="text-orange-400">Out</span>
                </p>

                {/* Display total amount */}
                <p className="mt-2 font-medium text-lg text-gray-600">
                    Total Amount: ₹{TotalPrice.toFixed(2)}
                </p>

                <strong className="block mt-4 text-lg text-gray-700">Payment Details</strong>

                {/* Delivery country selection */}
                <label className="block mt-2 text-gray-600">Delivery Country</label>
                <select
                    name="DeliveryCountry"
                    value={formData.DeliveryCountry}
                    onChange={handleInputChange}
                    className="w-full mt-1 py-3 border-2 border-orange-400 rounded-xl focus:ring-2 focus:ring-orange-500 transition-all shadow-md"
                >
                    <option value="India">India</option>
                    <option value="China">China</option>
                    <option value="Russia">Russia</option>
                    <option value="USA">USA</option>
                    <option value="Korea">Korea</option>
                    <option value="Australia">Australia</option>
                    <option value="Africa">Africa</option>
                </select>

                {/* Email input */}
                <label className="block mt-4 text-gray-600">Email</label>
                <input
                    name="Email"
                    value={formData.Email}
                    onChange={handleInputChange}
                    className="w-full mt-2 py-3 px-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 transition-all shadow-md"
                    type="email"
                    placeholder="example@email.com"
                    required
                />

                <strong className="block mt-4 text-lg text-gray-700">Shipping Address</strong>

                {/* Street address input */}
                <label className="block mt-2 text-gray-600">Street Address</label>
                <input
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full mt-2 py-3 px-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 transition-all shadow-md"
                    type="text"
                    placeholder="Enter your street address"
                    required
                />

                {/* City input */}
                <label className="block mt-2 text-gray-600">City</label>
                <input
                    name="City"
                    value={formData.City}
                    onChange={handleInputChange}
                    className="w-full mt-2 py-3 px-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 transition-all shadow-md"
                    type="text"
                    placeholder="Enter your city"
                    required
                />

                <div className="flex space-x-4">
                    <div className="w-full">
                        {/* State input */}
                        <label className="block mt-2 text-gray-600">State</label>
                        <input
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            className="w-full mt-2 py-3 px-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 transition-all shadow-md"
                            type="text"
                            placeholder="Enter your state"
                            required
                        />

                        {/* ZIP code input */}
                        <label className="block mt-2 text-gray-600">ZIP Code</label>
                        <input
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            className="w-full mt-2 py-3 px-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 transition-all shadow-md"
                            type="text"
                            maxLength="6"
                            pattern="\d{6}"
                            placeholder="Enter 6-digit ZIP code"
                            required
                        />
                    </div>
                </div>

                {/* Payment method selection */}
                <label className="block mt-4 text-gray-600">Payment Method</label>
                <select
                    name="CardDetails"
                    value={formData.CardDetails}
                    onChange={handleInputChange}
                    className="w-full mt-2 py-3 px-4 border-2 border-orange-400 rounded-xl focus:ring-2 focus:ring-orange-500 transition-all shadow-md"
                >
                    <option value="Card">Card</option>
                    <option value="Net Banking">Net Banking</option>
                    <option value="BitCoin">BitCoin</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                </select>

                {/* Submit button */}
                <button
                    type="submit"
                    className="w-full mt-6 py-3 rounded-2xl bg-gradient-to-r from-green-400 to-green-500 text-white font-bold transition-all duration-300 hover:bg-green-600 hover:scale-105"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Checkout;
