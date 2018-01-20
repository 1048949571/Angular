import React from 'react';
import ReactDOM from 'react-dom';

import Home from './containers/Home'
import Login from './containers/Login'
import App from './App.js'
import store from './Store/store'
import Reducers from './containers/Register/Register'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
//import mock from '../../api/mock'
import './App.scss'
//mock()
ReactDOM.render(
   <Router>
    <Provider store={store()}>
    <App />  
  </Provider>
  </Router> 
    
   ,document.getElementById('root'));
    
