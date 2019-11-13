import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

import Image from './Image'

const ChatInterfaceList = styled.div`
  display: grid;
  grid-gap: 10px;
  columns: 1fr;
`

const ChatInterfaceHolder = styled.div`
  font-family: 'Fira Sans', sans-serif; 
  width: 300px;
  flex-direction: column;
  height: 63px; /* 1 */
  flex-direction: row;
  flex-wrap: wrap;
  min-height: 0px;
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
    font-weight: bold;
    padding-top: 6px;
  }
  .subtitle {
    font-size: 15px;
    color: #42464C;
    flex: 1 1 auto;
    width: 165px;
    margin-top: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .metadata {
    display: inline-block;
    float: right;
    padding: 0 0 0 7px;
    position: relative;
    bottom: 20px;
    font-size: 13px;
    color: #95A5A6;
  }
`

export default function HouseChatInterface() {
  return (
    <ChatInterfaceList>
      <ChatInterfaceHolder>
        <Image 
          src={"https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485388/Raices/HomePhotos/1731_Eugene_St..jpg"}
          height={"62px"}
          width={"62px"}    
          profile
        />
        <div className="text">
          <div className="headline">1731 Eugene St.</div>
          <div className="subtitle">What will it take to get approved?</div>
        </div>
        <div className="metadata">2:29 PM</div>
      </ChatInterfaceHolder>
      <ChatInterfaceHolder>
        <Image 
          src={"https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485388/Raices/HomePhotos/775_Henry_Smith_Street.jpg"}
          height={"62px"}
          width={"62px"}    
          profile
        />
        <div className="text">
          <div className="headline">775 Henry Smith St.</div>
          <div className="subtitle">Yeah! When can we see it?</div>
        </div>
        <div className="metadata">2:29 PM</div>
      </ChatInterfaceHolder>
      <ChatInterfaceHolder>
        <Image 
          src={"https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485388/Raices/HomePhotos/352_Hall_St.jpg"}
          height={"62px"}
          width={"62px"}    
          profile
        />
        <div className="text">
          <div className="headline">123 Harrel St.</div>
          <div className="subtitle">I'm ready to sign.</div>
        </div>
        <div className="metadata">2:29 PM</div>
      </ChatInterfaceHolder>
    </ChatInterfaceList>
  ); 
}
