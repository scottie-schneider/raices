import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

// import the icon styles 
import AtomIcon from './icons/AtomIcon'
import CheckIcon from './icons/CheckIcon'
import EventConfirmIcon from './icons/EventConfirmIcon'
import MagnifyingGlassIcon from './icons/MagnifyingGlassIcon'
import LeftIcon from './icons/LeftIcon'
import OrganismIcon from './icons/OrganismIcon'
import MoleculeIcon from './icons/MoleculeIcon'
import PageIcon from './icons/PageIcon'
import PlayIcon from './icons/PlayIcon'
import PlusIcon from './icons/PlusIcon'
import StarIcon from './icons/StarIcon'
import SendIcon from './icons/SendIcon'
import SearchPropertyIcon from './icons/SearchPropertyIcon'
import HomeIcon from './icons/HomeIcon'
import ListIcon from './icons/ListIcon'
import AgentIcon from './icons/AgentIcon'
import ChatIcon from './icons/ChatIcon'
import MoreIcon from './icons/MoreIcon'
import MetricsIcon from './icons/MetricsIcon'

const IconHolder = styled.div`  
  display: grid;
  grid-gap: 10px;
  color: #1E2227;
  grid-template-columns: 1fr 1fr 1fr 1fr;  
  svg {
    justify-self: center;
    align-self: center;
  }
`

export default function Icons() {
  return (
    <IconHolder>
      <div>
        <p>Atom Icon</p>
        <AtomIcon 
          height={35}
          width={35}
          fill="#1E2227"
        />
      </div>
      <div>
        <p>Check Icon</p>
        <CheckIcon 
          height={35}
          width={35}
          fill="#1E2227"
        />
      </div>
      <div>
        <p>Event Confirm Icon</p>
        <EventConfirmIcon 
          height={35}
          width={35}
          fill="#1E2227"
        />
      </div>
      <div>
        <p>Search Icon</p>
        <MagnifyingGlassIcon  
          height={35}
          width={35}
          fill="#1E2227"
        />
      </div>
      <div>
        <p>Left Icon</p>
        <LeftIcon 
          height={35}
          width={35}
          fill="#1E2227"
        />
      </div>
      <div>
        <p>Molecule Icon</p>
        <MoleculeIcon 
          height={35}
          width={35}
          fill="#1E2227"
        />
      </div>
      <div>
        <p>Organism Icon</p>
        <OrganismIcon 
          height={35}
          width={35}
          fill="#1E2227"
        />
      </div>
      <div>
        <p>Page Icon</p>
        <PageIcon 
          height={35}
          width={35}
          fill="#1E2227"
        />
      </div>
      <div>
        <p>Play Icon</p>
        <PlayIcon 
          height={35}
          width={35}
          fill="#1E2227"
        />
      </div>
      <div>
        <p>Plus Icon</p>
        <PlusIcon 
          height={35}
          width={35}
          fill="#1E2227"
        />
      </div>
      <div>
        <p>Search Property Icon</p>
        <SearchPropertyIcon 
          height={35}
          width={35}
          fill="#1E2227"
        />
      </div>
      <div>
        <p>Send Icon</p>
        <SendIcon 
          height={35}
          width={35}
          fill="#1E2227"
        />
      </div>
      <div>
        <p>Star Icon</p>
        <StarIcon 
          height={35}
          width={35}
          fill={"#1E2227"}
        />
      </div>
      {/* Home Icon */}
      <div>
        <p>Home Icon</p>
        <HomeIcon 
          height={35}
          width={35}
          fill={"#1E2227"}
        />
      </div>
      {/* Lists Icon */}
      <div>
        <p>List Icon</p>
        <ListIcon 
          height={35}
          width={35}
          fill={"#1E2227"}
        />
      </div>
      {/* Agent/Profile Icon */}
      <div>
        <p>Agent Icon</p>
        <AgentIcon 
          height={35}
          width={35}
          fill={"#1E2227"}
        />
      </div>
      {/* Chat Icon */}
      <div>
        <p>Chat Icon</p>
        <ChatIcon 
          height={35}
          width={35}
          fill={"#1E2227"}
        />
      </div>
      {/* Metrics Icon */}
      <div>
        <p>Metrics Icon</p>
        <MetricsIcon 
          height={35}
          width={35}
          fill={"#1E2227"}
        />
      </div>
      {/* More Icon */}
      <div>
        <p>More Icon</p>
        <MoreIcon 
          height={35}
          width={35}
          fill={"#1E2227"}
        />
      </div>
    </IconHolder>
  ); 
}
