import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

const ColorHolder = styled.div`  
  display: grid;
  grid-gap: 10px;
  color: #fff;
  grid-template-columns: 1fr 1fr 1fr;
  .black {
    width: 100px;
    height: 100px;
    background-color: #1E2227;
  }
  .lowerPriorityText {
    width: 100px;
    height: 100px;
    background-color: #42464C;
  }
  .white {
    width: 100px;
    height: 100px;
    background-color: #fff;
  }
`

export default function BasicColors() {
  return (
    <ColorHolder>
      <div className="black">Black</div>
      <div className="lowerPriorityText">Lower Priority Text</div>
      <div className="white">White</div>
    </ColorHolder>
  ); 
}