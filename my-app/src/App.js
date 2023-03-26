//import logo from './logo.svg';


import Navbar from './component/Navbar'
import Textform from './component/Textform'


import './App.css';
import About from './component/About';
import Alert from './component/Alert';
import LoginForm from './component/LoginForm';
import Usereffect from './component/Usereffect';
import Usereffectcleanup from "./component/Useeffectcleanup"
import React, { useState } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UseEffectAPI from './component/useEffectAPI/UseEffectAPI';
import Uncontrol from './component/Uncontrol';


function App() {
    const [alert, setAlert] = useState(null);
    const showAlert = (message, type) => {
        setAlert({
            message: message,
            type: type
        });
        setTimeout(() => {
            setAlert(null);

        }, 3000);
    }
    return (
        <>
            <Router>
                <Navbar title="Texteditor2" />
                <Usereffect/>
                
                
                
                <Alert alert={alert} />
                <div className="container my-3" >


                </div>
            <Routes>
                    <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter The text to analyzeee" />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/LoginForm" element={<LoginForm />} />
                    <Route exact path="/Usereffectcleanup" element={<Usereffectcleanup />} />
                    <Route exact path="/UseEffectAPI" element={<UseEffectAPI/>} />
                    <Route exact path="/Uncontrol" element={<Uncontrol/>} />
                </Routes>
            </Router>
        </>
    );
}

export default App;

