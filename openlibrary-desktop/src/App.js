
import './App.css';
import MiniDrawer from './component/NavigationDrawer';
import Home from './Pages/Home';
import { Link, Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Contact from './Pages/Contact';
import About from './Pages/About';

function App() {
  return (
    <Switch>
       <MiniDrawer />
      <Route exact path='/'  component={MiniDrawer}/>
      <Route exact path='/homepage' component={Home}/>
      <Route exact path='/contact' component={Contact}    
         
          
          />
      <Route path='/about' component={About}/>
    </Switch>
  );
}

export default App;
