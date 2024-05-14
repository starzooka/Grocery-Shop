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
import { AuthProvider } from './AuthContext';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
      ),
    },
    {
      path: '/signIn',
      element: (
        <>
          <Navbar />
          <SignIn />
          <Footer />
        </>
      ),
    },
    {
      path: '/signUp',
      element: (
        <>
          <Navbar />
          <SignUp />
          <Footer />
        </>
      ),
    },
    {
      path: '/myCart',
      element: (
        <>
          <Navbar />
          <MyCart />
          <Footer />
        </>
      ),
    },
    {
      path: '/categories',
      element: (
        <>
          <Navbar />
          <Categories />
          <Footer />
        </>
      ),
    },
    {
      path: '/myAccount',
      element: (
        <>
          <Navbar />
          <MyAccount />
          <Footer />
        </>
      ),
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
