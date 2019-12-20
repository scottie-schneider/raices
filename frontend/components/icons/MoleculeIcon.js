import React from 'react';

const MoleculeIcon = (props) => (
  <svg height={props.height} width={props.width} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <title>molecule</title>
    <g fill={props.fill} stroke={props.fill} strokeWidth="1">
      <circle cx="2.5" cy="2.5" fill="none" r="2" stroke={props.fill} strokeLinecap="round"/>
      <circle cx="2.5" cy="13.5" fill="none" r="2" stroke={props.fill} strokeLinecap="round"/>
      <circle cx="13" cy="8" fill="none" r="2.5" stroke={props.fill} strokeLinecap="round"/>
      <line fill="none" strokeLinecap="round" x1="2.5" x2="2.5" y1="6.5" y2="9.5"/>
      <line fill="none" strokeLinecap="round" x1="5.92" x2="9.154" y1="4.291" y2="5.985"/>
      <line fill="none" strokeLinecap="round" x1="5.92" x2="9.154" y1="11.709" y2="10.015"/>
    </g>
  </svg>
)
export default MoleculeIcon;