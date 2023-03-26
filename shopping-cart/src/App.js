import React from 'react'
import "./App.css";
import Header from './component/Header';
import {  Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Cart from './component/Cart';



const App = () => {
  return (
  <>
  
  <Header/>
  <div>
    <Routes>
      <Route path="/" element={<Home/>}/>

      <Route path="/cart" element={<Cart/>}/>      
    </Routes>
  </div>
  
 
 
  
  </>
)}

export default App