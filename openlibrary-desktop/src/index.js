import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link, Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Home from './Pages/Home';
import MiniDrawer from './component/NavigationDrawer';
import {Provider} from "react-redux";
import store from './store'
ReactDOM.render(

  <Provider store={store}>
    <Router>
        <App /> 
      </Router> 
  </Provider>,
      
  document.getElementById('root')
);