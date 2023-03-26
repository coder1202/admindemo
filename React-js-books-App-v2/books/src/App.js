import './App.css'
import {  Route, Routes } from 'react-router-dom';

import BookList from './conponent/BookList';
import BookDetails from './conponent/BookDetails';
import Navbar from './conponent/Navbar';
import Favorites from './conponent/Favorites';
import Footer from './conponent/Footer';


function App() {
  return (
    <>
    <div>
      <Navbar/>
    <Routes>
      <Route path='/' element={<BookList/>}/>
      <Route path="/book/:id" element={<BookDetails/>}/>
      <Route path="/favorites" element={<Favorites/>}/>
    </Routes>
    <Footer/>
    </div>
   
     </>
   
  );
}

export default App;
