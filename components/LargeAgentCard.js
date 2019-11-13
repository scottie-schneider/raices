import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

import Image from './Image'
import AgentInfoBlock from './AgentInfoBlock';

const LargeAgentCardHolder = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: content-box;
  grid-gap: 0px;
  columns: 1fr;
  background-color: #fff;
  height: 344px;
  max-height: 344px;
  width: 200px;
  max-width: 200px;
  min-width: 200px;
  border-radius: 8px;
  box-shadow: 0 5px 10px 0 #D2D3D7;
  font-family: 'Fira Sans', sans-serif;
  overflow: hidden;
  color: #1E2227;
  margin-right: 20px;
  margin-left: 10px;
  .info {
    height: 94px;
    padding-top: 9px;
    padding-bottom: 9px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 10px;
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

export default function LargeAgentCard() {
  return (
    <LargeAgentCardHolder>
      <Image 
        src={"https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485457/Raices/AgentPhotos/Jim_Johnson.jpg"}
        agent
        height={"250px"}
        width={"200px"}
        shadow={false}
      />
      <AgentInfoBlock />
    </LargeAgentCardHolder>
  ); 
}
