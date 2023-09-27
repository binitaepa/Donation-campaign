import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Donation from './components/Donation/Donation';
import Statistics from './components/Statistics/Statistics';
import DonationDetails from './DonationDetails/DonationDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
        loader:()=>fetch('/categories.json')
        
      },
      {
        path: '/categoryFull/:id',
        element:<DonationDetails></DonationDetails>, 
        loader: () => fetch('/categories.json') 

      },
      {
        path:'/Donation',
        element:<Donation></Donation>,
        loader:()=>fetch('/categories.json')

      },
      {
        path:'/Statistics',
        element:<Statistics></Statistics>,
        loader:()=>fetch('/categories.json')
        
      }
    ]
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />

  </React.StrictMode>,
)
