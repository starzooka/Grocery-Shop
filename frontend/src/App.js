import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import SignUp from './pages/SignUp';
import MyCart from './pages/MyCart';
import Categories from './pages/Categories';
import MyAccount from './pages/MyAccount';
import { Footer } from './components/footer';
import ShowProduct from './components/ShowProduct';
import MyOrders from './pages/myOrders';
import ProductList from './pages/productList';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <Home />
          <Footer/>
        </>
      ),
    },
    {
      path: '/signIn',
      element: (
        <>
          <Navbar />
          <SignIn />
          <Footer/>
        </>
      ),
    },
    {
      path: '/signUp',
      element: (
        <>
          <Navbar />
          <SignUp />
          <Footer/>
        </>
      ),
    },
    {
      path: '/myCart',
      element: (
        <>
          <Navbar />
          <MyCart />
           
        </>
      ),
    },
    {
      path: '/categories',
      element: (
        <>
          <Navbar />
          <Categories />
          <Footer/>
        </>
      ),
    },
    {
      path: '/myAccount',
      element: (
        <>
          <Navbar />
          <MyAccount />
          <Footer/>
        </>
      ),
    },
    {
      path: '/product',
      element: (
        <>
          <Navbar />
          <ShowProduct />
          <Footer/>
        </>
      ),
    },
    {
      path: '/myOrders',
      element: (
        <>
          <Navbar />
          <MyOrders/>
          <Footer/>
        </>
      ),
    },
    {
      path: '/productList',
      element: (
        <>
          <Navbar />
          <ProductList/>
          <Footer/>
        </>
      ),
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
      
      </>
  );
}

export default App;
