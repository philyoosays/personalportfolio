import React from 'react';
import './Projects.css';

export default function Projects(props) {
  // {'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'}
  // const whatever = ((props.pageX - props.mouseX) /
  const projects = props.projects.map(item => {
    return(
      <div className="maincontainer">
        <div className="header">
          <a href={item.link}><h1 className="projectheader">{item.name}</h1></a>
          <a href={item.link}><p className="projectlink">{item.link}</p></a>
        </div>
        <div className="flexcontainer">
          <div className="projectcontainer">
            <p className="description">{item.desc}</p>
            <p className="description">{item.tech}</p>
            <a href={item.github}>Github</a>
          </div>
          <div className="projectimgcontainer">
            <img
              src={item.thumb}
              className="projectimg"
              onMouseMove={(e) => {props.makeZoom(e)}}
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
