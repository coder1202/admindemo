import React,{useState,useEffect} from 'react'
import '../App.css'
import { API_URL } from '../APIGET'
import axios from 'axios';
import AppcontextProvider from './context/AppcontextProvider';


const BookList = () => {
   // const {favorites,addToFavorites,removeFromFavorites}=AppcontextProvider();
  
    const  {favorites,addToFavorites,removeFromFavorites}  = AppcontextProvider([]);
    //onClick={()=>addToFavorites(book)}
    const [books,setBooks]=useState([]);
    
    //console.log("Favorites Are",favorites);
    useEffect(()=>{
        axios
        .get(API_URL)
        .then((res)=>{
            console.log(res.data);
            setBooks(res.data);
        }).catch((err)=>console.log(err));
    },[]);
    
  return (
    <div className='book-list'>
    {books.map((book)=>(
        <div key={book.id} className='book'>
            <div><h3>{book.title}</h3></div>
            <div><img src={book.image_url} alt='#'/></div>
            <div> <button onClick={()=>addToFavorites(book)}>Add to Favorites</button></div>
           
            
        </div>
    ))}
    </div>
  )
}

export default BookList;