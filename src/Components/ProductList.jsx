/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import UseFetch from '../utilities/UseFetch'; // Custom hook for fetching data
import ProductItem from './ProductItem'; // Component to display individual product
import './styles/ProductList.css';
import { useDispatch } from 'react-redux';
import { SetFullData } from '../utilities/productSlice';

// Displays a list of products
const ProductList = () => {
  const [products, setProducts] = useState([]); // State to store all products
  const [text, setText] = useState(''); // State for search input
  const { data, error, loading } = UseFetch('https://dummyjson.com/products'); // Fetch products from API
  const dispatch = useDispatch(); // Redux dispatch function

  useEffect(() => {
    // When data is fetched, update products state and Redux store
    if (data) {
      setProducts(data.products);
      dispatch(SetFullData(data.products));
    }
  }, [data, dispatch]);

  // Filter products based on search text
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(text.toLowerCase())
  );

  // Show error message if fetch failed
  if (error) {
    return <p className="text-red-500 text-xl text-center mt-10">{error}</p>;
  }

  // Show loading message while fetching data
  if (loading) {
    return (
      <p className="loading-product text-7xl flex justify-center items-center animate-pulse transition-all duration-200 font-serif text-slate-700">
        Loading.......
      </p>
    );
  }

  return (
    <>
      {/* Search input */}
      <div className="w-full flex justify-center items-center gap-5 mt-5">
        <input
          type="text"
          className="border-2 border-orange-400 py-2 px-10 rounded-xl outline-none focus:ring-2 focus:ring-orange-300 transition-all"
          onChange={e => setText(e.target.value)} // Update search text on change
          placeholder="Search for a product..."
        />
      </div>

      {/* Show message if no products found */}
      {filteredProducts.length === 0 ? (
        <p className="text-center text-2xl mt-10 text-slate-600">
          No products found. Try another keyword.
        </p>
      ) : (
        // Render list of filtered products
        <div className="whole-cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 px-5">
          {filteredProducts.map(item => (
            <ProductItem key={item.id} item={item} /> // Render each product
          ))}
        </div>
      )}
    </>
  );
};

export default ProductList;
