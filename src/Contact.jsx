import React from 'react';
import './Contact.css'

export default function Contact() {
  return(
    <div className="container">
      <div className="contactcontainer">
        <h3 className="contactheader">EMAIL</h3><p className="contacttext">philyoomail@gmail.com</p>
      </div>
      <div className="contactcontainer">
        <h3 className="contactheader">GITHUB</h3><a href="https://github.com/philyoosays"><p className="contacttext">github.com/philyoosays</p></a>
      </div>
      <div className="contactcontainer">
        <h3 className="contactheader">LINKEDIN</h3><a href="https://www.linkedin.com/in/philyoo/"><p className="contacttext">linkedin.com/in/philyoo</p></a>
      </div>
    </div>
  );
}
