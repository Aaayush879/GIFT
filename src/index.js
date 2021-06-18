import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import log from './log.jpg';



ReactDOM.render(
  <React.StrictMode>
    <div style={{width:'100%' , height:'100%' , backgroundImage:`url(${log})`, backgroundSize:'cover' , backgroundRepeat:"no-repeat"}} >
      <App/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
