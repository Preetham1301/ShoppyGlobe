/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import UseFetch from '../utilities/UseFetch'; // Custom hook for fetching data
import ProductItem from './ProductItem'; // Component to display individual product
import './styles/ProductList.css';
import { useDispatch } from 'react-redux';
import { SetFullData } from '../utilities/productSlice';

// Component to display a list of products with a search filter
const ProductList = () => {
  const [products, setProducts] = useState([]); // State to store all products
  const [text, setText] = useState(''); // State for search input

  // Using custom hook to fetch data from the API
  const { data, error, loading } = UseFetch('https://dummyjson.com/products'); 

  // Redux dispatch function to update global state  
  const dispatch = useDispatch(); 

  useEffect(() => {
    // When data is fetched, update products state and Redux store
    if (data) {
      setProducts(data.products);
      dispatch(SetFullData(data.products)); // Update Redux store with fetched products
    }
  }, [data, dispatch]);

  // Filter products based on search text
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(text.toLowerCase())
  );

  // Show error message if data fetch failed
  if (error) {
    return (
      <p className="text-red-500 text-xl text-center mt-10">
        Something went wrong: {error}
      </p>
    );
  }

  // Show loading message while data is being fetched
  if (loading) {
    return (
      <p className="loading-product text-7xl flex justify-center items-center animate-pulse text-slate-700">
        Loading products...
      </p>
    );
  }

  return (
    <>
      {/* Search bar for filtering products */}
      <div className="w-full flex justify-center items-center gap-5 mt-5">
        <input
          type="text"
          className="border-2 border-orange-400 py-2 px-10 rounded-xl outline-none focus:ring-2 focus:ring-orange-300 transition-all"
          onChange={e => setText(e.target.value)} // Update search text on change
          placeholder="Search for a product..."
        />
      </div>

      {/* Message if no products are found */}
      {filteredProducts.length === 0 ? (
        <p className="text-center text-2xl mt-10 text-slate-600">
          No products found. Try another keyword.
        </p>
      ) : (
        // Render the filtered list of products
        <div className="whole-cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 px-5">
          {filteredProducts.map(item => (
            <ProductItem key={item.id} item={item} /> // Render each product item
          ))}
        </div>
      )}
    </>
  );
};

export default ProductList;
