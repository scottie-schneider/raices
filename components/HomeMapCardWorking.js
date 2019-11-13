import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

import Image from './Image'
import SmallInfo from './SmallInfo';

const AgentMapCardHolder = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 0px;
  columns: 1fr;
  background-color: #fff;
  height: 228px;
  width: 330px;
  border-radius: 0px;
  box-shadow: 0 5px 10px 0 #D2D3D7;
  font-family: 'Fira Sans', sans-serif;
  overflow: hidden;
  color: #1E2227;
  border-bottom: 5px solid transparent;
  :hover {
    border-bottom: 5px solid #2ECC71;
  }
  .info {
    height: 94px;
    padding-top: 9px;
    padding-bottom: 9px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 10px;
  }
  .address {
    padding-top: 9px;
    font-size: 30px;
    font-display: bold;
  }
  .price {
    font-size: 24px;
    color: #E67E22;
  }
  .subInfo {
    padding-right: 9px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  .mapInfo {
    font-size: 15px;
  }
`


export default function AgentMapCard() {
  return (
    <AgentMapCardHolder>
      <Image 
        src={"https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485388/Raices/HomePhotos/775_Henry_Smith_Street.jpg"}      
        height={"139px"}
        width={"330px"}
        shadow={false}
      />
      <div className="info">
        <div className="address">123 Harrel St.</div>
        <div className="subInfo">
          <div className="price">$250,000</div>
          <div className="mapInfo">2 bd | 2 ba | 924 sqft</div>
        </div>        
      </div>
    </AgentMapCardHolder>
  ); 
}
