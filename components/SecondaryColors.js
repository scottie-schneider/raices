import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

const ColorHolder = styled.div`  
  display: grid;
  grid-gap: 10px;
  color: #fff;
  grid-template-columns: 1fr 1fr 1fr;
  .darkGrey {
    width: 100px;
    height: 100px;
    background-color: #7F8C8D;
  }
  .grey {
    width: 100px;
    height: 100px;
    background-color: #95A5A6;
  }
  .accentGrey {
    width: 100px;
    height: 100px;
    background-color: #D3D9DD;
  }
  .backgroundGrey {
    width: 100px;
    height: 100px;
    background-color: #ECF0F1;
  }
`

export default function SecondaryColors() {
  return (
    <ColorHolder>
      <div className="darkGrey">Dark Grey</div>
      <div className="grey">Grey</div>
      <div className="accentGrey">Accent Grey</div>
      <div className="backgroundGrey">Background Grey</div>
    </ColorHolder>
  ); 
}