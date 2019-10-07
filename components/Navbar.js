import React, { Component } from 'react'
import styled from 'styled-components';

const StyledNav = styled.div`
  position: fixed;
  display: flex;  
  flex: 1;
  bottom: 0;
  margin: 0;
  width: 100%;
  /* max-width: 450px; */
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
import PageIcon from '../components/icons/PageIcon';
import AtomIcon from '../components/icons/AtomIcon';
import OrganismIcon from '../components/icons/OrganismIcon';
import MoleculeIcon from '../components/icons/MoleculeIcon';
class Navbar extends Component {
  render() {
    return (
      <StyledNav>
          <ul>
            <li>
              <a href="#">
                {/*icon */}
                <AtomIcon 
                  height={35}
                  width={35}
                  fill="#000"
                />
                <p>Atoms</p>
              </a>
            </li>
            <li>
              <a href="#">
                {/*icon */}
                <MoleculeIcon
                  height={35}
                  width={35}
                  fill="#000"
                />
                <p>Molecule</p>
              </a>
            </li>
            <li>
              <a href="#">
                {/*icon */}
                <OrganismIcon 
                  height={35}
                  width={35}
                  fill="#000"
                />
                <p>Organisms</p>
              </a>
            </li>
            <li>
              <a href="#">
                {/*icon */}
                <PageIcon
                  height={35}
                  width={35}
                  fill="#000"
                />
                <p>Templates</p>
              </a>
            </li>
            <li>
              <a href="#">
                {/*icon */}
                <PageIcon
                  height={35}
                  width={35}
                  fill="#000"
                />
                <p>Pages</p>
              </a>
            </li>
          </ul>
        </StyledNav>
    )
  }
}
export default Navbar;