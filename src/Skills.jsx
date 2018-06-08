import React from 'react';

import './AboutMe.css'
import './Skills.css'

export default function Skills(props) {
  return(
      <div className="flexboxcontainer">
        <div className="flexitem">
          <img src={props.iconone} className="fleximage" alt="" />
          <p>{props.labelone}</p>
        </div>
        <div className="flexitem">
          <img src={props.icontwo} className="fleximage" alt="" />
          <p>{props.labeltwo}</p>
        </div>
        <div className="flexitem">
          <img src={props.iconthree} className="fleximage" alt="" />
          <p>{props.labelthree}</p>
        </div>
        <div className="flexitem">
          <img src={props.iconfour} className="fleximage" alt="" />
          <p>{props.labelfour}</p>
        </div>
      </div>
  );
}
