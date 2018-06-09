import React from 'react';
import './Projects.css';

export default function Projects(props) {
  // {'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'}
  // const whatever = ((props.pageX - props.mouseX) /
  console.log(props)
  const projects = props.projects.map(item => {
    if(item.tech.hasOwnProperty('list')) {
      let list = item.tech.list.forEach(data => {
        return (<li>data</li>)
      })
    }
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
            <p className="description">{item.tech.text}</p>
            <ul>{projects}</ul>
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
