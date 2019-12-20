import React from 'react';

const MagnifyingGlass = (props) => (
  <svg height={props.height} width={props.width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
    <title>zoom</title>
    <g fill={props.fill} stroke={props.fill} strokeWidth="1">
      <line fill="none" strokeLinecap="round" x1="11.5" x2="8.328" y1="11.5" y2="8.328"/>
      <circle cx="5.5" cy="5.5" fill="none" r="4" stroke={props.fill} strokeLinecap="round"/>
    </g>
  </svg>
);

export default MagnifyingGlass;

