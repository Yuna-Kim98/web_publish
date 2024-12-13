import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import AppAirbnb from './component/airbnb/AppAirbnb.jsx';
// import AppAvatar from './component/avatar/AppAvatar.jsx';
// import AppCounter from './component/counter2/AppCounter.jsx';
// import AppBestSeller from './component/yes24_practice/AppBestSeller.jsx';
// import AppOlive from './component/oliveyoung/AppOlive.jsx';
// import AppOliveYoung from './component/oliveyoung_practice/AppOliveYoung.jsx'
// import AppAladin from './component/aladin/AppAladin.jsx';
import AppAladin2 from './component/aladin2/AppAladin2.jsx';
import Appform from './component/form/AppForm.jsx';
import CgvLoginForm from './component/form/CgvLoginForm.jsx';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Appform />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
