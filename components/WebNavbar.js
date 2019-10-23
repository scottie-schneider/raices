import React, { Component } from 'react'
import styled from 'styled-components';
import Link from 'next/link';

const StyledWebNav = styled.div`
    display: grid;
    grid-gap: 10px;
    padding: 0;
    list-style: none;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
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

class WebNavbar extends Component {
  render() {
    return (
      <StyledWebNav className="topNav">
        <nav class="menu">        
          <ul id="menu-list">
            <li>
              <a href="">Tacos</a>
            </li>
            <li>
              <a href="">Beers</a>
            </li>
            <li>
              <a href="">Wines</a>
            </li>
            <li>
              <a href="">Desserts</a>
            </li>
            <li>
              <a href="">Reservations</a>
            </li>
          </ul>
        </nav>
      </StyledWebNav>
    )
  }
}
export default WebNavbar;