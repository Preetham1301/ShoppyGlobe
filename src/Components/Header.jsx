import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import "./styles/Header.css"
import "./styles/ProductList.css"
// Display the navigation menu and shopping cart icon

const Header = () => {
    
    const cartItems = useSelector((state) => state.Products.items)
    const [showNav, setShowNav] = useState(false)
    const navigate = useNavigate()

    return (
        <>
            <div className='  whole-cards-container header-btn min-h-[100px] w-full border-2 flex justify-between '>
                <div className='flex justify-center items-center whole-cards-container-2  '>
                    <img className='w-24' src="https://cdn.icon-icons.com/icons2/3767/PNG/512/bag_shopping_icon_231414.png" alt="" />
                    <span className='font-extrabold text-3xl text-orange-300 '>Shoppy <span className='text-slate-900'>Globe</span> </span>
                </div>

                <ul className='header-component-buttons flex gap-5 text-3xl justify-center items-center text-slate-500 '>
                    <li className='hover:underline hover:text-orange-300 font-bold  hover:animate-none  transition-all duration-300' >
                        <NavLink to={"/"}>Home</NavLink>

                    </li>

                    <li className='hover:underline text-slate-500  font-bold  transition-all duration-300 hover:text-orange-300'>
                        <NavLink to={"products"}>Product</NavLink>

                    </li>

                    {/* <li className='hover:underline text-slate-500 font-bold transition-all duration-300 hover:text-orange-300'>
                        <NavLink to={"/"}>Login</NavLink>

                    </li> */}


                    <li className='hover:underline text-slate-500 font-bold transition-all duration-300 hover:text-orange-300'>
                        <NavLink to={"/checkout"}>Checkout</NavLink>

                    </li>

                </ul>

                <div className='text-3xl flex-col justify-center items-center mr-5  '>
                    <div className='header-Cart-icon  '>
                        <p className='text-center'>{cartItems.length - 1 === -1 ? 0 : cartItems.length}</p>
                        <button onClick={() => navigate("/cartItems")} className='' ><FontAwesomeIcon icon={faCartShopping} /></button>
                    </div>
                </div>




            </div>
            {/* header-component-buttons-all */}
            <div className='hangBurger transition-all duration-150 '>
                <button
                    onClick={() => setShowNav(!showNav)}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>

            {showNav && (
                <div className='transition-all duration-150 '>
                    <ul className='mobile-nav transition-all duration-150'>
                        <li className='hover:text-orange-300  '>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>

                        <li className='hover:text-orange-300 '>
                            <NavLink to={"/products"}>Products</NavLink>
                        </li>


                        {/* <li className='hover:bg-amber-500 '>
                            <NavLink to={"/" }>Login</NavLink>
                        </li> */}


                        <li className='hover:text-orange-300  '>
                            <NavLink to={"/checkout"}>Checkout</NavLink>
                        </li>


                    </ul>
                </div>
            )}
            {/* {!showNav && (
                ""
            )} */}
        </>
    )
}

export default Header

