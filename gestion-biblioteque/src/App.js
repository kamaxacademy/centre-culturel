import logo from './logo.svg';
import './App.css';
import Card from './components/IdCard/Card';
import { useState } from 'react';
import useSetState from './components/CustomHooks/useSetState'

function App() {
const [state, setstate] = useSetState({
    name: 'Sergio Fontai',
      email:'sergio.fontai@example.com',
      dob: '04/07/1995',
      phone: '076 282 62 56',
      nationality:'INDIAN',
      image: "./assets/images/females.jpg",
      idCardNumber: "ID0001",
      showInputName: false,
      showInputEmail: false,
      showInputDob: false,
      showInputPhone: false,
      showInputNationality: false,
      themeColor: ['#ff6347', '#4169e1', '#004D40', "#3E2723", "#212121", "#263238"]
});
  
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
    </div>
  );
}

export default App;
