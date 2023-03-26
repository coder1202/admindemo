import React from 'react'
import { useState,useContext } from 'react';
import { createContext } from 'react'
const AppContext =createContext(null);

export const useAppContext=()=>{
  const context =useContext(AppContext);
  if(context===undefined){
    throw new Error("Appcontext must be within appContextProvider");
  }
  return context;
}
const AppcontextProvider = ({children}) => {
  const [favorites, setFavorites] = useState([]);
 
  const addToFavorites=function (book){
    const oldFavorites=[...favorites];
    const newFavorites=oldFavorites.concat(book);
    setFavorites(newFavorites);
    
    }
  const removeFromFavorites=function(id){
    const oldFavorites=[...favorites];
    const newFavorites=oldFavorites.filter((book)=>book.id!==id);
    setFavorites(newFavorites);
  }
  
/*
  const addToFavorites=(book)=>{
      const oldFavorites=[...favorites];
      const newFavorites=oldFavorites.concat(book);
      setFavorites(newFavorites);
  }
  
  
  const  removeFromFavorites=(id)=>{
    const oldFavorites=[...favorites];
    const newFavorites=oldFavorites.filter((book)=>book.id!==id);
    setFavorites(newFavorites);
  }
*/

  return (
   <>
   <AppContext.Provider value={{favorites,addToFavorites,removeFromFavorites}}>
    {children}
   </AppContext.Provider>
   </>
  );
};

export default AppcontextProvider;


