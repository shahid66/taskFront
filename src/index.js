import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import ReactDOM from 'react-dom/client';
import 'react-loading-skeleton/dist/skeleton.css';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import 'remixicon/fonts/remixicon.css';
import App from './App';
import './Components/assets/css/style.css';
import Store from './app/index';
import './index.css';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Provider store={Store}>
      <App />
      
    </Provider>
  
);


