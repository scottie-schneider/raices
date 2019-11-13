import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

import Image from './Image'
import SmallInfo from './SmallInfo';

const HomeInterfaceList = styled.div`
  display: grid;
  grid-gap: 10px;
  columns: 1fr;
`

const HomeInterfaceHolder = styled.div`
  font-family: 'Fira Sans', sans-serif; 
  width: 300px;
  flex-direction: column;
  height: 88px; /* 1 */
  flex-direction: row;
  flex-wrap: wrap;
  min-height: 0px;
  align-items: center;
  display: flex;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 5px 10px 0 #D2D3D7;
  img {
    float: left;
    margin-right: 6px;
  }
  .text {
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  .address {
    font-size: 20px;
  }
  .info {
    font-size: 12px;
  }
  .price {
    font-size: 17px;
    color: #E67E22;
  }
`

export default function SmallHorizontalHomeCard() {
  return (
    <HomeInterfaceList>
      <HomeInterfaceHolder>        
        <Image 
          src={"https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485388/Raices/HomePhotos/775_Henry_Smith_Street.jpg"}
          round={true}
          height={"88px"}
          width={"88px"}
          shadow={false}
        />
        <div className="text">
          <div className="address">123 Harrel St.</div>
          <div className="info"><SmallInfo /></div>
          <div className="price">$360,000</div>
        </div>
      </HomeInterfaceHolder>
      <HomeInterfaceHolder>
        <Image 
          src={"https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485388/Raices/HomePhotos/775_Henry_Smith_Street.jpg"}
          round={true}
          height={"88px"}
          width={"88px"}
          shadow={false}
        />
        <div className="text">
          <div className="address">123 Harrel St.</div>
          <div className="info"><SmallInfo /></div>
          <div className="price">$360,000</div>
        </div>
      </HomeInterfaceHolder>
      <HomeInterfaceHolder>
        <Image 
          src={"https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485388/Raices/HomePhotos/775_Henry_Smith_Street.jpg"}
          round={true}
          height={"88px"}
          width={"88px"}
          shadow={false}
        />
        <div className="text">
          <div className="address">123 Harrel St.</div>
          <div className="info"><SmallInfo /></div>
          <div className="price">$360,000</div>
        </div>
      </HomeInterfaceHolder>
    </HomeInterfaceList>
  ); 
}
