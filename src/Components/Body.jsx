import { fa1, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons/faLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./styles/Header.css"

const Body = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className='body flex mt-24 body-main-container '>
        <div className='border-none  p-8 flex-col flex-wrap w-2/3 '>
          <p className='text-orange-300 text-7xl block font-extrabold '>Online</p>

          <p className='text-slate-600 text-7xl mt-5 font-bold '>Shopping</p>

          <p className='text-3xl  mt-5 text-slate-500 font-medium'>

            Discover

            our vibrant online marketplace, where quality meets convenience! Explore a curated selection of fashion, gadgets, and more
            all at your fingertips. Enjoy secure payments and fast shipping for a seamless shopping experience.

            Join our community today and find your perfect item!
          </p>

          <div className='flex justify-start items-center mt-10'>
            <img className='w-32 h-20' src="https://cdn.icon-icons.com/icons2/3767/PNG/512/bag_shopping_icon_231414.png" alt="" />
            <p className='flex items-center font-extrabold text-3xl text-slate-500'>ShoppyGlobe</p>
          </div>

          <div className='flex justify-start list-none gap-5 text-3xl text-slate-700 mt-10'>
            <li className='hover:text-slate-500' onClick={() => navigate("/")}><Link><FontAwesomeIcon icon={faPhone} /></Link></li>
            <li className='hover:text-slate-500' onClick={() => navigate("/")}><Link><FontAwesomeIcon icon={faEnvelope} /></Link></li>
            <li className='hover:text-slate-500' onClick={() => navigate("/")}><Link><FontAwesomeIcon icon={faLink} /></Link></li>
          </div>
        </div>


        <div className='body-image'>
          <img
            src="https://traffictail.com/wp-content/uploads/2024/07/Role-of-Search-History-in-Enhancing-User-Experience-on-E-commerce-Platforms-1.webp"
            alt=""
            className='h-[500px] rounded-full'
          />
        </div>


      </div>


    </>
  );
}

export default Body;