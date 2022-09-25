import React from 'react';
import ReactDOM from 'react-dom/client';

import {HashRouter as Router, useRoutes} from 'react-router-dom';


import './assets/css/base.css'

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App/>
  </Router>
);

