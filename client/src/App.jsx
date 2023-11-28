import { useEffect, useState } from "react";
import "./App.css";
import * as images from "./assests/index"
import Main from "./components/main"
import axios from "axios"

function App() {

  
  return (
  <>
   <img id="logo" src={images.logo}/>
   <div id = "mainPContainer">
   <p id = "mainP">We love sharing good food with great people. We bring over 30 years of industry experience and passion to Mk.
   With  dishes that are carefully designed to bring you a truly satisfying food experience.</p>
   <Main />
   </div>
   
   
  </>
  )
}

export default App;
