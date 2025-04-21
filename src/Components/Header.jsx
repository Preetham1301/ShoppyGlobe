/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './styles/Header.css'
import './styles/ProductList.css'

const Header = () => {
    // Get cart items from Redux store
    const cartItems = useSelector((state) => state.Products.items)
    
    // State to control mobile nav visibility
    const [showNav, setShowNav] = useState(false)

    // React Router navigation hook
    const navigate = useNavigate()

    // Handles navigation and closes mobile nav
    const handleNavClick = (path) => {
        navigate(path)
        setShowNav(false) // Close menu on navigation
    }

    return (
        <>
            {/* Header container */}
            <div className='whole-cards-container header-btn min-h-[100px] w-full border-2 flex justify-between'>
                {/* Logo section */}
                <div className='flex items-center'>
                    {/* Logo image */}
                    <img className='w-24 rounded-full' src="https://img.freepik.com/premium-photo/stylish-3d-shopping-bag-icon-rendered-vibrant-neon-colors-perfect-websites-apps-social-media-designs_1057-197990.jpg" alt="logo" />
                    {/* Brand name */}
                    <span className='font-extrabold text-3xl text-orange-300'>
                        Shoppy <span className='text-slate-900'>Globe</span>
                    </span>
                </div>

                {/* Desktop navigation links (hidden on mobile) */}
                <ul className='header-component-buttons hidden md:flex gap-5 text-3xl items-center text-slate-500'>
                    <li className='hover:underline font-bold hover:text-blue-700 transition-all'>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className='hover:underline font-bold hover:text-red-700 transition-all'>
                        <NavLink to="/products">Products</NavLink>
                    </li>
                    <li className='hover:underline font-bold hover:text-orange-700 transition-all'>
                        <NavLink to="/checkout">Checkout</NavLink>
                    </li>
                </ul>

                {/* Cart icon with item count */}
                <div className='text-3xl flex items-center mr-5 relative'>
                    <button onClick={() => navigate("/cartItems")} className='text-purple-500 header-Cart-icon relative hover:text-gray-950'>
                        <FontAwesomeIcon icon={faCartShopping} />
                        {/* Cart item count badge */}
                        {cartItems.length > 0 && (
                            <span className='absolute -top-2 -right-3 text-xs bg-orange-400 text-white px-2 py-0.5 rounded-full'>
                                {cartItems.length}
                            </span>
                        )}
                    </button>
                </div>

                {/* Hamburger menu for mobile */}
                <div className='md:hidden flex items-center mr-5'>
                    <button onClick={() => setShowNav(!showNav)} className='text-3xl'>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            </div>

            {/* Mobile navigation menu (shown when showNav is true) */}
            {showNav && (
                <div className='mobile-nav flex flex-col items-start gap-3 px-6 py-4 bg-white shadow-md'>
                    <button onClick={() => handleNavClick("/")} className='hover:text-orange-300'>Home</button>
                    <button onClick={() => handleNavClick("/products")} className='hover:text-orange-300'>Products</button>
                    <button onClick={() => handleNavClick("/checkout")} className='hover:text-orange-300'>Checkout</button>
                </div>
            )}
        </>
    )
}

export default Header
