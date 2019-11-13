import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

import Image from './Image'
import LeadInfoBlock from './LeadInfoBlock';
import AgentIcon from './icons/AgentIcon';

const LargeLeadCardHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
`

export default function LargeLeadCard() {
  return (
    <LargeLeadCardHolder>
      <AgentIcon 
        height={150}
        width={150}
        fill={"#7F8C8D"}
      />
      <LeadInfoBlock />
    </LargeLeadCardHolder>
  ); 
}
