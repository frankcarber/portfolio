import React from "react";
import './About.css';

export default function About() {
    return (
 
      <section class = "fit" id="about">
          <div className="centered">
            <p className="text">
              inspired by nostalgic // irreverant visual design.
            </p>
          </div>

          <div className='bg-image hover-zoom'>
            <img src='https://i.pinimg.com/originals/ed/76/df/ed76df1b5da78ca7317a01cf9a648d0c.gif' style={{width:400, height:300}}/>
          </div>

          <div className="centered">
            <a href = "#project-anchor">
              <p className="text">
                ↓ explore my projects below ↓
              </p>        
            </a>
        </div>

      </section>

    );
  }