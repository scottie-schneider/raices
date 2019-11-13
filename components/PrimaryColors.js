import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

const ColorHolder = styled.div`  
  display: grid;
  grid-gap: 10px;
  color: #fff;
  grid-template-columns: 1fr 1fr 1fr;
  .blue {
    width: 100px;
    height: 100px;
    background-color: #3498DB;
  }
  .green {
    width: 100px;
    height: 100px;
    background-color: #2ECC71;
  }
  .red {
    width: 100px;
    height: 100px;
    background-color: #E74C3C;
  }
  .orange {
    width: 100px;
    height: 100px;
    background-color: #E67E22;
  }
  .purple {
    width: 100px;
    height: 100px;
    background-color: #8C13FC;
  }
`

export default function PrimaryColors() {
  return (
    <ColorHolder>
      <div className="blue">Blue</div>
      <div className="green">Green</div>
      <div className="red">Red</div>
      <div className="orange">Orange</div>
      <div className="purple">Purple</div>
    </ColorHolder>
  ); 
}
