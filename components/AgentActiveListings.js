import React from 'react';
import styled from 'styled-components'

import SmallHomeCard from './SmallHomeCard';

const ActiveListingsHolder = styled.div`   
  grid-area: listings;
  z-index: 0;
  * {
    grid-column: 2 / -2;
  }
  overflow: hidden;
  .pseudo-elem {
    
    &::after {
      content: '';
      padding: 0.5em;
    }
  }
  .listings {
    position: relative;
    z-index: 0;
    overflow: hidden;
    margin-top: 25px;
    overflow-x: scroll;
    align-items: flex-start;
    justify-content: flex-start;
    display: flex;
    flex-wrap: nowrap;
    scroll-snap-type: x proximity;
    width: 100%;
    height: 150px;
    -ms-overflow-style: none;  // IE 10+
    scrollbar-width: none;  // Firefox
    ::-webkit-scrollbar {
      display: none;
    }
  }
  .header {
    font-size: 17px;
    font-weight: bold;
  }
`


export default function AgentAboutMe() {
  return (
    <ActiveListingsHolder>
      <span className="header">Jim has 4 active listings</span>
      <div className="listings pseudo-elem">
        <SmallHomeCard />
        <SmallHomeCard />
        <SmallHomeCard />
        <SmallHomeCard />
        <SmallHomeCard />
        <SmallHomeCard />
        <SmallHomeCard />
        <SmallHomeCard />
        <SmallHomeCard />
        <SmallHomeCard />
        <SmallHomeCard />
        <SmallHomeCard />
      </div>
    </ActiveListingsHolder>
  ); 
}
