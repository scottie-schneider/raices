import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

import Image from './Image'
import SmallRatingsComponent from './SmallRatingsComponent';

const SmallHomeCardHolder = styled.div`
  display: flex;
  z-index: 1;
  position: relative;
  overflow: hidden;
  flex-direction: column;
  grid-gap: 0px;
  columns: 1fr;
  background-color: #fff;
  height: 134px;
  width: 88px;
  min-width: 88px;
  border-radius: 8px;
  transition: 0.3s;
  font-family: 'Fira Sans', sans-serif;
  margin-right: 10px;
  border: 1px solid #D3D9DD;
  color: #1E2227;
  .info {
    height: 46px;
    padding-top: 9px;
    padding-bottom: 9px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
    overflow: hidden;    
  }
  .address {
    min-height: 14px;
    flex: 1;
    font-size: 11px;
    font-weight: bold;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .price {
    font-size: 14px;
    color: #E67E22;
  }
`


export default function SmallHomeCard() {
  return (
    <SmallHomeCardHolder>
      <Image 
        src={"https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485388/Raices/HomePhotos/775_Henry_Smith_Street.jpg"}
        agent
        height={"88px"}
        width={"88px"}
        shadow={false}
      />
      <div className="info">
        <div className="address">123456 Harrel-Worthington St.</div>
        <div className="price">$360,000</div>
      </div>
    </SmallHomeCardHolder>
  ); 
}
