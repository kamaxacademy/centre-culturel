import logo from './logo.svg';
import './App.css';
import Card from './components/IdCard/Card';
import { useState } from 'react';
import useSetState from './components/CustomHooks/useSetState'
import Button from '@material-ui/core/Button';
import Bookshelf from './components/Books/Bookshelf'
import HomePage from './pages/HomePage';

function App() {
const [state, setstate] = useSetState({
    name: 'Sergio Fontai',
      email:'sergio.fontai@example.com',
      dob: '04/07/1995',
      phone: '076 282 62 56',
      nationality:'INDIAN',
      image: "../../assets/images/females.jpg",
      idCardNumber: "ID0001",
      showInputName: false,
      showInputEmail: false,
      showInputDob: false,
      showInputPhone: false,
      showInputNationality: false,
      themeColor: ['#ff6347', '#4169e1', '#004D40', "#3E2723", "#212121", "#263238"]
});
  const handleThemeClick = (theme) => {
    const card = document.body.getElementsByClassName("id-card")[0];
    card.style.backgroundColor = theme;
  }
  return (
    <div className="App">
    
   <Card
     name = {state.name} 
     dob = {state.dob}
      phone={state.phone} 
      nationality={state.nationality} 
      showInputName={state.showInputName} 
      showInputEmail = {state.showInputEmail}
      showInputDob = {state.showInputDob}
      showInputPhone = {state.showInputPhone}
      image={state.image}
      idCardNumber={state.idCardNumber}
      showInputNationality = {state.showInputNationality}

     />
     <div className="df">
        {state.themeColor.map(theme=>(<div className="box m-2 circle" style={{backgroundColor: theme}} onClick={()=>handleThemeClick(theme)}></div>))}
      </div>
     <Button variant="contained" color="primary">
      Hello World
    </Button>

    <Bookshelf />
     
     <HomePage />
    </div>
  );
}

export default App;
