
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
// import DarkBtn from './components/DarkBtn';

import React, {useState} from 'react';
function App() {
  const[alert, setAlert]= useState(null);
  const showAlert = (message, type) => {
    setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    showAlert(null);
  },3000);
  };

  const [mode, setMode] = useState("dark");
  const toogle = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("dark mode has been applied", "success");
    }else{setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been applied", "primary");
    };
  }
  return (
    <>
      {/* <Navbar title= "Homelander" about="Homelander"/> */}
      <Navbar title="Icoder" about="blog" toogle={toogle} mode={mode}/>
      <Alert alert= {alert}/>
      <div className="container my-4">
      <TextForm heading="Enter text to analyze" showAlert={showAlert} mode={mode}/>
      {/* <About/> */}
      {/* <DarkBtn/> */}
      </div>
    </>
  );
}

export default App;