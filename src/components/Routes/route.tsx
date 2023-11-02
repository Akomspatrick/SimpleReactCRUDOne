import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import CRUDPage from '../../pages/CRUDPage';



export const  route= createBrowserRouter([
    {path: '/', element: <HomePage />,
    children: [ 
        {
        index:true,
        element: <HomePage />
        },
        { path: '/CRUDPage', element: <CRUDPage /> },
    ]},
    
  

]); 