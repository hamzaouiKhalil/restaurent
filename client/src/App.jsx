import { useEffect, useState } from "react";
import "./App.css";
import * as images from "./assests/index"
import ManageFood from "./mangeFood.jsx"
import Event from "./event.jsx"
import { Routes, Route, Link, Outlet, BrowserRouter } from "react-router-dom"





function App() {


  return (
    <>
      <BrowserRouter>

        <img id="logo" src={images.logo} />
        <div id="mainPContainer">
          <p id="mainP">We love sharing good food with great people. We bring over 30 years of industry experience and passion to Mk.
            With  dishes that are carefully designed to bring you a truly satisfying food experience.</p>
          <div id="linkContainer">
          <Link className="link" to="/manage">manage your food</Link>
          <Link className="link" to="/event">post events</Link>
          </div>

          <Routes>


            <Route path="/manage" element={<ManageFood />} />
            <Route path="/event" element={<Event />} />

          </Routes>



        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12941.77462909424!2d10.5999272!3d35.8135891!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8b77ff1cf6b5%3A0x2486a20a3973f4d3!2sRebootkamp!5e0!3m2!1sen!2stn!4v1701180927816!5m2!1sen!2stn" ></iframe>
        <footer>
          <p className="footerP" id="footer1" >© 2017 - 2024 . All Rights Reserved</p>
          <p className="footerP" id="contact"> Contact Us : 99 999 999  / email : MkRestaurent@gmail.com</p>
        </footer>
      </BrowserRouter>
    </>
  )
}

export default App;
