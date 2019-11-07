import React from 'react';
import styled from 'styled-components'

const AboutMeHolder = styled.div`
  grid-area: about;
  p {
    color: black;
  }
  .header {
    font-size: 17px;
    font-weight: bold;
  }
`


export default function AgentAboutMe() {
  return (
    <AboutMeHolder>
      <span className="header">About Me</span>
      <p>Hi! I’m Jim, and I’ve been in real estate for the last 30 years. I truly enjoy helping my clients find the home they and their families deserve.</p>
    </AboutMeHolder>
  ); 
}
