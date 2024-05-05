import ReactDOM from 'react-dom/client';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './styles/index.scss';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <App />
  </Router>
);
