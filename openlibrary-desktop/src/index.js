import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link, Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Home from './Pages/Home';
import MiniDrawer from './component/NavigationDrawer';

ReactDOM.render(
      <Router >
        <App /> 

      </Router> ,
  document.getElementById('root')
);