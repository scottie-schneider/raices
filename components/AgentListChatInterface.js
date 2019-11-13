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
    width: auto;
    margin-top: 10px;
  }
`

export default function AgentListChatInterface() {
  return (
    <ChatInterfaceList>
      <ChatInterfaceHolder>
        <Image 
          src={"https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485457/Raices/AgentPhotos/James_Kim.jpg"}
          height={"62px"}
          width={"62px"}    
          profile
        />
        <div className="text">
          <div className="headline">James Kim</div>
          <div className="subtitle">Discussing 2 homes</div>
        </div>
      </ChatInterfaceHolder>
      <ChatInterfaceHolder>
        <Image 
          src={"https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485457/Raices/AgentPhotos/Jill_Blumcrest.jpg"}
          height={"62px"}
          width={"62px"}    
          profile
        />
        <div className="text">
          <div className="headline">Jill Blumcrest</div>
          <div className="subtitle">Discussing 20 homes</div>
        </div>
      </ChatInterfaceHolder>
      <ChatInterfaceHolder>
        <Image 
          src={"https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485457/Raices/AgentPhotos/jerryb.jpg"}
          height={"62px"}
          width={"62px"}    
          profile
        />
        <div className="text">
          <div className="headline">Jerry Bruney</div>
          <div className="subtitle">Discussing 2 homes</div>
        </div>
      </ChatInterfaceHolder>
    </ChatInterfaceList>
  ); 
}
