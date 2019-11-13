import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

import Image from './Image'
import LargeRatingsComponent from './LargeRatingsComponent';

const AgentInterfaceList = styled.div`
  display: grid;
  grid-gap: 10px;
  columns: 1fr;
`

const AgentInterfaceHolder = styled.div`
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
  .name {
    font-size: 20px;
  }
  .specialties {
    font-size: 12px;
  }
  .ratings {
    font-size: 12px;
  }
`

export default function SmallHorizontalAgentCard() {
  return (
    <AgentInterfaceList>
      <AgentInterfaceHolder>        
        <Image 
          src={"https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485457/Raices/AgentPhotos/Jim_Johnson.jpg"}
          round={true}
          height={"88px"}
          width={"88px"}
          shadow={false}
        />
        <div className="text">
          <div className="name">Jim Johnson</div>
          <div className="specialties">Negotiation, Property Repair</div>
          <LargeRatingsComponent />
        </div>
      </AgentInterfaceHolder>
      <AgentInterfaceHolder>
        <Image 
          src={"https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485457/Raices/AgentPhotos/Jill_Blumcrest.jpg"}
          round={true}
          height={"88px"}
          width={"88px"}
          shadow={false}
        />
        <div className="text">
          <div className="name">Jill Blumcrest</div>
          <div className="specialties">Property Evaluation</div>
          <LargeRatingsComponent />
        </div>
      </AgentInterfaceHolder>
      <AgentInterfaceHolder>
        <Image 
          src={"https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485457/Raices/AgentPhotos/James_Kim.jpg"}
          round={true}
          height={"88px"}
          width={"88px"}
          shadow={false}
        />
        <div className="text">
          <div className="name">James Kim</div>
          <div className="specialties">Negotiation</div>
          <LargeRatingsComponent />
        </div>
      </AgentInterfaceHolder>
    </AgentInterfaceList>
  ); 
}
