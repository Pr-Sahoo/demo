import React, { useEffect, useState } from 'react';
import "../App.css";

function App() {
    const [darkMode, setdarkMode] = useState(false); // state to manage theme dark or light

    //effect to apply theme class to the body
    useEffect(() => {   
        if(darkMode) {
            document.body.classList.add("dark-theme");
        }else {
            document.body.classList.remove("dark-theme");
        }
    },[darkMode]);

    const toggleTheme = () => {
        setdarkMode(!darkMode);
    };

    return (
        <div className='App'>
            <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
            <button onClick={toggleTheme}>{darkMode ? "switch to dark" : "switch to Light"}</button>
        </div>
    );
}

export default App;