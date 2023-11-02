import React from 'react';

import MainBar from './components/MainBar';
import HomePage from './pages/HomePage';
import { RouterProvider } from 'react-router-dom';
import { route } from './components/Routes/route';

function App() {
  return (
    <div className="App">


           <MainBar />
           <RouterProvider router={route}/>
           <HomePage />
    </div>
  );
}

export default App;
