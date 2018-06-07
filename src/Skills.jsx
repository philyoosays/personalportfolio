import React from 'react';

import './AboutMe.css'

export default function Skills(props) {
  return(
      <div className="flexboxcontainer">
        <div className="flexitem">
          <img src={props.iconone} className="fleximage" />
          <p>{props.labelone}</p>
        </div>
        <div className="flexitem">
          <img src={props.icontwo} className="fleximage" />
          <p>{props.labeltwo}</p>
        </div>
        <div className="flexitem">
          <img src={props.iconthree} className="fleximage" />
          <p>{props.labelthree}</p>
        </div>
        <div className="flexitem">
          <img src={props.iconfour} className="fleximage" />
          <p>{props.labelfour}</p>
        </div>
      </div>
  );
}
