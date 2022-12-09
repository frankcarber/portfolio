import logo from './logo.svg';
import './App.css';
import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <main>
      <div>
        <div class="topnav">          
          <a href="#about">about</a>
          <a href="#projects">projects</a>
          <a href="#contact">contact</a>
        </div>
        <body className="App-body">
          <About />
          <Projects />
        </body>
      </div>      
    </main>

  );
}

export default App;
