import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

import LargeAgentCard from './LargeAgentCard';
import SmallAgentCard from './SmallAgentCard';
import SearchInput from './SearchInput';

const AgentListLayout = styled.div`  
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1.5fr auto; 
  grid-template-rows: auto;
  height: 100vh;
  grid-template-areas:
    "search"
    "largeCards"
    "headline"
    "availableNow";
  .bottomNav {
    display: none;
  }
  .largeCards {
    grid-area: largeCards;
    display: flex;
    overflow-x: auto;
    height: 400px;     d
  }
  .headline {
    grid-area: headline;
  }
  .availableNow {
    grid-area: availableNow;
    display: flex;
    overflow-x: auto;
    height: inherit;   
  }

  .footer {
    grid-area: footer;
    border: 1px solid red;
  }

  @media (max-width: 600px) {
    .bottomNav {
      position: fixed;
      display: flex;  
      flex: 1;
      bottom: 0;
      margin: 0;
      width: 100%;
      /* max-width: 450px; */
      background: #fff;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  }
}
`

export default function LayoutAgentList() {
  return (
    <AgentListLayout>
      <div className="search">
        <SearchInput />
        <p>Click to see a map view of agents near you</p>
      </div>
      <div className="largeCards">
        <LargeAgentCard />
        <LargeAgentCard />
        <LargeAgentCard />
        <LargeAgentCard />
        <LargeAgentCard />
      </div>
      <div className="headline">
        <p>Available Now</p>
      </div>
      <div className="availableNow">        
        <SmallAgentCard />
        <SmallAgentCard />
        <SmallAgentCard />
        <SmallAgentCard />
      </div>
      <div class="bottomNav">
        I'm the bottom Nav
      </div>
    </AgentListLayout>
  ); 
}