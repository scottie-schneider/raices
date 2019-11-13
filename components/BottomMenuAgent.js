import React from 'react';
import styled from 'styled-components'

import HomeIcon from './icons/HomeIcon'
import MetricsIcon from './icons/MetricsIcon'
import AgentIcon from './icons/AgentIcon'
import ChatIcon from './icons/ChatIcon'
import MoreIcon from './icons/MoreIcon'

const BottomMenuHolder = styled.div`
  /* position: fixed; */
  display: flex;  
  flex: 1;
  bottom: 0;
  margin: 0;
  width: 100%;
  max-height: 59px;
  max-width: 450px;
  background: #fff;
  font-family: 'Fira Sans', sans-serif;  
  color: #7F8C8D;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  ul {
    padding-left: 0px;
    padding-right: 0px;
    margin-bottom: 5px;
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: space-between;
  }
  li {
    list-style: none;
    text-align: center;
    display: block;
  }
  li a {
    text-decoration: none;
    padding: 0 5px;
    display: block;
    font-size: 11px;
    margin-top: 5px;
    color: #42464C ;
    :hover {
      color: #3498DB;
    }
    p {
      margin-bottom: 0px;
      margin-top: 5px;
    }
  }
`

export default function BottomMenuAgent() {
  return (
    <BottomMenuHolder>
     <ul>
        <li>
          {/* <Link href="/atoms">
            <a>
              <HomeIcon 
                height={20}
                width={20}
                fill="#42464C"
              />
              <p>Listings</p>
            </a>
          </Link>            */}
        </li>
        <li>
          {/* <Link href="/molecules">
            <a>
              <AgentIcon 
                height={20}
                width={20}
                fill="#42464C"
              />
              <p>Leads</p>
            </a>
          </Link>                    */}
        </li>
        <li>
          {/* <Link href="/organisms">
            <a>
              <MetricsIcon 
                height={20}
                width={20}
                fill="#42464C"
              />
              <p>Metrics</p>
            </a>
          </Link>                  */}
        </li>
        <li>
          {/* <Link href="/templates">
            <a>
              <ChatIcon
                height={20}
                width={20}
                fill="#42464C"
              />
              <p>Chat</p>
            </a>
          </Link>          */}
        </li>
        <li>
          <a href="/">
            {/*icon */}
            <MoreIcon
              height={20}
              width={20}
              fill="#42464C"
            />
            <p>More</p>
          </a>
        </li>
      </ul>
    </BottomMenuHolder>
  ); 
}
