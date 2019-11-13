import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

import Image from './Image'

const HouseInterfaceList = styled.div`
  display: grid;
  grid-gap: 10px;
  columns: 1fr;
`

const HouseInterfaceHolder = styled.div`
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  .headline {
    font-size: 17px;
    font-weight: bold;;
  }
  .subtitle {
    font-size: 15px;
    color: #D3D9DD;
    width: auto;
  }
  .price {
    font-size: 17px;
    color: #E67E22;
  }
`

export default function HouseListSelect() {
  return (
    <HouseInterfaceList>
      <HouseInterfaceHolder>        
        <Image 
          src={"https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485388/Raices/HomePhotos/352_Hall_St.jpg"}
          round={true}
          height={"88px"}
          width={"88px"}
          shadow={true}
        />
        <div className="text">
          <div className="headline">My Favorites</div>
          <div className="subtitle">200 homes</div>
          <div className="price">Avg Price: $1,200,021</div>
        </div>
      </HouseInterfaceHolder>
      <HouseInterfaceHolder>
        <Image 
          src={"https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485388/Raices/HomePhotos/352_Hall_St.jpg"}
          round={true}
          height={"88px"}
          width={"88px"}
          shadow={true}
        />
        <div className="text">
          <div className="headline">My Favorites</div>
          <div className="subtitle">200 homes</div>
          <div className="price">Avg Price: $1,200,021</div>
        </div>
      </HouseInterfaceHolder>
      <HouseInterfaceHolder>
        <Image 
          src={"https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485388/Raices/HomePhotos/352_Hall_St.jpg"}
          round={true}
          height={"88px"}
          width={"88px"}
          shadow={true}
        />
        <div className="text">
          <div className="headline">My Favorites</div>
          <div className="subtitle">200 homes</div>
          <div className="price">Avg Price: $1,200,021</div>
        </div>
      </HouseInterfaceHolder>
    </HouseInterfaceList>
  ); 
}
