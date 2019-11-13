import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

import AgentInfoBlock from './AgentInfoBlock';
import Image from './Image';
import AgentAboutMe from './AgentAboutMe';
import AgentActiveListings from './AgentActiveListings';

const AgentProfileLayout = styled.div`  
  display: grid;
  overflow: hidden;
  border: 1px solid red;
  grid-gap: 10px;
  grid-template-columns: auto; 
  grid-template-rows: auto;
  grid-template-areas:
    "profile"
    "infoBlock"
    "aboutMe"
    "activeListings"
    "reviews"
    "contactInfo"
    "addButton";
  .profile {
    grid-area: profile;
    position: relative;
    z-index: 0;
    width: inherit;
  }
  .card {
    position: absolute;
    top: 342px;
    width: inherit;
    z-index: 1;
    background-color: #fff;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    width: inherit;
    border: 1px solid yellow;
  }
  .infoBlock {
    grid-area: infoBlock;
    width: inherit;
  }
  .aboutMe {
    grid-area: aboutMe;
  }
  .activeListings {
    grid-area: activeListings;
    overflow-x: scroll;
  }
  .reviews {
    grid-area: reviews;
    border: 1px solid red;
  }
  .contactInfo {
    grid-area: contactInfo;
  }
  .addButton {
    grid-area: addButton;
  }

  @media (max-width: 600px) {
    .bottomNav {
      position: fixed;
      display: flex;  
      flex: 1;
      bottom: 0;
      margin: 0;
      width: 100vw;
      /* max-width: 450px; */
      background: #fff;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  }
}
`

export default function LayoutAgentProfile() {
  return (
    <AgentProfileLayout>
      <div className="profile">
        <Image 
          src={"https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485457/Raices/AgentPhotos/Jim_Johnson.jpg"}
          height={"362px"}
          width={"375px"}    
        />
      </div>
      <div className="card">
        <div className="infoBlock">
          <AgentInfoBlock />
        </div>
        <div className="aboutMe">
          <AgentAboutMe />
        </div>
        <div className="activeListings">        
          <AgentActiveListings />
        </div>
        <div class="reviews">
          <p>Reviews</p>
        </div>
        <div className="contactInfo">
          <p>Contact Info</p>
        </div>
        <div className="addButton">
          <button>Add as agent</button>
        </div>
      </div>
    </AgentProfileLayout>
  ); 
}