// Import React Components
import React from 'react';
import { Route, Switch } from "react-router-dom";

//Import CSS
import './App.css'

// Import Custom Components
import ResponsiveDrawer from './components/Drawer/ResponsiveDrawer';

export default function App(){
    return (
        <Switch>
            <Route path='/' component={ResponsiveDrawer}/>
        </Switch>
      
    );
}


