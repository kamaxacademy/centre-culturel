
import './App.css';
import MiniDrawer from './component/NavigationDrawer';
import Home from './Pages/Home';
import { Link, Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Contact from './Pages/Contact';
import About from './Pages/About';

function App() {
  return (
    <Switch>
      <Route exact path='/'  component={MiniDrawer}/>
      <Route path='/homepage' component={Home}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/about' component={About}/>
    </Switch>
  );
}

export default App;
