import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

import Image from './Image'
import StarIcon from './icons/StarIcon'

const ReviewCardHolder = styled.div`
  margin-right: 10px;
  background-color: #fff;
  min-height: 166px;
  min-width: 265px;
  width: 265px;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 5px 10px 0 #D2D3D7;
  font-family: 'Fira Sans', sans-serif;
  overflow: hidden;
  color: #1E2227;
  border-bottom: 5px solid transparent;
  .reviewText {
    margin: 0 5px;
    max-height: 95px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;

    /* Limit the text block to three lines */
    -webkit-line-clamp: 4;
  }
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


export default function ReviewCard() {
  return (
    <ReviewCardHolder>
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
      <div className="reviewText">
        <p>Jim was awesome! He helped me point out a few necessary roof repairs, that enabled me to negotiate better. Saved 5 grand. Now that I know what the process is like I feel comfortable proceeding.</p>
      </div>
    </ReviewCardHolder>
  ); 
}
