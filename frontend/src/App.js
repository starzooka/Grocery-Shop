import SignIn from './pages/SignIn';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import SignUp from './pages/SignUp';
import MyCart from './pages/MyCart';
import Categories from './pages/Categories';
import MyAccount from './pages/MyAccount';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Footer} from './components/footer';

function App() {
  const router=createBrowserRouter([
    
    {
      path: '/',
      element: <><Navbar/><Home/><Footer /></>
    },
    {
      path: '/signIn',
      element: <><Navbar/><SignIn/><Footer /></>
    },
    {
      path:'/signUp',
      element: <><Navbar/><SignUp/><Footer /></>
    },
    {
      path: '/myCart',
      element: <><Navbar/><MyCart/><Footer /></>
    },
    {
      path:'/categories',
      element: <><Navbar/><Categories/><Footer /></>
    },
    {
      path:'/myAccount',
      element: <><Navbar/><MyAccount/><Footer /></>
    },
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
