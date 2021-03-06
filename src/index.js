import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/main.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import HomePage from "./Components/Home/HomePage";
import NotFound from "./Components/NotFound";
import R3fIndex from "./Components/R3F/R3fIndex";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="r3f" element={<R3fIndex />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
