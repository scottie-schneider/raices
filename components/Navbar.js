import React, { Component } from 'react'
import styled from 'styled-components';

const StyledNav = styled.div`
  position: fixed;
  display: flex;  
  flex: 1;
  bottom: 0;
  margin: 0;
  width: 100%;
  max-width: 450px;
  background: #fff;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  ul {
    padding-top: 10px;
    padding-left: 0px;
    padding-right: 0px;
    margin-bottom: 5px;
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
    color: #000 !important;
    p {
      margin-bottom: 0px;
    }
  }
`
// icons 
import SearchPropertyIcon from '../components/icons/SearchPropertyIcon';
import EventConfirmIcon from '../components/icons/EventConfirmIcon';
import AgentIcon from '../components/icons/AgentIcon';
import ChatIcon from '../components/icons/ChatIcon';
import CalendarIcon from '../components/icons/CalendarIcon';
import HomeIcon from '../components/icons/HomeIcon';
class Navbar extends Component {
  render() {
    return (
      <StyledNav>
          <ul>
            <li>
              <a href="#">
                {/*icon */}
                <HomeIcon 
                  height={35}
                  width={35}
                  fill="#000"
                  secondaryfill="#000"
                />
                <p>Homes</p>
              </a>
            </li>
            <li>
              <a href="#">
                {/*icon */}
                <CalendarIcon
                  height={35}
                  width={35}
                  fill="#000"
                  secondaryfill="#000"
                />
                <p>Viewings</p>
              </a>
            </li>
            <li>
              <a href="#">
                {/*icon */}
                <ChatIcon 
                  height={35}
                  width={35}
                  fill="#000"
                  secondaryfill="#000"
                />
                <p>Chat</p>
              </a>
            </li>
            <li>
              <a href="#">
                {/*icon */}
                <AgentIcon 
                  height={35}
                  width={35}
                  fill="#000"
                  secondaryfill="#000"
                />
                <p>Agent</p>
              </a>
            </li>
          </ul>
        </StyledNav>
    )
  }
}
export default Navbar;