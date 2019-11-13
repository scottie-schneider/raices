import React from 'react';

const StarIcon = (props) => (
  <svg height={props.height} width={props.width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <title>star rate</title>
    <g fill="#ff8c00">
      <path d="M62.948,24.682A1,1,0,0,0,62,24H39.731L32.953,2.659a1,1,0,0,0-1.906,0L24.269,24H2a1,1,0,0,0-.6,1.8l17.77,13.426L12.179,60.729a1,1,0,0,0,1.539,1.118L32,48.564,50.282,61.847a1,1,0,0,0,1.539-1.118L44.833,39.224,62.6,25.8A1,1,0,0,0,62.948,24.682Z" fill={props.fill}/>
    </g>
  </svg>
);

export default StarIcon;


