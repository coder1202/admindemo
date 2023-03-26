import React from 'react'
import Header from './components/Header';
import Login from "./components/Login";
import {Routes,Route} from "react-router-dom";
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Error from "./components/Error";
import PasswordReset from './components/PasswordReset';
import ForgotPassword from './components/ForgotPassword';


const App= () => {
  return (
    <>
    <div>
     <Header/>
     <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/dash" element={<Dashboard/>}/>
        <Route path="/password-reset" element={<PasswordReset />} />
        <Route path="/forgotpassword/:id/:token" element={<ForgotPassword />} />
        <Route path="*" element={<Error/>}></Route>
     </Routes>
    </div>
 
    </>
    
  )
}

export default App
