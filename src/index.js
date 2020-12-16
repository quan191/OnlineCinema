import React from 'react';
import ReactDOM from 'react-dom';
import './css/app.css'
import reportWebVitals from './reportWebVitals';
import App from './components/app'
import {Router} from 'react-router-dom'
import {history} from './history'
ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
