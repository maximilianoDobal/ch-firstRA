import '../node_modules/react-app-polyfill/ie9';
import '../node_modules/react-app-polyfill/stable';
import '../node_modules/core-js/es/object/entries'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
if(!Object.entries){
  Object.entries =function (obj) {
    var ownProps = Object.keys(obj), i =ownProps.length, resArray = new Array(i);
    while (i--)
    resArray[i] = [ownProps[i], obj[ownProps[i]]];
    return resArray
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
