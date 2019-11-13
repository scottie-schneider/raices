import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

import Image from './Image'
import LargeRatingsComponent from './LargeRatingsComponent';
import AgentInfoBlock from './AgentInfoBlock';

const AgentMapCardHolder = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 0px;
  columns: 1fr;
  background-color: #fff;
  height: 226px;
  width: 150px;
  border-radius: 8px;
  box-shadow: 0 5px 10px 0 #D2D3D7;
  font-family: 'Fira Sans', sans-serif;
  overflow: hidden;
  color: #1E2227;
  margin-bottom: 10px;
  :hover {
    box-shadow: 0 5px 10px 0 #3498DB;
  }
  .info {
    height: 94px;
    padding-top: 2px;
    padding-bottom: 9px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 10px;
  }
  .name {
    font-size: 20px;
    font-display: bold;
  }
  .specialties {
    font-size: 12px;
  }
  .ratings {
    font-size: 12px;
  }
`


export default function AgentMapCard() {
  return (
    <AgentMapCardHolder>
      <Image 
        src={"https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485457/Raices/AgentPhotos/Jim_Johnson.jpg"}
        agent
        height={"150px"}
        width={"150px"}
        shadow={false}
      />
      {/* <div className="info">
        <div className="name">Jim Johnson</div>
        <div className="specialties">Negotiation, Property Repair</div>
        <LargeRatingsComponent />
      </div> */}
      <AgentInfoBlock />
    </AgentMapCardHolder>
  ); 
}
