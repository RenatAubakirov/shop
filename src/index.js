import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';  // Импортируем BrowserRouter
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router> {/* Оборачиваем приложение в Router */}
      <App />
    </Router>
  </React.StrictMode>
);


reportWebVitals();
