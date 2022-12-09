import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './common/Header';
import { BrowserRouter } from "react-router-dom"
import axios from 'axios';
import { AuthProvider } from './context/AuthProvider';
// set main base URL
axios.defaults.baseURL='http://127.0.0.1:8000/api';
axios.defaults.headers.common["Authorization"]="Bearer "+localStorage.getItem("token");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Header />
      </AuthProvider>
    </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
