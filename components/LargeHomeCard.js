import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

import Image from './Image'
import SmallInfo from './SmallInfo';

const LargeHomeCardList = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`

const LargeHomeCardHolder = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 0px;
  columns: 1fr;
  background-color: #fff;
  height: 344px;
  width: 200px;
  border-radius: 8px;
  box-shadow: 0 5px 10px 0 #D2D3D7;
  font-family: 'Fira Sans', sans-serif;
  overflow: hidden;
  color: #1E2227;
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
    font-size: 20px;
  }
  .price {
    font-size: 24px;
    color: #E67E22;
  }
  .ratings {
    font-size: 12px;
  }
`


export default function LargeHomeCard() {
  return (
    <LargeHomeCardList>
      <LargeHomeCardHolder>
        <Image 
          src={"https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485388/Raices/HomePhotos/775_Henry_Smith_Street.jpg"}
          agent
          height={"250px"}
          width={"200px"}
          shadow={false}
        />
        <div className="info">
          <div className="address">123 Harrel Dr.</div>
          <div className="price">$250,000</div>
          <SmallInfo />
        </div>
      </LargeHomeCardHolder>
      <LargeHomeCardHolder>
        <Image 
          src={"https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485388/Raices/HomePhotos/775_Henry_Smith_Street.jpg"}
          agent
          height={"250px"}
          width={"200px"}
          shadow={false}
        />
        <div className="info">
          <div className="address">123 Harrel Dr.</div>
          <div className="price">$250,000</div>
          <SmallInfo />
        </div>
      </LargeHomeCardHolder>
      <LargeHomeCardHolder>
        <Image 
          src={"https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485388/Raices/HomePhotos/775_Henry_Smith_Street.jpg"}
          agent
          height={"250px"}
          width={"200px"}
          shadow={false}
        />
        <div className="info">
          <div className="address">123 Harrel Dr.</div>
          <div className="price">$250,000</div>
          <SmallInfo />
        </div>
      </LargeHomeCardHolder>
      <LargeHomeCardHolder>
        <Image 
          src={"https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485388/Raices/HomePhotos/775_Henry_Smith_Street.jpg"}
          agent
          height={"250px"}
          width={"200px"}
          shadow={false}
        />
        <div className="info">
          <div className="address">123 Harrel Dr.</div>
          <div className="price">$250,000</div>
          <SmallInfo />
        </div>
      </LargeHomeCardHolder>
    </LargeHomeCardList>    
  ); 
}
