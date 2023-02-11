import React from 'react';
import {BrowserRouter,Route,Routes } from "react-router-dom";
import { Footer } from './footer/footer';
import Navbar from './navbar/navbar';
import Home from './pages/home/home';
import Hotel from './pages/hotel/hotel';
import { List } from './pages/list/list';


const App = () => {

  return (  

    <BrowserRouter>
     <Navbar />
       <Routes> 
        <Route path="/" element={<Home />}/>
        <Route path="/hotel" element={<List />}/>
        <Route path="/hotels" element={<Hotel />}/>
        
      </Routes> 
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;