import React from 'react';
import ReactDOM from 'react-dom';
import RoutesList from './router/Routes';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <RoutesList></RoutesList>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
