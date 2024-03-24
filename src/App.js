// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const [mode, setMode]=useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert(
      {
        message:message,
        type:type
      }
    )
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#393e46';
      showAlert('DarkMode Has Been Enabled','success')
      document.title='TextUtils - DarkMode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('LightMode Has Been Enabled','success')
      document.title='TextUtils - LightMode';
    }
  }


  return (
    <Router>
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
        <Routes>
        <Route path="/" element={<TextForm heading='Try TextUtils - Word Counter, Character Counter, Remove extra spaces' mode={mode} showAlert={showAlert} />} />
          <Route path="/about" element={<About mode={mode}/>} />
        </Routes>
      </div>
    </Router>
  );
}
 
export default App;
