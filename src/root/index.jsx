import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import  Register  from '../pages/register';
import  Login  from '../pages/login';
import  Dashboard  from '../pages/dashboard';


export const root = createBrowserRouter([
    {
        path:"/register",
        element:<Register/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/dashboard",
        element:<Dashboard/>
    }

])