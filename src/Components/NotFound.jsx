// Components/NotFound.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

 const NotFound = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className="border-4 flex-col align-middle items-center justify-center h-screen w-screen">
      <h1 className="text-4xl">404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
     <button onClick={() => navigate("/")} className='border-2 px-5 bg-orange-300 rounded-2xl py-2 hover:text-black text-white'>Go Back</button>  
    </div>
    </>
  
  );
};

export default NotFound