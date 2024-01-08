
import React from "react";
import './../styles/App.css';
import About from "./About";
import Home from "./Home";
import { Route,Routes } from "react-router-dom";
import Nav from "./Nav";
const App = () => {
  return (
    <div>
      <Nav/>       
       <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
        </Routes>
     
    </div>
  )
}

export default App
