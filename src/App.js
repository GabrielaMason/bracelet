// Styles
import "./App.css"
// Modules 
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import React, { createContext, useState } from "react";
import ReactSwitch from "react-switch";
// Components
import Home from "./Components/Home/Home";
import OurTechnology from "./Components/OurTechnology/OurTechnology";
import Scan from "./Components/Scan/Scan";
import Contact from "./Components/Contact/Contact";

export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <BrowserRouter>
          <nav class="navbar navbar-expand-lg bg-body-tertiary p-0">
            <div class="container-fluid">
              <a class="navbar-brand" href="/">
                <img alt="Logo" width="200" height="100" class="d-inline-block align-text-top" src={require("./Assets/Logo_LifeBand.svg").default}></img>
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/our-technology">Our Technology</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/scan">Scan</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="switch">
                <label className="mx-3 label">{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
                <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
              </div>
            </div>
          </nav>
          <main>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/our-technology" element={<OurTechnology />}></Route>
              <Route path="/scan" element={<Scan />}></Route>
              <Route path="/contact-us" element={<Contact />}></Route>
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

