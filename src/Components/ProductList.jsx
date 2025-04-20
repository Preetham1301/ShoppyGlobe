import React, { useEffect, useState } from 'react'
import UseFetch from '../utilities/UseFetch';
import ProductItem from './ProductItem';
import "./styles/ProductList.css"
import { useDispatch, useSelector } from 'react-redux';
import { SetFullData } from '../utilities/productSlice';


//  Displays a list of products

const ProductList = () => {

  const [Products, setProducts] = useState([]);

  const [text , setText] = useState("")

  const { data, error, loading } = UseFetch('https://dummyjson.com/products')

  const [filterProducts , setFilterProducts] = useState (Products)


  const dispatch = useDispatch()
  
  useEffect(() => {

    if (data) {
      setProducts(data.products);
      dispatch(SetFullData(data.products))
    }
    
    
  }, [data , dispatch])   
  
  const filteredBooks = Products.filter((filteredBook) => filteredBook.title.toLowerCase().includes(text.toLowerCase()))

  
  if (error) {
    return <p>{error}</p>
  }
  
  if (loading) {
    return <p className='loading-product text-7xl flex justify-center items-center animate-pulse transition-all duration-200 font-serif text-slate-700'>Loading.......</p>
  }

  return (
    <>
     <div className='w-full flex justify-center items-center  gap-5 mt-5'>
        <input
         type="text"
         className='border-2 border-orange-400 py-2 px-10 '
         onChange={(e) => setText (e.target.value)}
         placeholder='Seach Product'
          />
      </div>
      <div className=' whole-cards-container grid grid-cols-3 gap-4 mt-5  '>
        {filteredBooks.map((item) => {
          return (
            <ProductItem key={item.id} item={item} setText = {setText} />
          )
        })}
      </div>
       
    </>
  )
}

export default ProductList