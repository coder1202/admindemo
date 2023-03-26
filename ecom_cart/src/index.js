import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ShopcontextProvider from './context/Shopcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ShopcontextProvider>
    <App />
    </ShopcontextProvider>

    </BrowserRouter>

  </React.StrictMode>
);

reportWebVitals();
