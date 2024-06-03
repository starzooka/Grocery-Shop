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

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <Home />
           
        </>
      ),
    },
    {
      path: '/signIn',
      element: (
        <>
          <Navbar />
          <SignIn />
           
        </>
      ),
    },
    {
      path: '/signUp',
      element: (
        <>
          <Navbar />
          <SignUp />
           
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
           
        </>
      ),
    },
    {
      path: '/myAccount',
      element: (
        <>
          <Navbar />
          <MyAccount />
           
        </>
      ),
    },
    {
      path: '/product',
      element: (
        <>
          <Navbar />
          <ShowProduct />
           
        </>
      ),
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Footer/>
      </>
  );
}

export default App;
