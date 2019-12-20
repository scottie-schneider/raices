import React from 'react';

const SearchPropertyIcon = (props) => (
  <svg height={props.height} width={props.width} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
	<title>search property</title>
	<g fill={props.fill}>
		<path d="M30.614,16.211l-9-7a1,1,0,0,0-1.228,0l-9,7A1,1,0,0,0,11,17V28a1,1,0,0,0,1,1h6V22h6v7h6a1,1,0,0,0,1-1V17A1,1,0,0,0,30.614,16.211Z"/>
		<path d="M36.477,33.649a20.211,20.211,0,0,1-2.828,2.828L44.086,46.914l2.828-2.828Z"/>
		<path d="M21,39A18,18,0,1,1,39,21,18.021,18.021,0,0,1,21,39ZM21,5A16,16,0,1,0,37,21,16.019,16.019,0,0,0,21,5Z" fill={props.fill}/>
	</g>
</svg>
);

export default SearchPropertyIcon;

