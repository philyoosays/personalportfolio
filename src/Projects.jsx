import React from 'react';
import './Projects.css';

export default function Projects(props) {

  const projects = props.projects.map(item => {
    return(
      <div className="maincontainer">
        <div className="header">
          <a href={item.link}><h1 className="projectheader">{item.name}</h1></a>
          <a href={item.link}><p className="projectlink">{item.link}</p></a>
        </div>
        <div className="flexcontainer">
          <div className="projectcontainer">
            <h3>Summary</h3>
            <p className="description">{item.desc}</p>
            <h3>Tech</h3>
            <p className="description">{item.tech}</p>
            <a href={item.github}>Github</a>
          </div>
          <div className="projectimgcontainer">
            <img
              src={item.thumb}
              className="projectimg"
              onMouseMove={(e) => {props.makeZoom(e)}}
              alt=''
            />
          </div>
        </div>
        <hr />
      </div>
    );
  })
  return(
    <div>
      {projects}
    </div>
  );
}
