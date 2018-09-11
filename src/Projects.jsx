import React from 'react';
import ProjectHighlights from './ProjectHighlights'
import './Projects.css';

export default function Projects(props) {
  const projects = props.projects.map(item => {
    return(
      <div className="maincontainer">
        <div className="header">
          <a href={item.link} target="_blank" rel="noopener noreferrer"><h1 className="projectheader">{item.name}</h1></a>
          <a href={item.link} target="_blank" rel="noopener noreferrer"><p className="projectlink">{item.link}</p></a>
          { item.heroku ? 'As this project is hosted on a free server, it\'ll take 10 to 15 seconds to load the first time. Inactivity causes the server to spin down.' : '' }
        </div>
        <div className="flexcontainer">
          <div className="projectcontainer">
            <h3>Summary</h3>
            <p className="description">{item.desc}</p>
            <h3>Tech</h3>
            <p className="description">{item.tech}</p>
            <div className="github">
              <div className="arrow" />
              <a href={item.github} target="_blank" rel="noopener noreferrer">Github Repo</a>
            </div>
          </div>
          <div className="projectimgcontainer">
            {item.zoom ? <img
              src={item.thumb}
              className="projectimg"
              onMouseMove={(e) => {props.makeZoom(e)}}
              alt=''
            /> : <img
              src={item.thumb}
              className="projectimgnozoom"
              alt=''
            />}
          </div>
        </div>
        <div className="maincontainer">
          <p className="description"><em>{item.note}</em></p>
          <h3 className="undermain">Highlights</h3>
          <ProjectHighlights highlights={item.highlights} />
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
