import logo from './logo.svg';
import './App.css';
import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Project1 from "./components/Project1";
import {useState, useEffect} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
const words = ["I'm [PLAYER 1].", "I make creative tech & interfaces."];





function App() {

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === words.length - 1 && subIndex === words[index].length) {
      return;
    }

    if (
      subIndex === words[index].length + 1 && 
      index !== words.length - 1 && 
      !reverse 
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 :
                150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
  //useEffect(() => {
    //const timeout2 = setTimeout(() => {
      //setBlink((prev) => !prev);
    //}, 2000);
    //return () => clearTimeout(timeout2);
 //}, [blink]);



  return (
    <main>
      <div>
      
        <div class="topnav">          
          <a href="#home">home</a>
          <a href="#project-anchor">projects</a>
          <a href="#contact">about</a>
        </div>
  
        <body className="App-body" id="home">
          <div class = "h1-top">
            <h1> Hello! {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`} </h1>
          </div>
          <About />
          <Projects />
        </body>    
      </div>
    </main>
    
  );
}

export default App;
