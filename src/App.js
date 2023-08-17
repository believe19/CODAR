import * as React from 'react';
// import { styled } from '@mui/material/styles';


import FetchData from './FetchData'
import CurrencyData from './CurrencyData'
import LanguageData from './LanguageData'
import CapitalData from './CapitalData'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';






const router = createBrowserRouter([
  {
    path: "/",
    element:<FetchData/>,
    // errorElement: "page not found"
  },
  {
    path: "/links",
    element:<div>THIS IS LINKS PAGE</div> 
  },
  {
    path: "/Currency",
    element:<CurrencyData/>,
    errorElement: "page not found"
  },
  {
    path: "/Language",
    element:<LanguageData/>,
    errorElement: "page not found"
  },
  {
    path: "/Capital",
    element:<CapitalData/>,
    errorElement: "page not found"
  },

])
function App () {
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  );
};

export default App;