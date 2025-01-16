import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home/Home";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Dashboard from "../Pages/Dashboard/Dashboard";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/contact-us",
            element: <ContactUs/>
        },
        {
            path: "/dashboard",
            element: <Dashboard/>
        }
      ]
    },
  ]);

  export default router