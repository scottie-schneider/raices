import React from 'react';
import styled from 'styled-components'

import LargeRatingsComponent from './LargeRatingsComponent';

const InfoBlockHolder = styled.div`
  grid-area: info;
  border: 1px solid transparent;
  .info {
    height: 94px;
    padding-top: 9px;
    padding-bottom: 9px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .name {
    font-size: 20px;
  }
  .specialties {
    font-size: 12px;
  }
  .ratings {
    font-size: 12px;
  }
`


export default function AgentInfoBlock() {
  return (
    <InfoBlockHolder>
      <div className="info">
        <div className="name">Jim Johnson</div>
        <div className="specialties">Negotiation, Property Repair</div>
        <LargeRatingsComponent />
      </div>
    </InfoBlockHolder>
  ); 
}
