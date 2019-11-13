import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

import Image from './Image'
import SmallRatingsComponent from './SmallRatingsComponent';

const LargeAgentCardHolder = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 0px;
  columns: 1fr;
  background-color: #fff;
  height: 134px;
  width: 88px;
  border-radius: 8px;
  box-shadow: 0 5px 10px 0 #D2D3D7;
  font-family: 'Fira Sans', sans-serif;
  overflow: hidden;
  margin-right: 15px;
  color: #1E2227;
  .info {
    height: 46px;
    padding-top: 9px;
    padding-bottom: 9px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 10px;
  }
  .name {
    font-size: 12px;
  }
  .specialties {
    font-size: 12px;
  }
  .ratings {
    font-size: 12px;
  }
`


export default function SmallAgentCard() {
  return (
    <LargeAgentCardHolder>
      <Image 
        src={"https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485457/Raices/AgentPhotos/Jim_Johnson.jpg"}
        agent
        height={"88px"}
        width={"88px"}
        shadow={false}
      />
      <div className="info">
        <div className="name">Jim Johnson</div>
        <SmallRatingsComponent />
      </div>
    </LargeAgentCardHolder>
  ); 
}
