import React from "react";
import { projects } from "../data";
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className='bg-image hover-zoom'>
        <img src='https://i.pinimg.com/originals/ed/76/df/ed76df1b5da78ca7317a01cf9a648d0c.gif' style={{width:400, height:300}}/>
      </div>
      <div className="centered">
          <h1 className="title">
            Stuff I've made
          </h1>
          <p className="text">
            explore my projects below
          </p>
        </div>

      <div>
        <h3 className="title">Project1</h3>
        <p className="text-left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
        </p>
      </div>

      <div className="right">
        <h3 className="title">Project2</h3>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
        </p>
      </div>

      <div>
        <h3 className="title">Project3</h3>
        <p className="text-left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
        </p>
      </div>

      <div className="right">
        <h3 className="title">Project4</h3>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
        </p>
      </div>

      <div className="img-style2">
        <img src='https://i.gifer.com/23vi.gif'/>
      </div>
      <div className="img-style2">
        <img src='https://i.gifer.com/YTiF.gif' style={{width:1200, height:400}}/>
      </div>




      <div>

      </div>
    </section>
      
  );
}
