/* eslint-disable no-unused-vars */
import React , { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCartItem } from '../utilities/productSlice'
import { toast } from 'react-toastify'
import "./styles/ProductList.css"

const Checkout = () => {
    const [TotalPrice , SetTotalPrice] = useState(0)

    const cartitems = useSelector((state) => state.Products.items)
    const dispatch = useDispatch()
    // all the inputs given by user//

    const [DeliveryCountry , SetDeliveryCountry] = useState(null);
    const [Email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [City, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState(0);
    const [CardDetails, setCardDetails] = useState(null);
    // all details
    const prices = cartitems.reduce ((accumalator , currentvalue) => {
        return accumalator + currentvalue.price * currentvalue.quantity
    },0) 

    useEffect (() => {
        SetTotalPrice(prices)
    },[prices])

    function handleSubmitButton(e) {
        e.preventDefault()
        setEmail("")
        setAddress("")
        setCity("")
        setState("")
        setZipCode("")
        if (zipCode.length > 6) {
            toast.error("zipcode length could not be more than 6")
            return
        }
        Email.length === 0 || address.length === 0 || City.length === 0 || state.length === 0 || zipCode.length > 6 || zipCode.length === 0 ? toast.error("u have entered wrong details in feilds. please check it") : dispatch(clearCartItem())
    }

    return (
        <>
            <div className=' w-full flex min-h-64  justify-center scale-90'>
                <form onSubmit={handleSubmitButton} className='checkoutContainer shadow-2xl rounded-xl  w-1/2   flex-col justify-start p-5 '>
                    <p className='text-5xl font-bold'>Check <span className='text-orange-300'>Out</span></p>
                    <p className=' mt-2'>TotalAmount : {TotalPrice}</p>
                    <strong className='block mt-2 '>Payment Details</strong>

                    <label className='block w-full  mt-2' htmlFor="delevery">Delivery Country</label>
                    <select className='w-full mt-1 py-3 border-2 border-orange-300 rounded-xl' name="Fdelevery" id="delevery">
                        <option value="">India</option>
                        <option value="">China</option>
                        <option value="">Russia</option>
                        <option value="">Usa</option>
                    </select>

                    <label  className='block w-full  mt-2' htmlFor="email">Email</label>
                    <input required value={Email} onChange={(e) => setEmail(e.target.value)} className='w-full mt-2 py-3 border-2 rounded-xl' type="email" name="Femail" id="email" />

                    <strong className='block mt-2 '>Shipping Address</strong>

                    <label className='block w-full  mt-2' htmlFor="StreetAddress">Street Address</label>
                    <input  required value={address} onChange={(e) => setAddress(e.target.value)} className='w-full mt-2 py-3 border-2 rounded-xl' type="text" name="Femail" id="StreetAddress" />

                    <label className='block w-full mt-2' htmlFor="email">City</label>
                    <input  required value={City} onChange={(e) => setCity(e.target.value)} className='w-full mt-2 py-3 border-2 rounded-xl' type="text" name="Femail" id="email" />

                    <div className='flex space-x-4'>
                        <div className='flex-col w-full'>
                            <label className='block w-full  mt-2' htmlFor="state">State</label>
                            <input  required value={state} onChange={(e) => setState(e.target.value)} className='w-full mt-2 py-3 border-2 rounded-xl' type="text" name="Fstate" id="state" />

                            <label className='block w-full  mt-2' htmlFor="zip-code">ZIPCode</label>
                            <input   required value={zipCode || ""} onChange={(e) => setZipCode(e.target.value)} className='w-full mt-2 py-3 border-2 rounded-xl' type="number" name="Fzip-code" id="zip-code" />

                        </div>
                    </div>


                    <label className='block w-full  mt-2' htmlFor="delevery">Payment Method</label>
                    <select onChange={(e) => setCardDetails(e.target.value)} className='w-full mt-2 py-3 border-2 border-orange-300 rounded-xl' name="Fdelevery" id="delevery">
                        <option value="">Card</option>
                        <option value="">Net Banking</option>
                        <option value="">BitCoin</option>
                        <option value="">Bank Transfer</option>
                    </select>

                    <button className='w-full mt-2 py-2 rounded-2xl bg-orange-300 text-white font-bold transition-all duration-200 hover:text-slate-700'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Checkout