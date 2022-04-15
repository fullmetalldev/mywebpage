import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import React, {useState} from 'react';
import "./App.css"




function App() {


    return (
        <div className="App">
            <Header/>
                <About/>
            <Footer/>
        </div>
    );
}

export default App;
