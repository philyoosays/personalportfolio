import React from 'react';

export default function ProjectHighlights(props) {
  const highlights = props.highlights.map((highlight, index) => {
    return(
      <li className="highlightitem" key={index}>{highlight}</li>
    );
  })
  return(
    <ul className="highlightlist">
      {highlights}
    </ul>
  );
}
