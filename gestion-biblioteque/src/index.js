//3rd Parties Components
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import {Provider} from "react-redux";
import { createBrowserHistory } from "history";


//Custom Componets
import './index.css';
import App from './App';
import store from './store'


const hist = createBrowserHistory();

ReactDOM.render(
    <Provider store= {store}>
      <Router history={hist}>
        <App /> 
      </Router>
      
  </Provider>,
  document.getElementById('root')
);
