
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, {useState} from 'react';
function App() {
  const [mode, setMode] = useState("dark");
  const toogle = () => {
    if(mode === "light"){
      setMode("dark");
    }else{setMode("light")};
  }
  return (
    <>
      {/* <Navbar title= "Homelander" about="Homelander"/> */}
      <Navbar title="Icoder" about="blog" toogle={toogle} mode={mode}/>
      <div className="container my-4">
      <TextForm heading="Enter text to analyze"/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;