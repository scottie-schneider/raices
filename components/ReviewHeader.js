import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

import Image from './Image'
import StarIcon from './icons/StarIcon'

const ReviewHeaderHolder = styled.div`
  width: 265px;
  margin-bottom: 10px;
  border-radius: 8px;
  font-family: 'Fira Sans', sans-serif;
  overflow: hidden;
  color: #1E2227;
  border-bottom: 5px solid transparent;
  :hover {
    border-bottom: 5px solid #2ECC71;
  }
  .reviewHeader {
    display: flex;
    position: relative;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    margin-left: 5px;
    margin-top: 10px;
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    height: 100%;
    img {
      float: left;
      margin-right: 6px;
    }
    .time {
      font-size: 11px;
      position: absolute;
      bottom: 2px;
      right: 10px;
      text-transform: uppercase; color: #999
    }
  }
`


export default function ReviewHeader() {
  return (
    <ReviewHeaderHolder>
      <div className="reviewHeader">
        <Image 
          src={"https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485457/Raices/AgentPhotos/Jim_Johnson.jpg"}
          height={"62px"}
          width={"62px"}    
          profile
        />
        <div className="info">
          <div className="name">Kenneth Santos</div>
          <div className="stars">
            <StarIcon 
              height={16}
              width={16}
              fill={"#E67E22"}
            />
            <StarIcon 
              height={16}
              width={16}
              fill={"#E67E22"}
            />
            <StarIcon 
              height={16}
              width={16}
              fill={"#E67E22"}
            />
            <StarIcon 
              height={16}
              width={16}
              fill={"#E67E22"}
            />
            <StarIcon 
              height={16}
              width={16}
              fill={"#E67E22"}
            />
          </div>        
          <div className="time">
            2 hours ago
          </div>
        </div>
      </div>
    </ReviewHeaderHolder>
  ); 
}
