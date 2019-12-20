import React from 'react';

const PageIcon = (props) => (
  <svg height={props.height} width={props.width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <title>sidebar</title>
    <g fill={props.fill} stroke={props.fill} strokeLinecap="square" transform="translate(0.5 0.5)">
      <rect height="48" width="58" fill="none" stroke={props.fill} x="3" y="8"/>
      <line fill="none" stroke={props.fill} strokeLinecap="butt" x1="38" x2="38" y1="8" y2="56"/>
      <line fill="none" x1="45" x2="54" y1="28" y2="28"/>
      <line fill="none" x1="45" x2="54" y1="20" y2="20"/>
      <line fill="none" x1="45" x2="54" y1="36" y2="36"/>
      <line fill="none" x1="45" x2="54" y1="44" y2="44"/>
    </g>
  </svg>
)
export default PageIcon;