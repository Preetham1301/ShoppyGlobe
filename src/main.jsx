/* eslint-disable react-refresh/only-export-components */
// Import necessary React and third-party libraries
import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import AppStore from './utilities/appStore'
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Lazy load components for code splitting and performance optimization
const App = lazy(() => import("./Components/App"))
const Body = lazy(() => import("./Components/Body"))  
const ProductList = lazy(() => import("./Components/ProductList"))
const ProductDetails = lazy(() => import("./Components/ProductDetails"))
const Cart = lazy(() => import("./Components/Cart"))
const Checkout = lazy(() => import("./Components/Checkout"))
const NotFound = lazy (() => import ("./Components/NotFound"))

// Define application routes using React Router
const Router = createBrowserRouter([
  {
    path: "/",
    // Wrap main App component in Suspense for lazy loading fallback
    element: <Suspense fallback={<div className='text-3xl animate-pulse transition-all duration-200'>Loading.....</div>}>
      <App />
    </Suspense >,
    // Nested routes for main sections of the app
    children: [
      {
        path: '/',
        // Home/Body component with loading fallback
        element: <Suspense fallback={<div>Loading.....</div>}>
          <Body />
        </Suspense>
      },
      {
        path: "/products",
        // Product ist page
        element: <Suspense fallback={<div className='text-3xl animate-pulse transition-all duration-200'>Loading.....</div>}>
          <ProductList />
        </Suspense>
      },
      {
        path: "/product/:id",
        // Product details page for a specific product
        element: <Suspense>
          <ProductDetails />
        </Suspense>
      },
      {
        path: "/cartItems",
        // Shopping cart page
        element: <Suspense fallback={<div className='text-3xl animate-pulse transition-all duration-200'>Loading.....</div>}>
          <Cart />
        </Suspense>
      },
      {
        path: "/checkout",
        // Checkout page
        element: <Suspense fallback={<div className='text-3xl animate-pulse transition-all duration-200'>Loading.....</div>}>
          <Checkout />
        </Suspense>
      }
    ]
  },
  {
    path: "*",
    // Catch-all route for 404 Not Found
    element: <Suspense fallback= {<div className='text-3xl animate-pulse transition-all duration-200' >Loading...........</div>}>
        <NotFound />
    </Suspense>
  }
])

// Render the React application into the root DOM node
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Provide Redux store to the app */}
    <Provider store={AppStore}>
      {/* Set up routing */}
      <RouterProvider router={Router} />
      {/* Toast notifications for user feedback */}
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </Provider>
  </StrictMode>,
)
