/* eslint-disable no-unused-vars */
import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import AppStore from './utilities/appStore'
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = lazy(() => import("./Components/App"))
const Body = lazy(() => import("./Components/Body"))
const ProductList = lazy(() => import("./Components/ProductList"))
const ProductDetails = lazy(() => import("./Components/ProductDetails"))
const Cart = lazy(() => import("./Components/Cart"))
const Checkout = lazy(() => import("./Components/Checkout"))
const NotFound = lazy (() => import ("./Components/NotFound"))

const Router = createBrowserRouter([

  {
    path: "/",
    element: <Suspense fallback={<div className='text-3xl animate-pulse transition-all duration-200'>Loading.....</div>}>
      <App />
    </Suspense >,
    children: [
      {
        path: '/',
        element: <Suspense fallback={<div>Loading.....</div>}>
          <Body />
        </Suspense>
      },
      {
        path: "/products",
        element: <Suspense fallback={<div className='text-3xl animate-pulse transition-all duration-200'>Loading.....</div>}>
          <ProductList />
        </Suspense>
      },

      {
        path: "/product/:id",
        element: <Suspense>
          <ProductDetails />
        </Suspense>
      },

      {
        path: "/cartItems",
        element: <Suspense fallback={<div className='text-3xl animate-pulse transition-all duration-200'>Loading.....</div>}>
          <Cart />
        </Suspense>
      },

      {
        path: "/checkout",
        element: <Suspense fallback={<div className='text-3xl animate-pulse transition-all duration-200'>Loading.....</div>}>
          <Checkout />
        </Suspense>
      }
    ]
  },

  {
    path: "*",
    element: <Suspense fallback= {<div className='text-3xl animate-pulse transition-all duration-200' >Loading...........</div>}>
        <NotFound />
    </Suspense>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={AppStore}>
      <RouterProvider router={Router} />
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
