import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import NotFound from './component/NotFound';
import Layout from './component/Layout';
import AllProducts from './pages/AllProducts';
import CartList from './pages/CartList';

import { Context } from './context/Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<App />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<ContactUs />} />
            <Route path='products' element={<AllProducts />} />
            <Route path='cartList' element={<CartList />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Context>
    </BrowserRouter>
  </React.StrictMode>,
);
reportWebVitals();
