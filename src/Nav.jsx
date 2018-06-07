import React from 'react';
import './Nav.css';

export default function Nav(props) {
  let navProject =
    props.selected === 'projects' ?
      <p className="navtext navitemselected" onClick={() => {props.changeNav('projects')}}>Code Projects</p>
      : <p className="navtext navitem" onClick={() => {props.changeNav('projects')}}>Code Projects</p>
  let navAbout =
    props.selected === 'about' ?
      <p className="navtext navitemselected" onClick={() => {props.changeNav('about')}}>About Me</p>
      : <p className="navtext navitem" onClick={() => {props.changeNav('about')}}>About Me</p>
  let navContact =
    props.selected === 'contact' ?
      <p className="navtext navitemselected" onClick={() => {props.changeNav('contact')}}>Contact</p>
      : <p className="navtext navitem" onClick={() => {props.changeNav('contact')}}>Contact</p>
  return(
    <div className="navcontainer">
      {navProject}
      {navAbout}
      {navContact}
    </div>
  );
}
