import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

import Image from './Image'
import LeadInfoBlock from './LeadInfoBlock';

const SmallLeadCardHolder = styled.div`
  display: flex;
  grid-gap: 0px;
  columns: 1fr;
  background-color: #fff;
  height: 134px;
  width: 140px;
  border-radius: 8px;
  box-shadow: 0 5px 10px 0 #D2D3D7;
  font-family: 'Fira Sans', sans-serif;
  overflow: hidden;
  margin-right: 15px;
  color: #1E2227;
`


export default function SmallLeadCard() {
  return (
    <SmallLeadCardHolder>
      <LeadInfoBlock />
    </SmallLeadCardHolder>
  ); 
}
