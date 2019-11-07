import React, { Component } from 'react'
import styled from 'styled-components';
import Link from 'next/link';

const StyledNav = styled.div`
  position: fixed;
  display: flex;  
  flex: 1;
  bottom: 0;
  margin: 0;
  width: 100%;
  z-index: 3;
  max-height: 56px;
  /* max-width: 450px; */
  background: #fff;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  justify-content: space-evenly;
  ul {
    display: flex;
    width: inherit;
    justify-content: space-evenly;
    padding-top: 10px;
    padding-left: 0px;
    padding-right: 0px;
    margin-bottom: 5px;
    display: flex;
    flex-direction: row;
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
import PageIcon from './icons/PageIcon';
import AtomIcon from './icons/AtomIcon';
import OrganismIcon from './icons/OrganismIcon';
import MoleculeIcon from './icons/MoleculeIcon';
class BottomNavForm extends Component {
  render() {
    return (
      <StyledNav className="bottomNav">
          <ul>
            <li>
              <Link href="/atoms">
                <a>
                  <AtomIcon 
                    height={25}
                    width={25}
                    fill="#000"
                  />
                  <p>Dash</p>
                </a>
              </Link>           
            </li>
            <li>
              <Link href="/molecules">
                <a>
                  <MoleculeIcon
                    height={25}
                    width={25}
                    fill="#000"
                  />
                  <p>Clients</p>
                </a>
              </Link>                   
            </li>            
          </ul>
        </StyledNav>
    )
  }
}
export default BottomNavForm;